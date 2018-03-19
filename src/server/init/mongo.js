import mongoose from '../libs/mongoose';
import log from '../libs/logger';

/*
** Initialize mongo and mongoose
*/


// Connection
mongoose.connect('mongodb://jmunoz:stationF@ds115729.mlab.com:15729/stationf');
mongoose.connection.on('connected', () => log.info('Mongodb connected'));
mongoose.connection.on('disconnected', () => log.info('Mongodb disconnected'));


// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    log.fatal('MongoDb disconnected through app termination');
    process.exit(1);
  });
});
