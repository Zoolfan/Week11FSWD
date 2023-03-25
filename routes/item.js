const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/w11controller");

router.get("/items", ItemController.findAll);
router.get("/items/:id", ItemController.findOne);
router.post("/items", ItemController.create);
router.delete("/items/:id", ItemController.destroy);

module.exports = router;
