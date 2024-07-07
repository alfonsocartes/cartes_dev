export const EmailNewsletter = () => (
  <section className="body-font py-10">
    <div className="container mx-auto p-5">
      <div className="mb-12 flex w-full flex-col text-center">
        <h4 className="title-font mb-4 text-lg font-medium sm:text-2xl">
          Subscribe to the Newsletter
        </h4>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          We will just send you interesting info and the blog posts we publish.
        </p>
      </div>
      <div className="mx-auto flex w-full flex-col items-end space-y-4 px-8 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 lg:w-2/3">
        <div className="relative w-full flex-grow">
          <label htmlFor="full-name" className="text-sm leading-7">
            Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-gray-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="relative w-full flex-grow">
          <label htmlFor="email" className="text-sm leading-7">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="focus:gray-indigo-500 w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <button className=" rounded-lg bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900 sm:mt-4">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);
