import { NextResponse } from 'next/server';
export default async function handler(req, res) {
// console.time('makepost')
try{
//post request using fetch api to generate_post endpoint:
    const response =  fetch('https://plankton-app-j7966.ondigitalocean.app/generate_post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dmAuthKey: process.env.DM_AUTH_KEY,
        }),
    })

}catch(e){
    console.log(e)
    console.timeEnd('makepost')
}
res.status(200).end("Post created successfully.");


}