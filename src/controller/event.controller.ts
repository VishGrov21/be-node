import { NextFunction, Request, Response } from "express";
import eventServices from "../services/event.services";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, dates } = req.body;
    return res.status(201).json(await eventServices.createEvent(name, dates));
  } catch (error) {
    next(error);
  }
};

const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json(await eventServices.listAllEvents());
  } catch (error) {
    next(error);
  }
};

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    return res.status(200).json(await eventServices.getEventById(id));
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  getEvent,
  getAllEvents,
};
