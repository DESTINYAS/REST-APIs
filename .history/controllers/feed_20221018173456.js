const { validationResult } = require("express-validator");

exports.getPost = (req, res, next) => {
  res.status(200).json("Welcome");
};

exports.creatPosts = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "validation failed, entered data is incorrect",
      errors: errors.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  // send post to db
  res.status(201).json({
    message: "Post Created Successfully.",
    post: {
      id: new Date(),
      title: title,
      content: content,
      creator: { name: "Destiny" },
      createdAt: new Date(),
    },
  });
};
