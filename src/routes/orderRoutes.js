const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/all", orderController.getAllOrders);
router.get("/", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
