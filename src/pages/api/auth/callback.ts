import type { APIRoute } from "astro";
import kindeClient from "../../../lib/kinde";
import { sessionManager } from "../../../lib/sessionManager";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const x = await kindeClient.handleRedirectToApp(sessionManager(cookies), new URL(request.url));

  console.log(x);

  return redirect("/dashboard", 302);
};
