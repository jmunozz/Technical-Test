import moment from 'moment';

import * as response from '../libs/responses';
import Room from '../schemas/room';
import Booking from '../schemas/booking';
import log from '../libs/logger';
import ValidationError from '../classes/validationError';

export function getAll(req, res, next) {
  return Room.find()
    .then((rooms) => {
      const { equipements, capacity } = req.query;

      // Filter by capacity.
      let results = rooms.filter((room) => {
        if (capacity) return room.capacity >= capacity;
        return true;
      });

      // Filter by equipement.
      results = results.filter((room) => {
        if (equipements) {
          let hasAll = true;
          equipements.split(',').forEach((equFilter) => {
            if (!room.equipements.find(equ => equ.name === equFilter)) { hasAll = false; }
          });
          return hasAll;
        }
        return true;
      });

      log.info(results);
      response.sendResponse(res, results);
    })
    .catch((e) => {
      log.info(e);
      next(e);
    });
}

export function getBooking(req, res, next) {
  const { id } = req.params;
  return Booking.find({ roomId: id })
    .then((bookings) => {
      response.sendResponse(res, bookings);
    })
    .catch((e) => {
      next(e);
    });
}

export function postBooking(req, res, next) {
  const { id } = req.params;
  const booking = new Booking({ ...req.body, ...{ roomId: id } });


  return booking.validate()
    // Check validation rules are ok.
    .then(() => Room.find())
    // Check room id is valid.
    .then((rooms) => {
      const roomsIds = rooms.map(room => room.id);
      if (!roomsIds.includes(id)) {
        throw new ValidationError('room id does not exist');
      }

      booking.set('from', moment(booking.get('from')));
      booking.set('to', moment(booking.get('to')).subtract(1, 'seconds'));

      return Booking.find({
        $or: [{
          from: {
            $gte: booking.get('from'),
            $lte: booking.get('to'),
          },
        }, {
          to: {
            $gte: booking.get('from'),
            $lte: booking.get('to'),
          }
        }]
      });
    })
    // Check Booking is possible.
    .then((registeredBookings) => {
      if (registeredBookings.length) {
        throw new ValidationError('This slot is at least already partially booked');
      }
      if (moment(booking.get('to')).diff(booking.get('from'), 'minutes') > 120) {
        throw new ValidationError('Slot cannot exceed two hours');
      }
      if (moment(booking.get('from')).isBefore(moment())) {
        throw new ValidationError('Passed slots cannot be booked');
      }
      return booking.save();
    })
    .then(() => {
      response.sendResponse(res, booking.toObject());
    })
    .catch((e) => {
      next(e);
    });
}
