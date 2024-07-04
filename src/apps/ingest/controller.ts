import { Context } from "hono";

export const postIngestController = async (c: Context) => {
	return c.json({
		hello: "world",
	});
};
