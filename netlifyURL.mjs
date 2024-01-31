let netlifyURL = ""

if (process.env.NETLIFY) {
  if (process.env.CONTEXT == "deploy-preview") {
    netlifyURL = process.env.DEPLOY_URL;
  } else if (process.env.CONTEXT == "production") {
    netlifyURL = process.env.DEPLOY_URL;
  } 
}

export { netlifyURL };
