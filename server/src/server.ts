import express from "express";

const server = express();

const PORT = 8000;

server.get("/", (req, res) => {
  res.send(`Heloooo from the backend`);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
