const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const tokenSerice = require("../services/token.service");
const User = require("../models/User");

router.post("/signUp", [
  check("email", "Не корректный email").isEmail(),
  check("password", "Минимальная длинна пароля 8 символов").isLength({
    min: 8,
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            // errors: errors.array(),
          },
        });
      }

      const { email, password } = req.body;

      const userExisting = await User.findOne({ email });

      if (userExisting) {
        return res.status(400).json({
          error: { message: "EMAIL_EXISTS" },
        });
      }

      const hashedPasword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        ...req.body,
        password: hashedPasword,
      });

      const tokens = tokenSerice.generate({ _id: newUser._id });
      await tokenSerice.save(newUser._id, tokens.refreshToken);

      res.status(201).send({ ...tokens, userId: newUser._id });
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже",
      });
    }
  },
]);

router.post("/signInWithPassword", [
  check("email", "Не корректный email").normalizeEmail().isEmail(),
  check("password", "Пароль не может быть пустым").exists(),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            // errors: errors.array(),
          },
        });
      }

      const { email, password } = req.body;

      const existinguser = await User.findOne({ email });

      if (!existinguser) {
        return res.status(400).json({
          error: { message: "EMAIL_NOT_FOUND", code: 400 },
        });
      }

      const isPaswordEqual = await bcrypt.compare(
        password,
        existinguser.password
      );

      if (!isPaswordEqual) {
        return res.status(400).json({
          error: { message: "INVALID_PASSWORD", code: 400 },
        });
      }

      const tokens = tokenSerice.generate({ _id: existinguser._id });
      await tokenSerice.save(existinguser._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: existinguser._id });
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже",
      });
    }
  },
]);

router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;

    const data = tokenSerice.validateRefresh(refreshToken);
    const dbToken = await tokenSerice.findToken(refreshToken);

    const isTokenIvalid =
      !data || !dbToken || data._id !== dbToken.user.toString();

    if (isTokenIvalid) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }

    const tokens = tokenSerice.generate({ _id: data._id });
    await tokenSerice.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

module.exports = router;
