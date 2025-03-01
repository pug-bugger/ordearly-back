const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // Протезы, бриллианты и т.д.
    supplier: { type: String, required: true },
    deadline: { type: Date, required: true },
    status: { type: String, default: "Pending" }, // Pending, In Progress, Done
    files: [{ type: String }], // Ссылки на файлы
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
