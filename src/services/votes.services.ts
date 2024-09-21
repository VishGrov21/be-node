import Votes from "../models/votes.model";
import Event from "../models/event.model";
import User from "../models/user.model";
import { NotFoundError } from "../exceptions/notFound.error";

/**
 *
 * @param eventId
 * @param userName
 * @param dates
 * @returns
 */
export const addVotesForAnEvent = async (
  eventId: string,
  userName: string,
  dates: string[]
) => {
  const event = await Event.findById(eventId);
  if (!event) {
    throw new NotFoundError("Event");
  }
  const user = await User.findOne({ name: userName });
  if (!user) {
    throw new NotFoundError("User");
  }
  let votesRecord = await Votes.findOne({ eventId: eventId });
  if (!votesRecord) {
    votesRecord = new Votes({ eventId: eventId, votes: [] });
  }

  /**
   * For each of the date shared by the user, the below code checks if a vote already exists.
   * If it exist then only user id is appended to the users list
   * else a new object is created with date and users
   */
  dates.forEach((date) => {
    const votesArr = votesRecord.votes;
    const existingVote = votesArr.find(
      (existingVote) =>
        existingVote.date.toString() === new Date(date).toString()
    );
    if (!existingVote) {
      votesRecord.votes.push({ date: date, users: [user._id] });
    } else {
      existingVote.users.push(user._id);
    }
  });

  await votesRecord.save();
  return votesRecord;
};

/**
 * As the expectation is that we should show the events that's suitable for "All" participants
 * So we shall identify that how many unique participants and based on that length we
 * have to take up which event date works for all the participants
 * @param eventId
 */
export const showEventResults = async (eventId: string) => {
  const event = await Event.findById(eventId);
  if (!event) {
    throw new NotFoundError("Event");
  }
  const votesRecord = await Votes.findOne({ eventId: eventId });
  if (!votesRecord) {
    throw new NotFoundError("Votes");
  }
  const uniqueUsers = new Set();
  votesRecord.votes.forEach((vote) => {
    vote.users.forEach((user) => uniqueUsers.add(user.toString()));
  });

  const numberOfParticipants = uniqueUsers.size;

  const suitableDates = votesRecord.votes.filter(
    (v) => v.users.length === numberOfParticipants
  );
  console.log("🚀 ~ showEventResults ~ votes:", votesRecord.votes);
  const users = await User.find({ _id: { $in: Array.from(uniqueUsers) } });
  const datesWithUsers = suitableDates.map((date) => ({ date, people: users }));
  return {
    name: event.name,
    id: event._id,
    suitableDates: datesWithUsers,
  };
};
