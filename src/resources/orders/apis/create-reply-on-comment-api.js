const Order = require('../models/order');
const logger = require('../../../lib/logger');
const promiseHandler = require('../../../lib/promise-handler');

module.exports = async (req, res, next) => {
    const { commentId, orderId } = req.params;
    const { text, repliedById } = req.body;

    logger.info('Request to create a reply on comment', { text, repliedById, commentId });

    const [error, result] = await promiseHandler(Order.findOneAndUpdate({ "_id": orderId, "comments._id": commentId }, {
        $push: {
            'comments.$.replies': {
                text,
                repliedBy: repliedById
            }
        },
    }, { new: true, useFindAndModify: false }).then(t => t.populate('createdBy')
        .populate("comments.commentedBy").populate("comments.replies.repliedBy").execPopulate()));

    if (error) {
        next(error);
    }
    else {
        res.send({
            status: true,
            entity: result,
            message: 'successfully created replied on order!'
        })
    }
}