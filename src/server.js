require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// Подключение MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);
app.use("/api/chats", chatRoutes);

// Простейший маршрут для теста
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/status", (req, res) => {
  res.json({ message: "Server is running", timestamp: new Date() });
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
