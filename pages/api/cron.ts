import { createFile } from "@/lib/createFile";
import { generateImage } from "@/lib/generateImage";
import { generatePost } from "@/lib/generatePost";
import { uploadImage } from "@/lib/uploadImage";

const grayMatter = require('gray-matter');
// import frontMatter from 'front-matter';
import { parseDocument } from 'yaml';

import { NextResponse } from 'next/server';
import { generateImagePrompt } from "@/lib/generateImagePrompt";
 
// export const config = {
//     runtime: 'edge',
//   };
export default async function handler(req, res) {
console.time('makepost')
try{
let response = await generatePost();
console.log(response)

if (response.includes("```")) {
    // Remove triple backticks from the start and end if there are any
    response = response.replace(/^```|```$/g, "");
}
if(response[0] !== '-') {
    // remove all text before first ---
    response = response.replace(/^[\s\S]*?---/, "---");
}

console.log(response); // "Your API Response"
// const extractData = (response) => {
//     const doc = parseDocument(response);
//     return { slug: doc.get('slug'), imgUrl: doc.get('imgUrl'), title: doc.get('title'), description: doc.get('description') };
// }

// const slug = extractData(response).slug;
// const imgUrl = extractData(response).imgUrl;
// const title = extractData(response).title
// const description = extractData(response).description
// Escape all quote characters
// const cleanedResponse = response.replace(/"/g, '\\"').replace(/'/g, "\\'");
const extractData = (response) => {
    const { data } = grayMatter(response);
    return {slug:data.slug, imgUrl:data.imgUrl, title:data.title, description:data.description};
}

const slug = extractData(response).slug;
const imgUrl = extractData(response).imgUrl;
const title = extractData(response).title
const description = extractData(response).description

console.log(slug, imgUrl, title, description)

if(title === undefined || description === undefined) {
    console.log('title or description undefined')
    return res.status(500).end("Post not created successfully.");
}
const promptSubject = title + ' ' + description;

console.log(promptSubject)

const prompt = await generateImagePrompt(promptSubject); 
console.log(prompt)
const imageData = await generateImage(prompt);
// console.log(imageData)
await uploadImage(imageData, 'tyfiero', 'SatiricalSilicon', `public${imgUrl}`);

const post = {
    slug: slug,
    content: response
};

console.log(post)

await createFile(post);

console.timeEnd('makepost')
}catch(e){
    console.log(e)
    console.timeEnd('makepost')
}
res.status(200).end("Post created successfully.");


}