const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.get("/", articleController.findAll);
router.delete("/:id", articleController.delete);
router.put("/:id", articleController.update);

module.exports = router;