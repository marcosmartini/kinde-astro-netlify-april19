import { createKindeServerClient, GrantType } from "@kinde-oss/kinde-typescript-sdk";

// Client for authorization code flow
const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: import.meta.env.KINDE_ISSUER_URL,
  clientId: import.meta.env.KINDE_CLIENT_ID,
  clientSecret: import.meta.env.KINDE_CLIENT_SECRET,
  redirectURL: import.meta.env.KINDE_POST_LOGIN_REDIRECT_URL,
  logoutRedirectURL: import.meta.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});

export default kindeClient;
