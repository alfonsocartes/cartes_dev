import Container from "./container";

export default function Alert({ githubAlert }) {
  return (
    <Container>
      <div className="py-2 text-center text-sm">
        {githubAlert ? (
          <>
            The source code for this website is{" "}
            <a
              href="https://github.com/alfonsocartes/cartes_dev"
              className="underline hover:text-success duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        ) : null}
      </div>
    </Container>
  );
}
