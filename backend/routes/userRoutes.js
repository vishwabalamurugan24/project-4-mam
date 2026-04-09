const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  removeUser,
} = require("../controllers/userController");

// Routes
router.post("/", createUser);
router.get("/", getAllUsers);
router.delete("/:id", removeUser);

module.exports = router;
