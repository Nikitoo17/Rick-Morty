const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const { getCharDetail } = require("./controllers/getCharDetail,");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const URL = req.url;

  if (URL.includes("rickandmorty/character/")) {
    const id = URL.split("/").pop();
    getCharById(res, id);
  } else if (URL.includes("rickandmorty/detail/")) {
    const id = URL.split("/").pop();
    getCharDetail(res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
  // } else {
  //   res.writeHead(404, { "Content-Type": "text/plain" });
  //   res.end("Not Found");
  // }
});

server.listen(3001, () => {
  console.log("Servidor escuchando en el puerto 3001");
});
