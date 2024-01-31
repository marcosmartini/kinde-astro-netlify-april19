// index.js

// export const onPreBuild = function ({ netlifyConfig }) {
//   netlifyConfig.build.command = `export KINDE_REDIRECT_URL=${netlifyConfig.build.environment.URL}/api/auth/callback`;
// };

export const onPreBuild = function ({ netlifyConfig }) {
  netlifyConfig.build.command = `KINDE_REDIRECT_URL=${netlifyConfig.build.environment.URL}/api/auth/callback && npm run build`;
};
