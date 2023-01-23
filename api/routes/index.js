const express = require("express");
const router = express.Router();
const users = require("./users");
const favoritos = require("./favoritos");

router.use("/users", users);
router.use("/favoritos", favoritos);

module.exports = router;