// index.js

// export const onPreBuild = function ({ netlifyConfig }) {
//   netlifyConfig.build.command = `export KINDE_REDIRECT_URL=${netlifyConfig.build.environment.URL}/api/auth/callback`;
// };

export const onPreBuild = function (a) {
  console.log(process.env);
  console.log("================");
  console.log(a.netlifyConfig);
  console.log("========");
  console.log(a);
};
