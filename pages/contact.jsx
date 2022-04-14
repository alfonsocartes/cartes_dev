import { ContactForm } from "../components/cta/ContactForm";
import { Layout } from "../components/Layout";

const Contact = () => (
  <Layout title="Contact | Cartes Development | Full-Stack Web Development | Mobile Development">
    <section className="body-font">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-6 text-2xl font-bold sm:text-3xl">
            Contact
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 ">
            Tell me about your project.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Contact;
