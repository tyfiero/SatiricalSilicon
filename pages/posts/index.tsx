import HeroPost from "@/components/blog/hero-post";

import Head from "next/head";
// import CustomForm from "@/components/blog/NewsletterForm";
import MotionImage from "@/components/etc/animation/MotionImage";
import MotionText from "@/components/etc/animation/MotionText";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import { getAllPosts } from "utils/mdxUtils";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";
import PostPreview from "@/components/blog/post-preview";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Ty Fiero&apos;s blog posts on code, music, and life.</title>
        <meta
          name="description"
          content={"All blog posts written by Ty Fiero."}
        />
      </Head>

      <div className="page-container">
        <h1 className="text-left heading-lg fade-effect-quick">Blog</h1>

        {heroPost && (
          <div className=" sm:w-full lg:w-1/2">
            <PostPreview
              title={heroPost.frontmatter.title}
              coverImage={heroPost.frontmatter.imgUrl}
              date={heroPost.frontmatter.date}
              slug={heroPost.slug}
              excerpt={heroPost.frontmatter.description}
            />
          </div>
        )}
    

        <div className="my-10" />
        <MotionText yPx={-100} xPx={0} noSize>
          {/* <CustomForm /> */}
        </MotionText>
        <div className="my-10" />
        <MotionHeader yPx={-100} xPx={0} noSize>
          <h3 className="text-3xl f1 text-sky-800 dark:text-sky-300">
            More Posts
          </h3>
        </MotionHeader>
        {morePosts.length > 0 && <MdXHomePosts posts={morePosts} />}
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
