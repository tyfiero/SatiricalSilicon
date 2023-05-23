import React from "react";
import MotionImage from "../etc/animation/MotionImage";

function ImageSection({ src, alt }) {
  return (
    <MotionImage classes="lg:w-1/2 lg:h-auto sm:w-4/5 sm:h-auto relative shadow-xl rounded-xl shadow-p-600/30 lg:mt-11 ring-offset-8 hover:ring-8 dark:ring-offset-p-600 dark:ring-p-700  ring-offset-p-400 ring-p-300 transition duration-500">
      <picture>
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-auto rounded-xl "
        />
      </picture>
    </MotionImage>
  );
}

export default ImageSection;
