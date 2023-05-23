import PostPreview from "../post-preview";

export default function MdXHomePosts({ posts }) {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 mb-32 justify-items-center lg:grid-cols-3 lg:gap-x-5 gap-y-10 lg:gap-y-16 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.frontmatter.title}
            coverImage={post.frontmatter.imgUrl}
            date={post.frontmatter.date}
            slug={post.slug}
            excerpt={post.frontmatter.description}
          />
        ))}
      </div>
    </section>
  );
}
