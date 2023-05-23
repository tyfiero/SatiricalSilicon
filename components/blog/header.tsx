import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl lg:text-4xl font-bold tracking-tight lg:tracking-tighter leading-tight mb-20 mt-8">
      <Link className="hover:underline" href="/">
        Blog
      </Link>
      .
    </h2>
  );
}
