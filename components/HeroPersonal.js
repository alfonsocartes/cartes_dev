import Link from "next/link";
import SocialNetworks from "./SocialNetworks";

const HeroPersonal = () => (
  <div className="pb-10 border-b border-gray-200">
    <section className="body-font">
      <div className="container mx-auto flex py-8 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl m-8 font-medium text-indigo-700 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
            <Link href="/about">Alfonso Cartes</Link>
          </h1>
          <h2 className="title-font text-xl m-8 font-bold">
            Full-Stack Developer | Software Engineer
          </h2>
          <p className="leading-relaxed">
            I work at <a href="about">cartes.dev</a> bringing your ideas to
            life.
          </p>
          <p className="mb-8 leading-relaxed">
            I design and develop experiences that enrich people&apos;s lives
          </p>
        </div>
      </div>
    </section>
    <SocialNetworks />
  </div>
);

export default HeroPersonal;
