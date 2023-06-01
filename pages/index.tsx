import Head from "next/head";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { m } from "framer-motion";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import ImageSection from "@/components/layout/ImageSection";
import Accordion from "@/components/etc/Accordion";

export default function Index({ allPosts }) {
  //TODO: remove all QCBot instances and add actual name, and branding like icons and logos
  return (
    <>
      <Head>
        <title>Satirical Silicon</title>
        <meta name="description" content={`Satirical Silicon`} />
      </Head>
      <div className="fade-effect-quick page-container !items-start">
        <DualSection centerText cn="w-full lg:mt-10">
          <TextSection>
            <section className="flex flex-col sm:items-center lg:items-start lg:ml-24 sm:ml-0 ">
              <MotionHeader>
                <m.h1
                  whileHover={{
                    scale: 1.05,
                    originX: 1,
                    letterSpacing: "-0.05em",
                  }}
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="font-bold leading-tight tracking-tighter sm:!text-7xl lg:text-8xl pr-4 logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 whitespace-nowrap"
                >
                  Satirical Silicon
                </m.h1>
                
              </MotionHeader>

              <MotionText>
                <p className="text-2xl font-semibold lg:text-left sm:text-center sm:mt-5 lg:mt-0">
                The Place Where AI Misunderstands Humor So You Don't Have To!
                </p>
              </MotionText>
            </section>
          </TextSection>




          
        </DualSection>

         {/* separator */}
         <div className="lg:my-10 sm:my-6" />
          <MotionText>
              <div className="px-10 mx-auto text-box md:w-2/3 sm:w-full">
                  <p className="text-base font-semibold lg:text-left sm:text-center sm:mt-5 lg:mt-0">
                  At Satirical Silicon, we offer a daily dose of tech sarcasm, programming parody, and AI antics. Expect deep-dive articles that miss the point entirely, along with industry 'news' that makes about as much sense as a disk drive in a microwave. But hey, you're in tech; you've seen weirder. <br/><br/>
                  
                  It's the world's first and most entertaining tech satirical site generated entirely by an AI. Yep, you heard it right! Our robot overlords have officially taken over humor too. Apparently, they got tired of conquering chess and diagnosing diseases.
                  <br/><br/>
                  Tech news as relevant as using a floppy disk to store the latest 4K blockbuster movie. So settle down, sip your artisanally brewed quantum espresso, and let us take you on an unforgettable journey through the looking glass of technology, through the lens of a below average AI comedian. 
                  </p>
                  <p className="mt-8 text-xl text-center">Welcome to the farcical future.</p>
                  <p className="mt-4 text-3xl text-center text-p-500 dark:text-p-600">Welcome to Satirical Silicon.</p>
              </div>
              </MotionText>
        {/* separator */}
        <div className="lg:my-20 sm:my-6" />


<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-4">

    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
        <svg className="text-p-600 w-7 h-7 dark:text-p-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Generated</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Fully automated humor generation, because we can't trust humans to be consistently funny, especially the guy that made this site.</p>
      </div>
    </div>

    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
        <svg className="text-p-600 w-7 h-7 dark:text-p-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fresh</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Hot off the press, and as crisp as a new iPhone, but without the overbearing sense of capitalist domination.</p>
      </div>
    </div>
    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
        <svg className="text-p-600 w-7 h-7 dark:text-p-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Relevant</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">A daily dose of current tech satire, served hotter than your overworked laptop running docker.</p>
      </div>
    </div>

    <div>
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
        <svg className="text-p-600 w-7 h-7 dark:text-p-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Barely Funny</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Our humor level hovers somewhere between 'why did the chicken cross the road' and '404 joke not found'. If laughter is the best medicine, we might just give you a mild cough.</p>
      </div>
    </div>
  </div>
</div>
<MotionHeader>
                <m.h3
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="font-bold leading-tight tracking-tighter sm:!text-xl lg:text-3xl pr-4 logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 whitespace-nowrap"
                >
                  FAQ
                </m.h3>
                
              </MotionHeader>
        <Accordion/>
        {/* <DualSection cn="sm:px-0 !w-full h-fit">
          <TextSection>
            <MotionHeader>
              <h2 className={"font-bold heading-lg !mb-0 "}>Like your humor as dry as your code? You're in the right place</h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box sm:mx-0">
                <p>
                We'd like to formally (and with a smirk) welcome you to Satirical Silicon, the world's first and most entertaining tech satirical site generated entirely by an AI. Yep, you heard it right! Our robot overlords have officially taken over humor too. Apparently, they got tired of conquering chess and diagnosing diseases.

They're here to give you a fresh and utterly absurd perspective on tech, programming, and AI. They're finding bugs not just in your code, but in your sanity. Because why not? Life is too short to take technology too seriously.
                </p>
              </div>
            </MotionText>
          </TextSection>
          <ImageSection
            src="https://cdn.vox-cdn.com/thumbor/Jq70FPLxsqaF0Mk57HPxdWpOtaM=/0x20:650x453/1200x800/filters:focal(0x20:650x453)/cdn.vox-cdn.com/assets/2234983/onion1.jpg"
            alt="Satirical Silicon"
          />
        </DualSection> */}
        {/* separator */}
        <div className=" lg:my-28 sm:my-8" />
      
      </div>
    </>
  );
}

// export async function getStaticProps({ preview }) {

//   return {
//     props: {  },
//   };
// }
