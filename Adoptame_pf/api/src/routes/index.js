const { Router } = require("express");
const router = Router();


const allRoutes = require("./allRoutes");

  //===================

router.use("/api",  allRoutes);


module.exports = router;

