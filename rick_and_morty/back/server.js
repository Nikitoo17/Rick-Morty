const http = require("http");
const data = require("./utils/data");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { url } = req;

  if (url.includes("rickandmorty/character/")) {
    const id = url.split("/").pop();

    const character = data.find((char) => char.id == id);

    if (character) {
      res.writeHeader(200, "Content-Type", "application/json");
      return res.end(JSON.stringify(character));
    } else {
      res.writeHeader(404, "Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Personaje no encontrado" }));
    }
  } else {
    res.writeHeader(400, "Content-Type", "application/json");
    res.end("URL inválida");
  }
});

server.listen(3001, () => {
  console.log("Servidor escuchando en puerto 3001");
});
