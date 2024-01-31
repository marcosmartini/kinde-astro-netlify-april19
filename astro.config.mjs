import { defineConfig } from 'astro/config';

import { createKindeServerClient, GrantType } from "@kinde-oss/kinde-typescript-sdk";

import netlify from "@astrojs/netlify";

// Client for authorization code flow
const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: process.env.KINDE_ISSUER_URL,
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  redirectURL: process.env.KINDE_REDIRECT_URL,
  logoutRedirectURL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
});

export {kindeClient}


