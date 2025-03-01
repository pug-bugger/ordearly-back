const mongoose = require("mongoose");
const Order = require("../models/Order");

// Получить все заказы
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.query.id; // Получаем ID из query-параметров

  if (!orderId) {
    return res.status(400).json({ message: "ID заказа не указан" });
  } else if (!mongoose.Types.ObjectId.isValid(orderId)) {
    return res.status(400).json({ message: "Некорректный ID заказа" });
  }

  try {
    const order = await Order.findById(orderId);
    const respondeCode = order ? 200 : 404;
    res
      .status(respondeCode)
      .json(order ? order : { message: "Заказ не найден" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ошибка сервера", error });
  }
};

// Создать новый заказ
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: "Ошибка создания заказа" });
  }
};

// Обновить заказ
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: "Ошибка обновления заказа" });
  }
};

// Удалить заказ
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Заказ удален" });
  } catch (error) {
    res.status(400).json({ message: "Ошибка удаления заказа" });
  }
};
