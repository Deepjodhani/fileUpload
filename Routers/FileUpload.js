const express = require("express");
const router = express.Router();

const {imageUpload, videoUpload, imgReducerUp, localFilep} = require("../Controllers/fileUpload");

router.post("/localFilep", localFilep);

module.exports = router;