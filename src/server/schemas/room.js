import mongoose from '../libs/mongoose';

const { Schema } = mongoose;

export default mongoose.model('Room', new Schema({
  name: String,
  description: String,
  capacity: Number,
  equipements: [{
    name: String,
  }],
  createdAt: Date,
  updatedAt: Date,
}), 'Rooms');
