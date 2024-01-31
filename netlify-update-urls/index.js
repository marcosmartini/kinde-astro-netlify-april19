// index.js

const updateVars = async (netlifyConfig) => {
  netlifyConfig.build.environment.KINDE_CLIENT_ID = "e6f800baf7b94b79b8301d87521d4c94";
  netlifyConfig.build.environment.KINDE_CLIENT_SECRET =
    "JZAb2v2FstmaFLpSiM0DkesOdnRbUDY3qL7dXSqR5ymLaB3xiTm";
  netlifyConfig.build.environment.KINDE_ISSUER_URL = "https://mm.kinde.com";
  netlifyConfig.build.environment.KINDE_POST_LOGOUT_REDIRECT_URL =
    netlifyConfig.build.environment.URL;
  netlifyConfig.build.environment.KINDE_REDIRECT_URL = `${netlifyConfig.build.environment.URL}/api/auth/callback`;
};

export const onPreBuild = async function ({ netlifyConfig }) {
  if (netlifyConfig.build.environment.CONTEXT == "production") {
    const response = await updateVars(netlifyConfig);

    console.log(response);
  }
};
