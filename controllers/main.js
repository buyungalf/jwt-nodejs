const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide the email and password");
  }

  const id = Math.floor(Math.random() * 10);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    msg: "user created",
    token,
  });
};

const dashboard = async (req, res) => {
  luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your lucky number = ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
