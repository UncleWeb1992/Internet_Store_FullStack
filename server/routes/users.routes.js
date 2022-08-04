const express = require("express");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      res.status(400).json({ message: "ID_NOT_FOUND" });
    }
    const curentUser = await User.findById(userId);

    if (!curentUser) {
      res.status(400).json({ message: `USER_BY_ID_${userId}__NOT_FOUND` });
    }

    res.send(curentUser);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.send(users);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

module.exports = router;
