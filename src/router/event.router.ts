import { Router } from "express";
import eventController from "../controller/event.controller";
import votesController from "../controller/votes.controller";

export const eventsRouter = Router();

eventsRouter.route("/list").get(eventController.getAllEvents);
eventsRouter.route("/:id/vote").post(votesController.addVotes);
eventsRouter.route("/:id/results").get(votesController.showResults);
eventsRouter.route("/:id").get(eventController.getEvent);
eventsRouter.route("/").post(eventController.create);
