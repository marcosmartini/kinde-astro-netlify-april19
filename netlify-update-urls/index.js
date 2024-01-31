// index.js

export const onPreBuild = async function ({ netlifyConfig }) {
  if (netlifyConfig.build.environment.CONTEXT == "production") {
    netlifyConfig.build.environment.KINDE_REDIRECT_URL = `${netlifyConfig.build.environment.URL}/api/auth/callback`;
    netlifyConfig.build.environment.KINDE_POST_LOGOUT_REDIRECT_URL =
      netlifyConfig.build.environment.URL;
  }
};
