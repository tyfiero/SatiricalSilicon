// lib/uploadImage.js

import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function uploadImage(imageData, repoOwner, repoName, pathInRepo) {
  await octokit.rest.repos.createOrUpdateFileContents({
    owner: repoOwner,
    repo: repoName,
    path: pathInRepo,
    message: `Add image ${pathInRepo}`,
    content: imageData.b64_json, 
  });
}
