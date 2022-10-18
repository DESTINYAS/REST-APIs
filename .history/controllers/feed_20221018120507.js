exports.getPost = (req, res, next) => {
  res.status(200).json({
    post: [
      {
        _id: "1",
        title: "First post",
        content: "This is the first post",
        imageUrl: images / image.png,
        creator: {
          name: "Destiny",
        },
        date: new Date(),
      },
    ],
  });
};

exports.creatPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // send post to db
  res.status(201).json({
    message: "Post Created Successfully.",
    post: {
      id: new Date(),
      title: title,
      content: content,
      imageUrl: images / image.png,
    },
  });
};
