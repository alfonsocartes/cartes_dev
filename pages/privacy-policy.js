import ContactUs from "../components/cta/ContactUs";
import Layout from "../components/Layout";

const PrivacyPolicy = () => (
  <Layout title="Privacy Policy | Cartes Development  | Full-Stack Web Development / Mobile Development">
    <section className="body-font">
      <h1 className="my-10 sm:text-3xl text-2xl font-bold text-center">
        CARTES.DEV PRIVACY POLICY
      </h1>
      <p className="mb-4">
        Alfonso Cartes built cartes.dev as a commercial website. This SERVICE is
        provided by Alfonso Cartes and is intended for use as is.
      </p>
      <p className="mb-4">
        This page is used to inform visitors regarding my policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use my Service.
      </p>
      <p className="mb-4">
        If you choose to use my Service, then you agree to the collection and
        use of information in relation to this policy.
      </p>
      <p className="mb-4">
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at AnyLeft unless otherwise
        defined in this Privacy Policy.
      </p>
      <h4 className="sm:text-xl text-md font-medium m-10">
        Information Collection and Use
      </h4>
      <p className="mb-4">
        This website does not require any of your personal data or collects any
        personal data. We use analytic tools such as Google Analytics for
        anonymous usage statistics.
      </p>
      <h4 className="sm:text-xl text-md font-medium m-10">
        Links to Other Sites
      </h4>
      <p className="mb-4">
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by me. Therefore, I strongly advise you
        to review the Privacy Policy of these websites. I have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>
      <h4 className="sm:text-xl text-md font-medium m-10">
        Changes to This Privacy Policy
      </h4>
      <p className="mb-4">
        I may update our Privacy Policy from time to time. Thus, you are advised
        to review this page periodically for any changes. I will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately after they are posted on this page.
      </p>
      <h4 className="sm:text-xl text-md font-medium m-10">Contact Us</h4>
      <p className="mb-4">
        If you have any questions or suggestions about my Privacy Policy, do not
        hesitate to contact me.
      </p>
      <ContactUs />
    </section>
  </Layout>
);

export default PrivacyPolicy;
