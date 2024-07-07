import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { Alert } from "../Alert";

export const ContactForm = () => {
  const [alert, setAlert] = useState(<div />);

  const sendMessage = async (e) => {
    e.preventDefault();

    setAlert(
      <Alert type="WARNING" title="Loading..." message="Please wait." />,
    );

    // To get them from vercel to .env.local: vercel env pull .env.local

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      .then(() => {
        setAlert(
          <Alert
            type="SUCCESS"
            title="Sent successfully!"
            message="Thank you, I will try to get back to you as soon as possible."
          />,
        );
      })
      .catch((error) => {
        console.error(error);
        if (error.text.includes("recaptcha")) {
          setAlert(
            <Alert
              type="ERROR"
              title="Error"
              message="Please validate the reCAPTCHA."
            />,
          );
        } else {
          setAlert(
            <Alert
              type="ERROR"
              title="Error"
              message="There was an error sending the message. Please try again."
            />,
          );
        }
      });
  };

  return (
    <form onSubmit={sendMessage}>
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="from_name" className="text-sm leading-7 ">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                autoComplete="name"
                required
                className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="reply_to" className="text-sm leading-7 ">
                Email
              </label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <label htmlFor="message" className="text-sm leading-7 ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                required
                className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center p-2">
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
            <button
              type="submit"
              className="mx-auto mt-4 flex rounded-lg bg-transparent bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900 sm:mt-4"
            >
              Send
            </button>
          </div>
          <div className="flex w-full flex-col text-center">{alert}</div>
          <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
            <p className="my-5 leading-normal">London, United Kingdom.</p>
          </div>
        </div>
      </div>
    </form>
  );
};
