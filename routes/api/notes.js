const router = require("express").Router();
const noteController = require("../../controllers/noteController");

router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;