// index.js

export const onPreBuild = async function ({ netlifyConfig }) {
  if (netlifyConfig.build.environment.CONTEXT == "production") {
    netlifyConfig.build.command = `KINDE_REDIRECT_URL=$URL npm run build`;

    console.log(netlifyConfig);
  }
};
