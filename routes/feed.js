const express = require("express");

const { body } = require("express-validator");
const feedController = require("../controllers/feed");
const isAuth = require("../middleware/is_auth");

const router = express.Router();

// Get /feed/posts
router.get("/posts", isAuth, feedController.getPosts);

// Post /feed/posts
router.post(
  "/post",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.creatPosts
);

router.get("/post/:postId", feedController.getPost);
router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);
router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;
