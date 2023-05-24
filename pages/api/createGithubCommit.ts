// pages/api/createPost.js

import { Octokit } from '@octokit/rest';
import { createHash } from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const postContent = req.body.content;  // Assuming you're sending the content in the request body.

    // Create a Octokit instance
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,  // Your GitHub token stored in .env.local file
    });

    const repoOwner = 'tyfiero'; // Your GitHub username
    const repoName = 'SatiricalSilicon'; // Your repository name
    const pathToFile = 'posts/test.mdx';
    const message = 'Create test.mdx';

    const sha256 = createHash('sha256');
    sha256.update(postContent);
    const fileHash = sha256.digest('hex');

    try {
      // Create or update file
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: repoOwner,
        repo: repoName,
        path: pathToFile,
        message: message,
        content: Buffer.from(postContent).toString('base64'),
        sha: fileHash,
      });

      res.status(200).json({ message: 'Post created successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error: error.message });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
