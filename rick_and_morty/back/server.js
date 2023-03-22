const http = require("http");
const { getCharById } = require("./controllers/getCharById");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("rickandmorty/character/")) {
    const id = req.url.split("/").pop();
    getCharById(res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3001, () => {
  console.log("Servidor escuchando en el puerto 3001");
});
