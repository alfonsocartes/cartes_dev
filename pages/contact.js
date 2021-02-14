import ContactForm from "../components/cta/ContactForm";
import Layout from "../components/Layout";

const Contact = () => (
  <Layout
    title="Contact | Cartes Development | Full-Stack Web Development / Mobile Development"
    optionalScript={
      <script src="https://www.google.com/recaptcha/api.js" async defer />
    }
  >
    <section className="body-font">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-6">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            Tell me about your project.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
