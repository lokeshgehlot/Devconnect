const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, auth denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Send a message
router.post("/send/:receiverId", auth, async (req, res) => {
  try {
    const receiver = await User.findById(req.params.receiverId);
    if (!receiver) return res.status(404).json({ msg: "User not found" });

    const newMessage = {
      from: req.user,
      text: req.body.text,
    };

    receiver.messages.push(newMessage);
    await receiver.save();

    res.json({ msg: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all messages received by the logged-in user
router.get("/inbox", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).populate("messages.from", "name email");
    res.json(user.messages);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch messages" });
  }
});

// ✅ Get all messages sent by the logged-in user (only keep this one)
router.get("/sent", auth, async (req, res) => {
  try {
    const users = await User.find({ "messages.from": req.user }).select("name email messages");

    const sentMessages = [];

    users.forEach((user) => {
      user.messages.forEach((msg) => {
        if (msg.from.toString() === req.user) {
          sentMessages.push({
            to: { name: user.name, email: user.email },
            text: msg.text,
            timestamp: msg.timestamp,
          });
        }
      });
    });

    res.json(sentMessages);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch sent messages" });
  }
});

module.exports = router;
