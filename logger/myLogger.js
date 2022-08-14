var winston = require('winston');
const myLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(),winston.format.json()),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({
     filename: 'error.log',
     level: 'error', 
     format:winston.format.combine(winston.format.timestamp(),winston.format.json())
     }),
      new winston.transports.File({ filename: 'combined.log',
      level: 'info',
      format:winston.format.combine(winston.format.timestamp(),winston.format.json()) }),
    ],
  });
  module.exports= {myLogger};