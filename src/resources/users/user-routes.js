const express = require('express');
const router = express.Router();
const CreateUserApi = require("./apis/create-user-api");
const GetuserApi = require('./apis/get-user-api')

router.post("/", CreateUserApi.post)
router.get("/", GetuserApi.get)
module.exports = router;