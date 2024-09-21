import { NotFoundError } from "../exceptions/notFound.error";
import Event from "../models/event.model";

const createEvent = async (name: string, dates: string[]) => {
  const event = new Event({ name: name, dates: dates });
  await event.save();
  return event;
};

const listAllEvents = async () => {
  const events = await Event.find();
  return events;
};

const getEventById = async (id: string) => {
  console.log("🚀 ~ getEventById ~ id:", id);
  const event = await Event.findById(id);
  console.log("🚀 ~ getEventById ~ event:", event);
  if (!event) throw new NotFoundError("Event");
  return event;
};

export default { listAllEvents, getEventById, createEvent };
