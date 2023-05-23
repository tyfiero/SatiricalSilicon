import Head from "next/head";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { m } from "framer-motion";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import ImageSection from "@/components/layout/ImageSection";

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
        <div className="lg:my-20 sm:my-6" />

        <DualSection cn="sm:px-0 !w-full h-fit">
          <TextSection>
            <MotionHeader>
              <h2 className={"font-bold heading-lg !mb-0 "}>This shit's funny</h2>
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
        </DualSection>
        {/* separator */}
        <div className=" lg:my-28 sm:my-8" />
        <DualSection cn="sm:px-0 !w-full h-fit">
          <TextSection>
            <MotionHeader>
              <h2 className={"font-bold heading-lg !mb-0 "}>This shit's funny</h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box sm:mx-0">
                <p>
                At Satirical Silicon, we offer a daily dose of tech sarcasm, programming parody, and AI antics. Expect deep-dive articles that miss the point entirely, along with industry 'news' that makes about as much sense as a disk drive in a microwave. But hey, you're in tech; you've seen weirder.

                We delve into the chaos of tech, rendering it into articles that manage to miss the point in the most delightfully entertaining ways. Tech news with us is as relevant as using a floppy disk to store the latest 4K blockbuster movie.

                So settle down, sip your artisanally brewed quantum espresso, and let us take you on an unforgettable journey through the looking glass of technology, where the bugs are features and the features are... well, let's call them "surprises".

Welcome to the farcical future. Welcome to Satirical Silicon.
                </p>
              </div>
            </MotionText>
          </TextSection>
          <ImageSection
            src="https://cdn.vox-cdn.com/thumbor/Jq70FPLxsqaF0Mk57HPxdWpOtaM=/0x20:650x453/1200x800/filters:focal(0x20:650x453)/cdn.vox-cdn.com/assets/2234983/onion1.jpg"
            alt="Satirical Silicon"
          />
        </DualSection>
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
