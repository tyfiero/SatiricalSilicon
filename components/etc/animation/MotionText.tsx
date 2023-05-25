import React from "react";
import { m, useReducedMotion } from "framer-motion";

function MotionText({
  children,
  invert = false,
  noSize = false,
  delay = 0.2,
  xPx = 300,
  yPx = 0,
}) {
  const prefersReducedMotion = useReducedMotion();
  let distance = invert ? xPx : xPx * -1;
  let yDistance = invert ? yPx : yPx * -1;
  let xValue = 0;
  let yValue =  0;
  //
  // let xValue = prefersReducedMotion ? 0 : distance;
  // let yValue = prefersReducedMotion ? 0 : yDistance;

  let sizeClasses = noSize ? "" : "w-full h-full";
  return (
    <m.div
      className={sizeClasses}
      initial={{
        x: xValue,
        y: yValue,
        opacity: 0,
        scale: prefersReducedMotion ? 1 : 0.8,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 1.5,
          delay: delay,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </m.div>
  );
}

export default MotionText;
