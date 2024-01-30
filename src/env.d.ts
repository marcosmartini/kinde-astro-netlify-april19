/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user: {
      family_name: string;
      given_name: string;
      picture: string;
      email: string;
      id: string;
    };
    acStateKey: string;
    idToken: string;
    accessToken: string;
    refreshToken: string;
    netlify: any;
  }
}

interface ImportMetaEnv {
  readonly KINDE_CLIENT_ID: string;
  readonly KINDE_CLIENT_SECRET: string;
  readonly KINDE_ISSUER_URL: string;
  readonly KINDE_SITE_URL: string;
  readonly KINDE_POST_LOGOUT_REDIRECT_URL: string;
  readonly KINDE_POST_LOGIN_REDIRECT_URL: string;
  readonly KINDE_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
