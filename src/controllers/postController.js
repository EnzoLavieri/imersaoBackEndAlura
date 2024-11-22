import { getTodosPosts, createNewPost } from "../models/postModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function postNewPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createNewPost(newPost);
    res.status(200).json(createdPost);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({});
  }
}
