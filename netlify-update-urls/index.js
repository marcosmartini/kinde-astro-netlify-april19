// index.js

export const onPreBuild = async function ({ netlifyConfig }) {
  if (netlifyConfig.build.environment.CONTEXT == "production") {
    netlifyConfig.build.command = `sed -i s/import.meta.env.KINDE_REDIRECT_URL/${netlifyConfig.build.environment.URL}/g ./src/lib/kinde.ts && npm run build`;

    console.log(netlifyConfig);
  }
};
