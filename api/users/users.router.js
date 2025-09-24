const express = require("express");
const usersController = require("./users.controller");
const router = express.Router();

router.get("/", usersController.getAll);
//Déclaration route /me (exercice)
router.get("/me", usersController.me);
//reste des routes déjà existantes...
router.get("/:id", usersController.getById);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);


module.exports = router;
