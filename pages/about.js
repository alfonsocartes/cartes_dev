import React from "react";
import ContactUs from "../components/cta/ContactUs";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About | Cartes Development | Full-Stack Web Development / Mobile Development">
    <section className="body-font">
      <div className="container flex flex-wrap mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-6">
            Expertise
          </h2>
          <div className="leading-relaxed text-base">
            <p>
              Consultancy about the technologies to impliment acording to your
              business model and needs.
            </p>
            <br />
            <p>
              Full- Stack Web Development, Mobile Development and complete
              project management.
            </p>
            <br />
            <p>
              Analyze your project requirements, with quality assurance and
              scalability in mind.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 md:py-8 mb-10 md:mb-0 pb-10">
          <h2 className="sm:text-3xl text-2xl font-bold title-font mb-6">
            Technologies
          </h2>
          <div className="leading-relaxed text-base">
            <ul>
              <li>ReactJS</li>
              <li>React Native / Expo </li>
              <li>NextJS (SSR – SSG - ISR)</li>
              <li>Headless CMS</li>
              <li>ExpressJS / NodeJS</li>
              <li>MongoDB / Mongoose / SQL</li>
              <li>RESTful APIs / GraphQL APIs</li>
              <li>HTML / CSS / Javascript</li>
              <li>TailWind CSS / Bootstrap</li>
              <li>Serverless Deployment</li>
              <li>Linux Server Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <ContactUs />
  </Layout>
);

export default About;
