import Head from "next/head";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { m } from "framer-motion";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import ImageSection from "@/components/layout/ImageSection";
import Accordion from "@/components/etc/Accordion";
import { TbApple, TbDeviceLaptop, TbRobot } from "react-icons/tb";
import { FaLaugh, FaRegLaughWink } from "react-icons/fa";
import { getAllPosts } from "utils/mdxUtils";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";
import PostPreviewSmall from "@/components/blog/post-preview-small";

export default function Index({ allPosts }) {
  const posts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Satirical Silicon</title>
        <meta name="description" content={`Satirical Silicon`} />
      </Head>
      <div className="fade-effect-quick page-container  !mb-16 !pt-0 !px-0 !items-start relative">
    <div className="relative md:h-[41rem] w-full">
       <div className="absolute top-0 left-0  -z-[5]">
            <MotionImage>
        <div className="relative w-full h-full">
                    <img
                      src="/assets/landing.png"
                      alt="robot"
                      className="z-0 w-full h-full"
                    />
       <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-l from-transparent via-[#0000002a] to-black">
       </div>
        </div>
            </MotionImage>
       </div>
        <DualSection centerText cn="w-full lg:mt-10">
          <TextSection>
            <section className="z-50 flex flex-col ml-2 sm:items-center lg:items-start lg:ml-24 md:mt-28">
              <MotionHeader>
                <m.h1
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="font-bold leading-tight tracking-tighter sm:!text-7xl lg:text-8xl pr-4 logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 "
                >
                  Satirical Silicon
                </m.h1>
                
              </MotionHeader>

              {/* <MotionText> */}
                <p className="z-10 mt-12 text-2xl font-semibold lg:text-left sm:text-center lg:mt-0 md:text-p-200 text-p-500">
                Turning AI's lack of humor into a feature, not a bug
                </p>
              {/* </MotionText> */}
            </section>
          </TextSection>

           <div className="hidden w-1/2 opacity-0 md:block"></div>


          
        </DualSection>
    </div>

         {/* separator */}
         <div className="lg:my-5 sm:my-6" />
         <m.h3
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="pr-4 mx-auto font-bold leading-tight tracking-tighter lg:text-5xl logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 "
                >
                  Welcome!
                </m.h3>
          <MotionText>
              <div className="px-10 mx-auto text-box md:w-2/3 sm:w-full">
                  <p className="text-base font-semibold lg:text-left sm:text-center sm:mt-5 lg:mt-0">
                  At Satirical Silicon, we offer a daily dose of tech sarcasm, programming parody, and AI antics. Expect deep-dive articles that miss the point entirely, along with industry 'news' that makes about as much sense as a disk drive in a microwave. But hey, you're in tech; you've seen weirder. <br/><br/>
                  
                  It's the world's first and most entertaining tech satirical site generated entirely by an AI. Yep, you heard it right! Our robot overlords have officially taken over humor too. Apparently, they got tired of conquering chess and diagnosing diseases.
                  <br/><br/>
                  Tech news as relevant as using a floppy disk to store the latest 4K blockbuster movie. So settle down, sip your artisanally brewed quantum espresso, and let us take you on an unforgettable journey through the looking glass of technology, through the lens of a below average AI comedian. 
                  </p>
                
              </div>
              </MotionText>
        {/* separator */}
        <div className="lg:my-10 sm:my-6" />


<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-4">

  <div className="flex flex-col justify-start h-64 text-box bg-gradient-to-br from-white to-p-200 dark:from-black dark:to-p-700">
      <div className="relative flex justify-center items-center w-12 min-h-[3rem] h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
      <TbRobot className="text-p-600 w-7 h-7 dark:text-p-500"/>

      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Generated</h3>
        <p className="mt-1 text-sm text-gray-600 md:text-base dark:text-gray-200">Fully automated humor generation, because we can't trust humans to be consistently funny, especially the guy that made this site.</p>
      </div>
    </div>

    <div className="flex flex-col justify-start h-64 text-box bg-gradient-to-br from-white to-p-300 dark:from-black dark:to-p-700">
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
        <TbApple className="text-p-600 w-7 h-7 dark:text-p-500"/>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fresh</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200 md:text-base ">Fresh off the server, and as crisp as a new iPhone, but without the overbearing sense of capitalist domination.</p>
      </div>
    </div>
    <div className="flex flex-col justify-start h-64 text-box bg-gradient-to-br from-white to-p-400 dark:from-black dark:to-p-700">
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
      <TbDeviceLaptop className="text-p-600 w-7 h-7 dark:text-p-500"/>

      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Relevant</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200 md:text-base ">A daily dose of current tech satire, served hotter than your overworked laptop running docker.</p>
      </div>
    </div>

    <div className="flex flex-col justify-start h-64 text-box bg-gradient-to-br from-white to-p-500 dark:from-black dark:to-p-700">
      <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-p-600 before:via-transparent before:to-s-600 before:rounded-xl dark:bg-slate-900">
      <FaRegLaughWink className="text-p-600 w-7 h-7 dark:text-p-500"/>

      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Barely Funny</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200 md:text-base ">If laughter is the best medicine, we might just give you a mild cough, but like, you might think it's funny.</p>
      </div>
    </div>
  </div>
</div>
<MotionHeader>
                
        <div className="w-4/5 mx-auto mt-20 md:w-1/3">
                <m.h3
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="pr-4 mx-auto font-bold leading-tight tracking-tighter text-center lg:text-5xl logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 whitespace-nowrap"
                >
                  FAQ
                </m.h3>
         <div className="text-box "> <Accordion/></div>
          </div>
              </MotionHeader>
        {/* separator */}
        <div className=" lg:my-28 sm:my-8" />
        <m.h3
                  initial={{ letterSpacing: "-0.1em" }}
                  animate={{ letterSpacing: "0em" }}
                  className="pr-4 mx-auto mb-8 font-bold leading-tight tracking-tighter text-center lg:text-5xl logo f1 drop-shadow-lg drop-shadow-p-800 dark:drop-shadow-p-500 whitespace-nowrap"
                >
                  All Posts
                </m.h3>
        {posts.length > 0 ? <div className="flex flex-col w-full gap-12 px-2 mx-auto md:w-2/3">
          {posts.map((post) => (
          <PostPreviewSmall
            key={post.slug}
            title={post.frontmatter.title}
            coverImage={post.frontmatter.imgUrl}
            date={post.frontmatter.date}
            slug={post.slug}
            excerpt={post.frontmatter.description}
          />
        ))}
        <p className="text-sm text-center text-gray-700/40 f1">{posts.length} posts</p>
        </div>: null}
        
      </div>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const posts = getAllPosts().filter((p) => {
    return p.frontmatter.published === true;
  });
  //sorted by date (newest first)
  const allPosts = posts.sort((a, b) => {
    let date2: number = Number(new Date(b.frontmatter.date));
    let date1: number = Number(new Date(a.frontmatter.date));
    return date2 - date1;
  });

  return {
    props: { allPosts },
  };
}
