import Image from "next/image";

import EmailNewsletter from "../components/cta/EmailNewsletter";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <>
      <Layout title="Cartes Development | Full-Stack Web Development / Mobile Development">
        <section className="body-font">
          <div className="container mx-auto flex py-10 items-center justify-center flex-col">
            <div className="w-28 h-28 relative mb-4">
              <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
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
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                Alfonso Cartes
              </h1>
              <h2 className="title-font sm:text-xl text-xl mb-8 font-medium">
                Full-Stack Web Developer | Software Engineer
              </h2>
              <p className="mb-8 leading-relaxed">
                I work at <a href="about">cartes.dev</a> bringing customer ideas
                to life every day.
              </p>
            </div>
          </div>
        </section>
        <EmailNewsletter />
      </Layout>
    </>
  );
}
