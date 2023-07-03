import { postToTwitter } from "@/lib/twitter";

export default async function handler(req, res) {
try{

    const tweet = "Hello world";
    postToTwitter(tweet);
   
}catch(e){
    console.log(e)
}
res.status(200).end("Tweeted successfully.");


}