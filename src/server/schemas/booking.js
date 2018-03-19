import mongoose from '../libs/mongoose';

const { Schema } = mongoose;

const BookingSchema = new Schema({
  name: { type: String, default: 'Meeting' },
  user: { type: String, default: 'Anonymous' },
  description: String,
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  roomId: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

// BookingSchema.path('from').get((from) => {
//   if (typeof (from) === 'string') { return from; }
//   return from.toISOString();
// });

// BookingSchema.path('to').get((to) => {
//   if (typeof (to) === 'string') { return to; }
//   return to.toISOString();
// });

// BookingSchema.set('toObject', { getters: true });

export default mongoose.model('Booking', BookingSchema, 'Bookings');
