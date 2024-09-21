import { NextFunction, Request, Response } from "express";
import {
  showEventResults,
  addVotesForAnEvent,
} from "../services/votes.services";

const addVotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, votes } = req.body;
    const {id} = req.params;
    return res.status(201).json(await addVotesForAnEvent(id, name, votes));
  } catch (error) {
    next(error);
  }
};

const showResults = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    return res.status(200).json(await showEventResults(id));
  } catch (error) {
    next(error);
  }
};

export default {
  addVotes,
  showResults,
};
