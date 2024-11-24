import express from "express";
import multer from "multer";
import {
  listarPosts,
  postNewPost,
  uploadImg,
  updateNewPost,
} from "../controllers/postController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/post", postNewPost);
  app.post("/upload", upload.single("imagem"), uploadImg);
  app.put("/upload/:id", updateNewPost);
};

export default routes;
