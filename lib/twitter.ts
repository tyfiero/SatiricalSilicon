import axios from "axios";
// import { Client } from "twitter-api-sdk";
// const twitter = require('twitter-lite');
// import Twitter from 'twitter-lite';
// import got from 'got';
// import crypto from 'crypto';
// import OAuth from 'oauth-1.0a';
// import qs from 'querystring';


export const postToTwitter = async (tweet) => {

    console.log('I hate the twitter api')

    

    // const consumer_key = process.env.TWITTER_API_KEY;
    // const consumer_secret = process.env.TWITTER_API_KEY_SECRET;

    // const data = {
    //   "text": "DOES IT FUCKING WORK!!!?!",
    //   "media": {

    //   }
    // };
    
    // const endpointURL = `https://api.twitter.com/2/tweets`;
    
    
    // const oauth = OAuth({
    //     consumer: {
    //       key: consumer_key,
    //       secret: consumer_secret
    //     },
    //     signature_method: 'HMAC-SHA1',
    //     hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
    //   });
      
    // async function getRequest({
    //     oauth_token,
    //     oauth_token_secret
    //   }) {
      
    //     const token = {
    //       key: oauth_token,
    //       secret: oauth_token_secret
    //     };
      
    //     const authHeader = oauth.toHeader(oauth.authorize({
    //       url: endpointURL,
    //       method: 'POST'
    //     }, token));
      
    //     const req = await got.post(endpointURL, {
    //       json: data,
    //       responseType: 'json',
    //       headers: {
    //         Authorization: authHeader["Authorization"],
    //         'user-agent': "v2CreateTweetJS",
    //         'content-type': "application/json",
    //         'accept': "application/json"
    //       }
    //     });
    //     if (req.body) {
    //       return req.body;
    //     } else {
    //       throw new Error('Unsuccessful request');
    //     }
    //   }


    //   await getRequest({
    //     oauth_token: '1675568114287923200-TAu5DFL3Ds7ag9JqHzr1WyJLyebGXV',
    //     oauth_token_secret: 'I8p1AmWyuB4oVvH4P1ZDdcYJtkMXs7Y8RDzOqzuPTlDZv',
    //   }).then((res) => {
    //     console.log(res);
    //     }).catch((err) => {
    //     console.log(err);
    //     });



}