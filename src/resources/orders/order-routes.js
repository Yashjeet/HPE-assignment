const express = require('express');
const router = express.Router();
const CreateOrderApi = require("./apis/create-order-api");
const CreateCommentApi = require("./apis/create-comment-api");
const GetCommentsApi = require("./apis/get-comments-api");
const CreateRepliedApi = require("./apis/create-reply-on-comment-api");

router.post("/", CreateOrderApi)
router.post("/:orderId/comments", CreateCommentApi);
router.post("/:orderId/comments/:commentId", CreateRepliedApi);
router.get("/:orderId/comments", GetCommentsApi);

module.exports = router;