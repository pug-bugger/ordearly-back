const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB подключен");
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error);
    process.exit(1); // Завершаем процесс при ошибке
  }
};

module.exports = connectDB;
