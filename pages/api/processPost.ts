import { createFile } from '@/lib/createFile';
import { generateImage } from '@/lib/generateImage';
import { uploadImage } from '@/lib/uploadImage';
import { NextResponse } from 'next/server';
export default async function handler(req, res) {
console.time('makepost')
try{
//post request using fetch api to generate_post endpoint:
    console.log(req.body)
    const metadata = req.body.metadata;
    const content = req.body.content;
    const imagePrompt = req.body.imagePrompt;

    const imageData = await generateImage(imagePrompt);




    await uploadImage(imageData, 'tyfiero', 'SatiricalSilicon', `public${metadata.imgUrl}`);


    const post = {
        slug: metadata.slug,
        title: metadata.title,
        description: metadata.description,
        imgUrl: metadata.imgUrl,
        content
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