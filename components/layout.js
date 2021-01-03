import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ githubAlert, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert githubAlert={githubAlert} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
