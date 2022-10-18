const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// Get /feed/posts
router.get("/posts", feedController.getPost);
// Post /feed/posts
router.post("/posts", feedController.creatPosts);

module.exports = router;
