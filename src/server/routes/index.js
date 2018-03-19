import express from 'express';
import bodyParser from 'body-parser';

import * as rooms from './rooms';
import errors from '../middlewares/errors';
import logRequests from '../middlewares/logRequests';

// Create router
const router = express.Router();

/*
** Rooms
*/

// Middlewares
router.use(logRequests);
router.use(bodyParser.json());

// Routes
router.get('/rooms/:id', rooms.getBooking);
router.post('/rooms/:id', rooms.postBooking);
router.get('/rooms', rooms.getAll);

// Errors
router.use(errors);

export default router;
