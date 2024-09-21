import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { eventsRouter } from "./router/event.router";
import { usersRouter } from "./router/user.router";
import "./database/mongoose.database";

const app = express();
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const eventsURI = `/api/v1/events`;
const usersURI = "/api/v1/users";

app.use(eventsURI, eventsRouter);
app.use(usersURI, usersRouter);

export { app };
