import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ redirect, cookies, url }) => {
  try {
    const loginURL = await kindeClient(url.origin).login(sessionManager(cookies));
    return redirect(loginURL.toString());
  } catch (e) {
    console.log(e);
    throw new Error("Errorrrrr");
  }
};
