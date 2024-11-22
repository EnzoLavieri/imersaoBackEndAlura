import express from "express";
import { listarPosts, postNewPost } from "../controllers/postController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);

  app.post("/post", postNewPost);
};

export default routes;
