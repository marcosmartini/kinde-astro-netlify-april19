import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ redirect, cookies, url }) => {
  try {
    const registerURL = await kindeClient(url.origin).register(sessionManager(cookies));
    return redirect(registerURL.toString());
  } catch (e) {
    console.log(e);
    throw new Error("Errorrrrr");
  }
};
