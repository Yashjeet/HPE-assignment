const UserModel = require('../models/user');
const logger = require('../../../lib/logger');
const promiseHandler = require('../../../lib/promise-handler');

const get = async (req, res, next) => {

    logger.info('Request to get all users');
    let [error, result] = await promiseHandler(UserModel.find());

    if (error) {
        logger.error('Failed to get all users', error);
        next(error);
    }
    else {
        let json = result.map(function (p) {
            return p.toJSON()
        });
        res.send({
            status: true,
            entity: json,
            message: 'successfully get user!'
        })
    }
}
module.exports.get = get