import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ingestRouter } from "./apps/ingest/router";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.route("/ingest", ingestRouter);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
