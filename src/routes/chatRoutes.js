const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.get("/", chatController.getChats);
router.post("/", chatController.createChat);
router.post("/:chatId/messages", chatController.sendMessage);
router.get("/:chatId/messages", chatController.getMessages);

module.exports = router;
