import Image from "next/image";
import Link from "next/link";

const ProjectListItem = ({ post }) => {
  const { title, slug, excerpt, coverImage } = post;
  // console.log(JSON.stringify(post, null, 2));
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            <div
              className="rounded-lg visible object-cover object-center overflow-hidden"
              style={{ minWidth: "100px" }}
            >
              <Image
                src={coverImage.url}
                layout="responsive"
                width={coverImage.width}
                height={coverImage.height}
                alt={`Cover Image for ${title}`}
              />
            </div>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200 text-xl title-font font-medium mb-2">
              <Link href={`/portfolio/projects/${slug}`}>{title}</Link>
            </h2>

            <p className="leading-relaxed text-base">{excerpt}</p>

            <p>
              TODO: tags: FLUTTER, GOOGLE MAPS, LOCATION, RESTFUL API, GITHUB
            </p>

            <Link href={`/portfolio/projects/${slug}`}>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListItem;
