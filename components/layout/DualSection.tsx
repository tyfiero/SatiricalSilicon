import React from "react";
function DualSection({
  children,
  invert = false,
  cn = "",
  centerText = false,
  colReverse = false,
}) {
  return (
    <section
      className={
        "flex justify-center sm:gap-5 lg:gap-10    sm:items-center lg:px-3 sm:px-0 " +
        (colReverse ? " sm:flex-col-reverse " : " sm:flex-col ") +
        (invert ? " lg:flex-row-reverse " : " lg:flex-row ") +
        (centerText ? " lg:items-center " : " lg:items-start ") +
        cn
      }
    >
      {children}
    </section>
  );
}

export default DualSection;
