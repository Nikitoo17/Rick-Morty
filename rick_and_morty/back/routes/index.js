const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const router = Router();

router.get("/rickandmorty/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/rickandmorty/detail/:id", (req, res) => {
  getCharDetail(req, res);
});

module.exports = router;
