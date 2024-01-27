const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { secretKey } = require("../config");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { user: { id: user._id, username: user.username } },
      secretKey,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
