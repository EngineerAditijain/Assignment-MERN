
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user-controller");

router.get("/", usersController.getAllUsers);
router.post("/adduser", usersController.addUser);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;