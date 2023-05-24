import { createFile } from "@/lib/createFile";
import { generateImage } from "@/lib/generateImage";
import { generatePost } from "@/lib/generatePost";
import { uploadImage } from "@/lib/uploadImage";

const grayMatter = require('gray-matter');

export default async function handler(req, res) {
    // This is an LLMChain to generate ideas.


const response = await generatePost();
const extractData = (response) => {
    const { data } = grayMatter(response);
    return {slug:data.slug, imgUrl:data.imgUrl, title:data.title};
}

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


res.status(200).end("Post created successfully.");

}