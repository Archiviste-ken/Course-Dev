const postModel = require("../model/post.model");
const ImageKit = require("@imagekit/nodejs/index.js");
const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");
const likeModel = require("../model/like.model");


console.log("ENV:", process.env.IMAGEKIT_PRIVATE_KEY);

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);
  console.log("cookies:", req.cookies);
  const token = req.cookies.token;


  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostController(req, res) {

  const userId = req.user.id;
  // console.log(decoded);
  // console.log(userId);

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Here are the posts for the user",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const token = req.cookies.token;



  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found.",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden Context.",
    });
  }

  return res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
}



async function LikePostController(req, res) {
  
  const username = req.user.username
  const postId = req.params.postId


  const post = await postModel.findById(postId)

  if (!post) {
    return res.status(404).json({
      message: "Post not found"
    })

  }
  
    const like = await likeModel.create({
      post: postId,
      user: username
    })   
    return res.status(200).json({
      message: "Post liked successfully",
      like
    })
    

 }


async function getFeedController(req,res) {

    const posts = await postModel.find()  // fetches all the posts created.

    res.status(200).json({
      message: "posts fetched successfully.",
      posts
    })
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  LikePostController,
  getFeedController
}
