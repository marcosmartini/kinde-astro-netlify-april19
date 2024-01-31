import { createKindeServerClient, GrantType } from "@kinde-oss/kinde-typescript-sdk";
import { netlifyURL } from "../../netlifyURL.mjs";

// Client for authorization code flow
const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: import.meta.env.KINDE_ISSUER_URL,
  clientId: import.meta.env.KINDE_CLIENT_ID,
  clientSecret: import.meta.env.KINDE_CLIENT_SECRET,
  redirectURL: netlifyURL ? `${netlifyURL}/api/auth/callback` : import.meta.env.KINDE_REDIRECT_URL,
  logoutRedirectURL: netlifyURL ?? import.meta.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});

export default kindeClient;
