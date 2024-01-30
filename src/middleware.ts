import { defineMiddleware } from "astro:middleware";
import { sessionManager } from "./lib/sessionManager";

export const onRequest = defineMiddleware(async ({ cookies, locals }, next) => {
  const session = sessionManager(cookies);

  locals.user = (await session.getSessionItem("user")) as any;
  locals.acStateKey = (await session.getSessionItem("ac-state-key")) as any;
  locals.idToken = (await session.getSessionItem("id_token")) as any;
  locals.accessToken = (await session.getSessionItem("access_token")) as any;
  locals.refreshToken = (await session.getSessionItem("refresh_token")) as any;

  console.log(locals.netlify);

  return next();
});
