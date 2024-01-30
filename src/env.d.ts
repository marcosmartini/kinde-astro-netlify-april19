/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type NetlifyLocals = import("@astrojs/netlify").NetlifyLocals;

type KindeUser = {
  family_name: unknown;
  given_name: unknown;
  picture: unknown;
  email: unknown;
  id: unknown;
};

declare namespace App {
  interface Locals extends NetlifyLocals {
    user: KindeUser;
    acStateKey: unknown;
    idToken: unknown;
    accessToken: unknown;
    refreshToken: unknown;
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
