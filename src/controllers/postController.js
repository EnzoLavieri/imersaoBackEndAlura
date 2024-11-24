import {
  getTodosPosts,
  createNewPost,
  updatePost,
} from "../models/postModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

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

export async function uploadImg(req, res) {
  const newPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const createdPost = await createNewPost(newPost);
    const imgAtualized = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, imgAtualized);
    res.status(200).json(createdPost);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({});
  }
}

export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imageBuffer);
    const post = {
      imgUrl: urlImg,
      descricao: descricao,
      alt: req.body.alt,
    };
    const createdPost = await updatePost(id, post);

    res.status(200).json(createdPost);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({});
  }
}
