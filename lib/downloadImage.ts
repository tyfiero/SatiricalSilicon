// lib/downloadImage.js

import fetch from "node-fetch";
import fs from "fs";
import { promisify } from "util";

const streamPipeline = promisify(require('stream').pipeline);

export async function downloadImage(url, path) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  await streamPipeline(response.body, fs.createWriteStream(path));
}
