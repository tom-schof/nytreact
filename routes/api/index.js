const router = require("express").Router();
const fetchRoutes = require("./fetch");
const noteRoutes = require("./notes");
const articleRoutes = require("./article");
const clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use('/notes', noteRoutes);
router.use("/article",articleRoutes);
router.use("/clear",clearRoutes);

module.exports = router;