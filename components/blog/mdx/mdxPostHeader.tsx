import Avatar from "../avatar";
import Date from "../date";
import PostTitle from "../post-title";
import MdxCoverImage from "./mdxCoverImage";

export default function MdxPostHeader({ title, coverImage, date, description }) {
  return (
    <div className=" lg:w-[76rem] sm:w-full mx-auto flex flex-col items-center ">
     <div className="flex flex-col mb-10">
        <PostTitle title={title} />
        <p className="mb-2 text-2xl">{description}</p>
        <p> {date && <Date dateString={date} />}</p>
        {/* <div className="mb-6 lg:block">
          <Avatar
            date={date}
            name={"AI"}
            picture={"/assets/other/ty-circle-image.webp"}
          />
        </div> */}
     </div>

      <div className="lg:w-[56rem] sm:w-full h-auto mx-auto sm:mb-8 lg:mb-16 sm:px-0 ">
        {/* <MdxCoverImage title={title} url={coverImage} />
         */}

        <picture>
          <img
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className={
              "object-cover sm:mx-0 shadow-lg duration-200 w-full h-auto rounded-xl"
            }
          />
        </picture>
      </div>
    </div>
  );
}
