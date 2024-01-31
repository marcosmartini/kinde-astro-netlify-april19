// index.js

export const onPreBuild = async function ({ netlifyConfig }) {
  if (netlifyConfig.build.environment.CONTEXT == "production") {
    console.log(netlifyConfig);
  }
};
