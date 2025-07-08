const express = require("express");
const router = express.Router(); //
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//  Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // 
  if (!token) return res.status(401).json({ msg: "No token, auth denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

//  Get Profile
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
});

//  Update Profile
router.put("/me", auth, async (req, res) => {
  const updates = req.body;
  const user = await User.findByIdAndUpdate(req.user, updates, { new: true }).select("-password");
  res.json(user); //  fixed
});

// Public route to get all developer profiles
router.get("/all", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Public route to get a single profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router;
