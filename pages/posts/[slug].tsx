import React, { useRef } from "react";
import { useRouter } from "next/router";
import PostTitle from "@/components/blog/post-title";
import Head from "next/head";
import dynamic from "next/dynamic";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "utils/mdxUtils";
import MdxPostHeader from "@/components/blog/mdx/mdxPostHeader";
import Comments from "@/components/blog/Comments";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";

const ReadingBar = dynamic(() => import("@/components/blog/ReadingBar"), {
  ssr: false,
});
export default function Post({ code, frontmatter, morePosts }) {
  const router = useRouter();
  const ref = useRef(null);
  //get iso date
  // console.log(new Date().toISOString());

  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="page-container">
      <ReadingBar target={ref} />
      {router.isFallback ? (
        <PostTitle title="Loading…"></PostTitle>
      ) : (
        <>
          <article className="w-full mt-16 " ref={ref}>
            <Head>
              <title>{frontmatter.title}</title>
              <meta property="og:image" content={frontmatter.imgUrl} />
              <meta name="description" content={frontmatter.description} />
            </Head>
            <div className="px-2 mx-auto md:px-10 sm:w-full lg:w-full">
              <MdxPostHeader
                title={frontmatter.title}
                description={frontmatter.description}
                coverImage={frontmatter.imgUrl}
                date={frontmatter.date}
              />
              <div className="sm:w-full lg:w-[56rem] mx-auto  glass-box shadow-lg shadow-sky-700/40 dark:shadow-sky-300/20 !border-0 sm:!px-5 lg:!px-10 py-5 bg-white/90 dark:bg-slate-900/80 mb-28 	">
                <MdxComponent
                  components={{
                    p: (props) => (
                      <p {...props} className="my-6 text-lg leading-relaxed" />
                    ),
                    ul: (props) => (
                      <ul
                        {...props}
                        className="!my-1 ml-10 text-lg leading-relaxed list-disc"
                      />
                    ),
                    li: (props) => (
                      <li
                        {...props}
                        className="!my-1 text-lg leading-relaxed list-disc f2"
                      />
                    ),
                    a: (props) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="no-referrer"
                        className="anc"
                      />
                    ),
                    strong: (props) => (
                      <strong {...props} className=" !font-bold" />
                    ),
                    h2: (props) => (
                      <h2
                        {...props}
                        className="mt-20 mb-4 leading-snug sm:text-2xl lg:text-3xl f1 text-sky-600 dark:text-sky-300"
                      />
                    ),
                    h3: (props) => (
                      <h3
                        {...props}
                        className="sm:text-xl lg:!text-4xl mt-24 mb-4 leading-snug f1  text-sky-500 dark:text-sky-200"
                      />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        {...props}
                        className="bg-sky-100  !text-black rounded-md shadow-lg shadow-sky-700/30  ml-5 p-5 border-l-4 text-xl border-sky-400 italic font-extrabold"
                      />
                    ),
                  }}
                />
                {/* <Comments
                  title={frontmatter.title}
                  id={frontmatter.date}
                  slug={frontmatter.slug}
                /> */}
              </div>
            </div>
          </article>
          <MotionHeader yPx={-50} xPx={0}>
            <h2 className="mb-8 heading-lg ">More Posts</h2>
          </MotionHeader>
          {morePosts.length > 0 && <MdXHomePosts posts={morePosts} />}
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  const allPosts = getAllPosts().filter((p) => {
    return p.frontmatter.published === true;
  });
  const morePosts = allPosts.filter((p) => p.slug !== params.slug);

  return {
    props: { ...post, morePosts },
  };
}

export async function getStaticPaths() {
  //filter out unpublished posts
  let allPosts;
  if (process.env.NODE_ENV === "development") {
    allPosts = getAllPosts();
  } else {
    allPosts = getAllPosts().filter((p) => {
      return p.frontmatter.published === true;
    });
  }
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
