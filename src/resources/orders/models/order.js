const Mongoose = require('mongoose');

const Schema = Mongoose.Schema


const replySchema = new Schema({
    text: String,
    repliedBy: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

const commentSchema = new Schema({
    text: String,
    commentedBy: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    replies: [replySchema]
}, { timestamps: true })


const orderSchema = new Schema({
    title: String,
    createdBy: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comments: [commentSchema]
}, { timestamps: true });

const OrderModel = Mongoose.model("order", orderSchema);

module.exports = OrderModel;