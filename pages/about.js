/* eslint-disable jsx-a11y/accessible-emoji */
import Image from "next/image";

import ContactUs from "../components/cta/ContactUs";
import Layout from "../components/Layout";
import SocialNetworks from "../components/SocialNetworks";

const About = () => (
  <Layout title="About | Cartes Development | Full-Stack Web Development | Mobile Development">
    <section className="body-font">
      <div className="container mx-auto flex py-8 items-center justify-center flex-col">
        <div className="w-28 h-28 relative mb-4">
          <div className="w-full h-full rounded-full visible object-cover object-center overflow-hidden shadow-lg">
            <Image
              src="/static/images/alfonso-cartes.jpeg"
              height={700}
              width={700}
              alt="Alfonso Cartes"
              priority
            />
          </div>
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-center">
            Alfonso Cartes
          </h1>
          <h2 className="sm:text-xl text-md m-4">
            Full-Stack Developer | Software Engineer
          </h2>
          <span className="text-3xl wave">👋</span>
        </div>
      </div>
      <SocialNetworks />
    </section>
    <section className="body-font">
      <div className="flex flex-wrap mx-auto items-start">
        <div className="mx-auto md:w-1/2 px-14 md:py-8 md:mb-0 mb-10 pb-10 md:border-r md:border-b-0 border-b border-gray-200 flex flex-col items-center justify-center">
          <h3 className="sm:text-3xl text-2xl font-bold title-font mb-10">
            Expertise
          </h3>
          <div className="leading-relaxed text-base">
            <p>
              Software Engineer with a passion for Web and Mobile development.
            </p>
            <br />
            <p>
              I have experience working in large and small companies building
              software solutions including Websites and E-commerce stores
              focused on conversion and SEO.
            </p>
            <br />
            <p>
              I also have solid expertise in business development, customer
              service, tech support, and retail.
            </p>
          </div>
        </div>
        <div className="mx-auto md:w-1/2 px-14 md:pl-12  md:py-8 mb-10 md:mb-0 pb-10 flex flex-col items-center justify-center">
          <h3 className="sm:text-3xl text-2xl font-bold title-font mb-10">
            Technologies
          </h3>
          <div className="leading-relaxed text-base">
            <ul>
              <li>React Native / Expo </li>
              <li>NextJS (SSR – SSG - ISR)</li>
              <li>React</li>
              <li>HTML / CSS / Javascript</li>
              <li>ExpressJS / NodeJS</li>
              <li>MongoDB / Mongoose / SQL</li>
              <li>Headless CMS</li>
              <li>RESTful APIs / GraphQL APIs</li>
              <li>TailWind CSS / Bootstrap</li>
              <li>Serverless Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ContactUs />
  </Layout>
);

export default About;
