const OrderModel = require('../models/order');
const logger = require('../../../lib/logger');
const promiseHandler = require('../../../lib/promise-handler');

module.exports = async (req, res, next) => {
    const { title, createdById } = req.body;

    logger.info('Request to create an order', { title, createdById });
    const order = new OrderModel({
        title,
        createdBy: createdById
    });
    const [error, result] = await promiseHandler(order.save().then(t => t.populate('createdBy').execPopulate()));
    if (error) {
        next(error);
    }
    else {
        res.send({
            status: true,
            entity: result,
            message: 'successfully created order!'
        })
    }

}