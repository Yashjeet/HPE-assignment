const Order = require('../models/order');
const logger = require('../../../lib/logger');
const promiseHandler = require('../../../lib/promise-handler');

module.exports = async (req, res, next) => {
    const { orderId } = req.params;
    const { text, commentedById } = req.body;

    logger.info('Request to comment on order', { text, orderId, commentedById });

    const [error, result] = await promiseHandler(Order.findOneAndUpdate({ _id: orderId }, {
        $push: {
            comments: {
                text,
                commentedBy: commentedById
            }
        },
    }, { new: true })
        .then(t => t.populate('createdBy').populate("comments.commentedBy")
            .populate("comments.replies.repliedBy").execPopulate()));

    if (error) {
        next(error);
    }
    else {
        const newlyPushedComment =  result.comments.pop();
        res.send({
            status: true,
            entity: newlyPushedComment,
            message: 'successfully created comment on order!'
        })
    }
}