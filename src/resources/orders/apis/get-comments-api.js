const OrderModel = require('../models/order');
const promiseHandler = require('../../../lib/promise-handler');
const logger = require('../../../lib/logger');

module.exports = async (req, res, next) => {
    const { orderId } = req.params;
    logger.info('Request to get all comments on order with reply', { orderId });

    const [error, result] = await promiseHandler(OrderModel.findOne({ _id: orderId }, { '_id': 0 })
        .select('comments')
        .then(t => t.populate('comments.commentedBy')
            .populate('comments.replies.repliedBy').execPopulate()));
    if (error) {
        logger.error('failed to get all comments on order with reply', error);
        next(error);
    }
    else {
        res.send({
            status: true,
            entity: result.comments,
            message: 'successfully get all comments on order!'
        })
    }
}