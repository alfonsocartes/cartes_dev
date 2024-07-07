import Image from "next/image";
import { ContactUs } from "../components/cta/ContactUs";
import { Layout } from "../components/Layout";
import { SocialNetworks } from "../components/SocialNetworks";

import ProfilePicture from "../public/images/alfonso-cartes.png";

const About = () => (
  <Layout title="About | Cartes Development | Full-Stack Web Development | Mobile Development">
    <section className="body-font">
      <div className="container mx-auto flex flex-col items-center justify-center py-8">
        <figure className="visible mb-4 h-28 w-28 overflow-hidden rounded-full object-cover object-center shadow-lg">
          <Image
            src={ProfilePicture}
            alt="Alfonso Cartes profile picture"
            priority
            placeholder="blur"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </figure>
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font text-center text-2xl font-bold sm:text-3xl">
            Alfonso Cartes
          </h1>
          <h2 className="text-md m-4 sm:text-xl">
            Principal Software Engineer | Senior Full-Stack Software Engineer
          </h2>
          <span className="wave text-3xl">👋</span>
        </div>
      </div>
      <SocialNetworks />
    </section>
    <section className="body-font">
      <div className="mx-auto flex flex-wrap items-start">
        <div className="mx-auto mb-10 flex flex-col items-center justify-center border-b border-gray-200 px-14 pb-10 md:mb-0 md:w-1/2 md:border-b-0 md:border-r md:py-8">
          <h3 className="title-font mb-10 text-2xl font-bold sm:text-3xl">
            Expertise
          </h3>
          <p>
            Software Engineer with a passion for Web and Mobile development.
          </p>
          <br />
          <p>
            Experience working in large and small companies building software
            solutions including Web apps, Mobile apps and e-commerce stores.
          </p>
          <br />
          <p>
            Full-stack development mainly using Javascript/Typescript ecosystem.
            Expertise in React.
          </p>
          <br />
          <p>
            Focus on <b>frontend</b> taking user experience as the main metric
            for success. Frameworks used for web and mobile development include:
            Expo, Remix.run, Next.js, TailwindCSS and many more.
          </p>
          <br />
          <p>
            Experience in web performacnce for improvements in Core Web Vitals,
            SEO and accessibility.
          </p>
          <br />
          <p>
            I also have solid expertise in business development, customer
            service, tech support, and retail.
          </p>
        </div>
        <div className="mx-auto mb-10 flex flex-col  items-center justify-center px-14 pb-10 md:mb-0 md:w-1/2 md:py-8 md:pl-12">
          <h3 className="title-font mb-10 text-2xl font-bold sm:text-3xl">
            Technology Stack
          </h3>
          <div className="text-base leading-relaxed">
            <ul role="list" className="space-y-3">
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                Expo | React Native
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                Next.js | Remix
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                React Server Components
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                TailwindCSS | Nativewind
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                HTML | CSS | Javascript | Typescript
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                RESTful APIs | GraphQL APIs | tRPC
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                Express.js | Node.js | Hono.js
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                SQL | No SQL
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                Serverless | AWS | Docker
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                SEO | ASO | Core Web Vitals
              </li>
              <li className="overflow-hidden bg-slate-50 dark:bg-slate-900 px-4 py-2 shadow sm:rounded-md sm:px-6">
                Many more...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ContactUs />
  </Layout>
);

export default About;
