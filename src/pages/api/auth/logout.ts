import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  try {
    const logoutURL = await kindeClient.logout(sessionManager(cookies));
    return redirect(logoutURL.toString());
  } catch (e) {
    console.log(e);
    throw new Error("Errorrrrr");
  }
};
