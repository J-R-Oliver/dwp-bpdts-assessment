const winston = require('winston');
const expressWinston = require('express-winston');

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }),
  new winston.transports.File({
    filename: 'logs/requests.log',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'DD-MM-YYYY HH:mm:ss'
      }),
      winston.format.simple(),
      winston.format.json()
    )
  })
];

exports.logger = expressWinston.logger({
  transports: [transports[1]]
});

exports.errorLogger = expressWinston.errorLogger({
  transports
});
