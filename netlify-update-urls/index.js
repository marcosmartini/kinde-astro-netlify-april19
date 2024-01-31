// index.js

export const onPreBuild = function ({ netlifyConfig }) {
  const newCommand = `node YOUR_SCRIPT.js`;

  // Modify build command's environment variables
  console.log(netlifyConfig);
};
