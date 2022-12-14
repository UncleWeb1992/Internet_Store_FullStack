const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./users.routes"));
router.use("/comments", require("./comments.routes"));
router.use("/products", require("./products.routes"));

module.exports = router;
