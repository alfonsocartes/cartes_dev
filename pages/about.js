import React from "react";
import ContactUs from "../components/cta/ContactUs";
import Layout from "../components/layout/Layout";

const About = () => (
  <Layout>
    <div className="px-5 py-20">
      <section className="body-font">
        <div className="container flex flex-wrap mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-6 text-gray-900">
              Expertise
            </h1>
            <div className="text-gray-600 leading-relaxed text-base">
              <p>
                Consultancy about the technologies to impliment acording to your
                business model and bussiness needs.
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
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-bold text-gray-800 tracking-wider text-lg mb-3">
              Web Technologies:
            </h2>
            <ul className="text-gray-600 leading-relaxed text-base">
              <li>ReactJS</li>
              <li>React Native</li>
              <li>NextJS (SSR – SSG)</li>
              <li>ExpressJS / NodeJS</li>
              <li>MongoDB / Mongoose / SQL</li>
              <li>RESTful APIs</li>
              <li>HTML / CSS / Javascript</li>
              <li>Bootstrap/ TailWind CSS</li>
              <li>Serverless Deployment</li>
            </ul>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  </Layout>
);

export default About;
