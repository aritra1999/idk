import { Hono } from "hono";
import { postIngestController } from "./controller";

export const ingestRouter = new Hono();

ingestRouter.post("/", postIngestController);
