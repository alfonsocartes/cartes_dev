import Image from "next/image";
import Link from "next/link";
import SocialNetworks from "./SocialNetworks";

const HeroPersonal = () => (
  <div className="pb-10 border-b border-gray-200">
    <section className="body-font">
      <div className="container mx-auto flex py-8 items-center justify-center flex-col">
        <div className="w-28 h-28 relative mb-4">
          <div className="group w-full h-full rounded-full overflow-hidden shadow-lg text-center bg-purple table cursor-pointer">
            <Image
              src="https://avatars1.githubusercontent.com/u/3504951?s=460&u=6fd136fb3de88e86ae2cd8741b0e48d524fcb9d1&v=4"
              height={460}
              width={460}
              alt="Alfonso Cartes"
              className="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl m-8 font-medium text-indigo-700 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
            <Link href="about">Alfonso Cartes</Link>
          </h1>
          <h2 className="title-font sm:text-2xl text-lg m-8 font-medium">
            Full-Stack Developer | Software Engineer
          </h2>
          <p className="mb-8 leading-relaxed">
            I work at <a href="about">cartes.dev</a> bringing your ideas to
            life.
          </p>
        </div>
      </div>
    </section>
    <SocialNetworks />
  </div>
);

export default HeroPersonal;
