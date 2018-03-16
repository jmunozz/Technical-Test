import express from 'express';
import rooms from './rooms';


// Create router
const router = express.Router();

/*
** Rooms
*/
router.get('/api/rooms', rooms.getAll);

export default router;
