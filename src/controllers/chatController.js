const Chat = require("../models/Chat");

// Получить все чаты
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

// Создать новый чат
exports.createChat = async (req, res) => {
  try {
    const { participants } = req.body;
    const newChat = new Chat({ participants, messages: [] });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(400).json({ message: "Ошибка создания чата" });
  }
};

// Отправить сообщение
exports.sendMessage = async (req, res) => {
  try {
    const { text, sender } = req.body;
    const chat = await Chat.findById(req.params.chatId);

    if (!chat) return res.status(404).json({ message: "Чат не найден" });

    chat.messages.push({ text, sender });
    await chat.save();

    res.status(201).json(chat);
  } catch (error) {
    res.status(400).json({ message: "Ошибка отправки сообщения" });
  }
};

// Получить сообщения чата
exports.getMessages = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId);
    if (!chat) return res.status(404).json({ message: "Чат не найден" });

    res.status(200).json(chat.messages);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
