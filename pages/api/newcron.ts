import { NextResponse } from 'next/server';
export default async function handler(req, res) {
console.time('makepost')
try{
//post request using fetch api to generate_post endpoint:
    const response = fetch('https://plankton-app-j7966.ondigitalocean.app/generate-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dmAuthKey: process.env.DM_AUTH_KEY,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        //Get JSON metadata and the post body.
        const metadata = data.metadata;
    })
    .catch((error) => {
        console.error('Error:', error);
    });


    console.timeEnd('makepost')
}catch(e){
    console.log(e)
    console.timeEnd('makepost')
}
res.status(200).end("Post created successfully.");


}