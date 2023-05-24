// lib/createOrUpdateFile.js

import { Octokit } from '@octokit/rest';
import { createHash } from 'crypto';

export async function createFile(postContent) {
  // Create a Octokit instance
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,  // Your GitHub token stored in .env.local file
  });

  const repoOwner = 'tyfiero'; // Your GitHub username
  const repoName = 'SatiricalSilicon'; // Your repository name
  const pathToFile = `posts/${postContent.slug}.mdx`; // assuming postContent has a slug property
  const message = `Create ${postContent.slug}.mdx`;

  const sha256 = createHash('sha256');
  sha256.update(postContent.content);
  const fileHash = sha256.digest('hex');

  // Create or update file
  await octokit.rest.repos.createOrUpdateFileContents({
    owner: repoOwner,
    repo: repoName,
    path: pathToFile,
    message: message,
    content: Buffer.from(postContent.content).toString('base64'), // assuming postContent has a content property
    sha: fileHash,
  });
}
