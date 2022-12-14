const express = require("express");

const { body } = require("express-validator");
const feedController = require("../controllers/feed");

const router = express.Router();

// Get /feed/posts
router.get("/posts", feedController.getPost);
// Post /feed/posts
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.creatPosts
);

module.exports = router;
