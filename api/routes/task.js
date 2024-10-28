// impot express
const express = require("express");

// import router module
const router = express.Router();

const taskCtrl = require("../controllers/task");

router.get("/", taskCtrl.getAllTask);
router.get("/:id", taskCtrl.getOneTask);
router.post("", taskCtrl.createTask);
router.put("/:id", taskCtrl.updateTask);
router.delete("/:id", taskCtrl.deleteTask);

module.exports = router;
