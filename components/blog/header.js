import Link from "next/link";

export default function Header({ title, href }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline" href={href}>
          {title}
        </a>
      </Link>
    </h2>
  );
}
