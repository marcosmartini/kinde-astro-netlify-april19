import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ redirect, cookies, request }) => {
  try {
    const loginURL = await kindeClient.login(sessionManager(cookies));
    return redirect(loginURL.toString());
  } catch (e) {
    console.log(e);
    throw new Error("Errorrrrr");
  }
};
