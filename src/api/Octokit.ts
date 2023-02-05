import { Octokit } from "octokit";

export const ApiOctokit = new Octokit({
  auth: process.env.REACT_APP_OCTOKIT_TOKEN,
});
