//const winston = require('winston');
const{createLogger,transports,format} = require("winston")
 
const loggerActivation = createLogger({
  
  //format: winston.format.json(),
  //defaultMeta: { service: 'user-service' },
  transports: [
      new transports.File({filename: './logs/logs.log',level: 'info'})
    //
    //d - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
   // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports= loggerActivation;