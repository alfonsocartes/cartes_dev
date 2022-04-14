import Link from "next/link";
import { SocialNetworks } from "./SocialNetworks";

export const HeroPersonal = () => (
  <div className="border-b border-gray-200 pb-10">
    <section className="body-font">
      <div className="container mx-auto flex flex-col items-center justify-center py-8">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font m-8 text-3xl font-medium text-indigo-700 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 sm:text-4xl">
            <Link href="/about">{`<cartes/>`}</Link>
          </h1>
          <h2 className="title-font m-8 text-xl font-bold">
            Full-Stack Development | Software Engineering
          </h2>
          <p className="leading-relaxed">
            At
            <a href="about">
              <b> Cartes Ltd. </b>
            </a>
            we bring your ideas to life.
          </p>
          <p className="mb-8 leading-relaxed">
            We design and develop experiences that enrich people&apos;s lives.
          </p>
        </div>
      </div>
    </section>
    <SocialNetworks />
  </div>
);
