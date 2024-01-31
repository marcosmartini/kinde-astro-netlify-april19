import type { APIRoute } from "astro";
import { kindeClient } from "../../../../astro.config.mjs";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  try {
    const registerURL = await kindeClient.register(sessionManager(cookies));
    return redirect(registerURL.toString());
  } catch (e) {
    console.log(e);
    throw new Error("Errorrrrr");
  }
};
