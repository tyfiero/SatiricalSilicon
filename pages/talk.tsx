import React from "react";
import Link from "next/link";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import { FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";
import { m } from "framer-motion";

function Talk() {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [titleClicked, setTitleClicked] = React.useState(false);
  return (
    <>
      <Head>
        <title>Talk</title>
        <meta
          name="description"
          content={`My talk for AI tinkerers`}
        />
      </Head>
      <div className="flex flex-col items-center page-container !px-0">
        

        <div className="w-full h-[120vh] px-20 py-20 ring-2 bg-gradient-to-br from-white to-p-300 flex flex-col justify-between">
          <MotionHeader>
          {titleClicked ?   <m.h1
                    initial={{ letterSpacing: "-0.1em" }}
                    animate={{ letterSpacing: "0em" }}
                    className="pt-5 pr-4 font-bold leading-tight tracking-tighter text-transparent text-7xl bg-clip-text bg-gradient-to-br from-p-400 via-p-600 to-s-500 f1 drop-shadow-lg drop-shadow-p-800 h-fit fade-effect-quick"
                    onClick={() => {
                      if (!titleClicked) {
                        setTitleClicked(true);
                      }
                    }
                  }
                  >
                  I Made a GPT-4 App that Pumps Out Kinda Funny Satirical Fake News Articles, Automatically!
                  </m.h1>:
                  <m.h1
                    initial={{ letterSpacing: "-0.1em" }}
                    animate={{ letterSpacing: "0em" }}
                    className="pt-5 pr-4 font-bold leading-tight tracking-tighter text-transparent text-7xl bg-clip-text bg-gradient-to-br from-p-400 via-p-600 to-s-500 f1 drop-shadow-lg drop-shadow-p-800 h-fit"
                    onClick={() => {
                      if (!titleClicked) {
                        setTitleClicked(true);
                      }
                    }
                  }
                  >
                  Combating Fake News with AI 
                  </m.h1>}
                
                <div className="flex items-center gap-5 mt-4">
        <img src="/ty.webp" alt="tyfiero" className="w-12 h-12" />
        <h1 className="text-left heading-lg !text-4xl fade-effect-quick !mb-0 text-gray-800 ">
                  Ty Fiero
                </h1>
        </div>
                </MotionHeader>
              <button className="button-1 w-fit"
              onClick={() => {
                if (!buttonClicked) {
                  setButtonClicked(true);
                }
                fetch("/api/cron")
                  .then((res) => res.json())
                  .then((res) => console.log(res));
                }
              }
              >{buttonClicked ? "Generating..." : "Make a post!"}</button>

          
        </div>


        <div className="w-full h-[120vh] px-20 py-20 ring-2 bg-gradient-to-br from-white to-p-50">
        
        <h1 className="text-left heading-lg !text-5xl fade-effect-quick !mb-0 ">
          But Like, Why?
        </h1>
        <ol className="text-3xl leading-[4rem] f1 list-disc">
            <li><strong>I'm Lazy</strong> - Writing and publishing blog posts is tedious</li>
            <li> <strong>Learning</strong> - I needed an excuse to learn Langchain, and be one of those 'cool' AI devs</li>
            <li><strong>I love comedy</strong> - especially satirical news like "The Onion"</li>
            <p className="ml-4 text-2xl"> - Turns out GPT-4 is kinda funny 👀</p>
        </ol>

          
        </div>
        <div className="w-full h-[120vh] px-20 py-20 ring-2 bg-gradient-to-br from-white to-p-50">
        
        <h1 className="text-left heading-lg !text-5xl fade-effect-quick !mb-0 ">
          Tech
        </h1>
        <img src="/diagram.png" alt="" />

          
        </div>
        <div className="w-full h-[120vh] px-20 py-20 ring-2 bg-gradient-to-br from-white to-p-50">
        
        <h1 className="text-left heading-lg !text-5xl fade-effect-quick !mb-0 ">
          What's Next?
        </h1>
        <ol className="text-3xl leading-[4rem] f1 list-disc">
            <li>Newsletter</li>
            <li>Morning email of headlines</li>
            <li>Midjourney API</li>
            <li>Vercel Cron Jobs</li>
            <li>idk, maybe a topic thats generally more useful? 🤷</li>
        </ol>

          
        </div>
        <div className="w-full h-[120vh] px-20 py-20 ring-2 bg-gradient-to-br from-white to-p-300">
        <m.h1
                    initial={{ letterSpacing: "-0.1em" }}
                    animate={{ letterSpacing: "0em" }}
                    className="pt-5 pr-4 font-bold leading-tight tracking-tighter text-center text-transparent text-7xl bg-clip-text bg-gradient-to-br from-p-400 via-p-600 to-p-700 f1 drop-shadow-lg drop-shadow-p-800 h-fit"
                  >
                    Have ideas? Hit me up!
                  </m.h1>
        <div className="flex flex-col w-1/2 gap-10 mx-auto mt-20 h-fit">
       <div className="flex gap-2 mb-10">
        <img src="/ty.webp" alt="tyfiero" className="w-20 h-20" />
        <h1 className="text-left heading-lg !text-5xl fade-effect-quick !mb-0 ">
          Ty Fiero 
        </h1>
        </div>
       <div className="flex gap-2">
        <FaTwitter className="text-5xl text-p-400"/>
          <h1 className="text-left heading-lg !text-3xl fade-effect-quick !mb-0 ">
            @FieroTy
          </h1>
       </div>
       <div className="flex gap-2">
        <FaGithub className="text-5xl "/>
        <h1 className="text-left heading-lg !text-black !text-3xl fade-effect-quick !mb-0 ">
          tyfiero
        </h1>
        </div>
       <div className="flex gap-2">
        <FaGlobe className="text-5xl "/>
        <h1 className="text-left heading-lg  !text-3xl fade-effect-quick !mb-0 ">
          https://satiricalsilicon.com
        </h1>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Talk;
