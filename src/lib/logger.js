const winston = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const logDir = './logs';
let transport;

let logger;
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

if (!logger) {
    transport = new (winston.transports.DailyRotateFile)({
        filename: './logs/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        prepend: false,
        json: false,
        colorize: true,
        level: 'debug'
    });
    logger = winston.createLogger({
        transports: [
            transport
        ],
        exitOnError: false /
    });
}

module.exports = logger;
