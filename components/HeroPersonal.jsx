import Link from "next/link";
import { SocialNetworks } from "./SocialNetworks";

export const HeroPersonal = () => (
  <div className="border-b border-gray-200 pb-10">
    <section className="body-font">
      <div className="container mx-auto flex flex-col items-center justify-center py-8">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font m-8 text-3xl font-medium text-indigo-700 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 sm:text-4xl">
            <Link href="/about">Alfonso Cartes</Link>
          </h1>
          <h2 className="title-font m-8 text-xl font-bold">
            Principal Software Engineer | Senior Full-Stack Software Engineer
          </h2>
          <span className="wave text-3xl">👋</span>
          <p className="leading-relaxed">
            Let&apos;s bring your ideas to life.
          </p>
          <p className="mb-8 leading-relaxed">
            Let&apos;s design and develop experiences that enrich people&apos;s
            lives.
          </p>
        </div>
      </div>
    </section>
    <SocialNetworks />
  </div>
);
