const UserModel = require('../models/user');
const logger = require('../../../lib/logger');
const promiseHandler = require('../../../lib/promise-handler');

const post = async (req, res, next) => {
    const { name, mobile } = req.body;

    logger.info('Request to create user', { name, mobile });

    const user = new UserModel({
        name,
        mobile
    });

    const [error, result] = await promiseHandler(user.save());
    if (error) {
        next(error);
    }
    else {
        res.send({
            status: true,
            entity: result,
            message: 'successfully created user!'
        })
    }

}
module.exports.post = post