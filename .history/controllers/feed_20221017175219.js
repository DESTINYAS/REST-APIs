exports.getPost = (req, res, next) => {
  res
    .status(200)
    .json([{ title: "First Post", content: "This is my first post" }]);
};
