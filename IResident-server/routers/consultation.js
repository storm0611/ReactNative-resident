const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { getRandomInt } = require("../utils");

router.post("/", async (req, res) => {
  return res.json({
    str: 'success',
  });
});

module.exports = router;
