import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    img: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo yoga",
    img: "https://placekitten.com/400/200",
  },
  {
    id: 3,
    descricao: "Gatinho dormindo",
    img: "https://placekitten.com/200/300",
  },
  {
    id: 4,
    descricao: "Gato curioso",
    img: "https://placekitten.com/300/300",
  },
  {
    id: 5,
    descricao: "Gato brincando com um novelo de lã",
    img: "https://placekitten.com/500/300",
  },
  {
    id: 6,
    descricao: "Gato olhando pela janela",
    img: "https://placekitten.com/400/400",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando no port 3000.");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

//-----------------------------------------------------------
function srcPostByID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/post/:id", (req, res) => {
  const index = srcPostByID(req.params.id);
  res.status(200).json(posts[index]);
});
