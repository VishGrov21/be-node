import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dates: {
    type: [Date],
    required: true,
  },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
