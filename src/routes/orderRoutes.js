const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/all", orderController.getAllOrders);
router.get("/", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.put("/", orderController.updateOrder);
router.delete("/", orderController.deleteOrder);

module.exports = router;
