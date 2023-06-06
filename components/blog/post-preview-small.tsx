import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MotionImage from "../etc/animation/MotionImage";
import MdxCoverImage from "./mdx/mdxCoverImage";

export default function PostPreviewSmall({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionImage classes="flex justify-center w-full">
      <div className="glass-box bg-white/80 dark:bg-slate-900/80 w-full lg:w-[90%]   h-[9.4rem]  group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer relative">
        <Link href={`/posts/${slug}`}>
          <div className="flex gap-2">
              <div className="overflow-hidden rounded-md w-36 h-36 sm:mb-2 lg:mb-5  min-w-[9rem]">
                <img src={coverImage} alt={title} className="object-cover w-auto h-36" />
              </div>
            <div className="flex flex-col justify-between p-2 pb-4">
             <div>
                <h3 className="text-base leading-snug md:text-xl ">
                  <p className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                    {title}
                  </p>
                </h3>
  
                <p className="mt-1 text-xs leading-relaxed md:mt-2 md:text-sm">{excerpt}</p>
             </div>
              <div className="hidden text-base italic lg:mb-2 text-slate-500 f2 dark:text-slate-300 md:block">
                <Date dateString={date} small />
              </div>

            </div>
          </div>
        </Link>
      </div>
    </MotionImage>
  );
}
