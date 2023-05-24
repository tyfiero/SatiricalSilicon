// lib/generateImage.js

const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

export async function generateImage(prompt) {
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });
console.log(response.data.data[0])
  return response.data.data[0];
}
