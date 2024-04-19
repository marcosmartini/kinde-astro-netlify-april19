import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ request, cookies, redirect, url, locals }) => {
  await kindeClient(url.origin).handleRedirectToApp(sessionManager(cookies), new URL(request.url));

  return redirect("/dashboard", 302);
};
