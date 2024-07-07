import Image from "next/image";
import { ContactUs } from "../components/cta/ContactUs";
import { Layout } from "../components/Layout";
import { SocialNetworks } from "../components/SocialNetworks";

import ProfilePicture from "../public/images/alfonso-cartes.jpeg";

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
              height: "auto"
            }} />
        </figure>
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font text-center text-2xl font-bold sm:text-3xl">
            Alfonso Cartes
          </h1>
          <h2 className="text-md m-4 sm:text-xl">
            Full-Stack Developer | Software Engineer
          </h2>
          <span className="wave text-3xl">👋</span>
        </div>
      </div>
      <SocialNetworks />
    </section>
    <section className="body-font">
      <div className="mx-auto flex flex-wrap items-start">
        <div className="mx-auto mb-10 flex flex-col items-center justify-center border-b border-gray-200 px-14 pb-10 md:mb-0 md:w-1/2 md:border-r md:border-b-0 md:py-8">
          <h3 className="title-font mb-10 text-2xl font-bold sm:text-3xl">
            Expertise
          </h3>
          <div className="text-base leading-relaxed">
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
              Full-stack development using React, Node.js, Express, PostgreSQL.
            </p>
            <br />
            <p>
              Focus on <b>frontend</b> taking user experience as the main metric
              for success. Frameworks used for web and mobile development
              include: Remix.run, Next.js, TailwindCSS and many more.
            </p>
            <br />
            <p>
              Experience in web performacnce for improvements in Core Web
              Vitals, SEO and accessibility.
            </p>
            <br />
            <p>
              I also have solid expertise in business development, customer
              service, tech support, and retail.
            </p>
          </div>
        </div>
        <div className="mx-auto mb-10 flex flex-col  items-center justify-center px-14 pb-10 md:mb-0 md:w-1/2 md:py-8 md:pl-12">
          <h3 className="title-font mb-10 text-2xl font-bold sm:text-3xl">
            Technology Stack
          </h3>
          <div className="text-base leading-relaxed">
            <ul className="list-inside list-disc space-y-1">
              <li>React.js</li>
              <li>Remix.run</li>
              <li>Next.js (SSR - SSG - ISR)</li>
              <li>React Native / Expo </li>
              <li>HTML / CSS / Javascript</li>
              <li>Tailwind CSS / Bootstrap / Styled Components</li>
              <li>RESTful APIs / GraphQL APIs</li>
              <li>Serverless / AWS / Docker</li>
              <li>Express.js / Node.js</li>
              <li>PostgreSQL / MongoDB</li>
              <li>Headless CMS</li>
              <li>SEO / ASO / Core Web Vitals</li>
              <li>Serverless Deployment</li>
              <li>Many more...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ContactUs />
  </Layout>
);

export default About;
