import { createFile } from "@/lib/createFile";
import { generateImage } from "@/lib/generateImage";
import { generatePost } from "@/lib/generatePost";
import { uploadImage } from "@/lib/uploadImage";

// const grayMatter = require('gray-matter');
// import frontMatter from 'front-matter';
import { parseDocument } from 'yaml';

import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
 
export const config = {
    runtime: 'edge',
  };
export default async function handler(
    request: NextRequest,
    context: NextFetchEvent,
  ) {
    // This is an LLMChain to generate ideas.

    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateFullPostProcess = async () => {

const response = await generatePost();
const extractData = (response) => {
    const doc = parseDocument(response);
    return { slug: doc.get('slug'), imgUrl: doc.get('imgUrl'), title: doc.get('title') };
}
await wait(10000);

const slug = extractData(response).slug;
const imgUrl = extractData(response).imgUrl;
const title = extractData(response).title
console.log('slug: ' + slug)
console.log('imgUrl: ' + imgUrl)

const prompt = title; // replace eventually with custom prompt for each post
  const imageData = await generateImage(prompt);
  console.log(imageData)
  await uploadImage(imageData, 'tyfiero', 'SatiricalSilicon', `public${imgUrl}`);

const post = {
    slug: slug,
    content: response
};

console.log(post)

await createFile(post);
}


context.waitUntil(generateFullPostProcess().then((json) => console.log({ json })));

// res.status(200).end("Post created successfully.");
return NextResponse.json({
    name: `Hello, from ${request.url} I'm an Edge Function!`,
  });

}