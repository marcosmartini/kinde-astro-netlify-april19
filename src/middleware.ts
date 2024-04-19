import { defineMiddleware } from "astro:middleware";
import { sessionManager } from "./lib/sessionManager";
import kindeClient from "./lib/kinde";

export const onRequest = defineMiddleware(async ({ cookies, locals, url }, next) => {
  const session = sessionManager(cookies);
  const isAuthenticated = await kindeClient(url.origin).isAuthenticated(sessionManager(cookies));

  if (isAuthenticated) {
    const user = await kindeClient(url.origin).getUser(sessionManager(cookies));
    locals.user = user as KindeUser;
    locals.acStateKey = await session.getSessionItem("ac-state-key");
    locals.idToken = await session.getSessionItem("id_token");
    locals.accessToken = await session.getSessionItem("access_token");
    locals.refreshToken = await session.getSessionItem("refresh_token");
  }

  // locals.kinde.user = user as KindeUser;

  return next();
});
