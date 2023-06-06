import Balancer from "react-wrap-balancer";

export default function PostTitle({
  title,
  blurb,
}: {
  title?: string;
  blurb?: string;
}) {
  return (
    <header className="mx-auto ">
      <h1
        className="w-full text-4xl mb-3 font-bold  leading-tight
  tracking-tighter  lg:text-[3rem] text-left f1 text-sky-800 dark:text-sky-300"
      >
        <Balancer ratio={0.55}>{title}</Balancer>
        {/* {title} */}
      </h1>
    </header>
  );
}
