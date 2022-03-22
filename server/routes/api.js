const express = require("express");

const taskController = require("../controllers/task");

const router = express.Router();

router.get("/tasks/:userId", taskController.getTasks);

module.exports = router;
