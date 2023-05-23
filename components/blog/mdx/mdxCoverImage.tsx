import Link from "next/link";

export default function MdxCoverImage({ title, url, slug, thumb = false }) {
  return (
    <div
      className="relative w-full rounded-lg  sm:mx-0 h-[200px] overflow-hidden
    "
    >
      <picture>
        <img
          src={url}
          alt={`Cover Image for ${title}`}
          loading={thumb ? "lazy" : "eager"}
          className={
            "object-cover sm:mx-0 group-hover:shadow-md duration-200 absolute shadow-sm w-full h-auto"
          }
        />
      </picture>
      {/* {slug ? (
        <Link legacyBehavior href={`/posts/${slug}`}>
          <a>{image}</a>
        </Link>
      ) : (
        image
      )} */}
    </div>
  );
}
