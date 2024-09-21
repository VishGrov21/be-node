import mongoose from "mongoose";

const votesSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    votes: [
      {
        date: {
          type: Date,
          required: true,
        },
        users: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Votes = mongoose.model("Votes", votesSchema);
export default Votes;
