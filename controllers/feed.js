const { validationResult } = require("express-validator");

const Post = require("../models/post");

exports.getPost = (req, res, next) => {
  res.status(200).json("Welcome");
};

exports.creatPosts = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed, entered data is incorrect");
    error.statusCode = 422;
    throw error;
    // return res.status(422).json({
    //   message: "validation failed, entered data is incorrect",
    //   errors: errors.array(),
    // });
  }
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.body.imageUrl;
  // send post to db
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: { name: "Destiny" },
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post Created Successfully.",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
