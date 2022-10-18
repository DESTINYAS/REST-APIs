const express = require("express");

const { body, validationResult } = require("express-validator");
const feedController = require("../controllers/feed");

const router = express.Router();

// Get /feed/posts
router.get(
  "/posts",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.getPost
);
// Post /feed/posts
router.post("/post", feedController.creatPosts);

module.exports = router;
