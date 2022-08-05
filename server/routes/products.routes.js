const express = require("express");
const router = express.Router({ mergeParams: true });
const Products = require("../models/Products");
const config = require("config");
const uploadMiddleware = require("../middleware/upload");

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(400).json({ message: "INVALID_DATA" });
    }

    const createdProduct = await Products.create(data);
    res.send(createdProduct);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

router.post("/images", uploadMiddleware.single("data"), async (req, res) => {
  try {
    const fileUri = `http://localhost:${config.get("port")}/images/${
      req.file.filename
    }`;
    res.send(fileUri);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndDelete(id);
    res.send(null);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

router.patch("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProducts = await Products.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );

    if (!updatedProducts) {
      return res.status(400).json({ message: "PRODUCT_NOT_FOUND" });
    }

    res.send(updatedProducts);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  }
});

module.exports = router;
