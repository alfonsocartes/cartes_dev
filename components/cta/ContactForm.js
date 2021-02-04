/* eslint-disable no-console */
import { useState } from "react";

import emailjs from "emailjs-com";
import Alert from "../Alert";

const ContactForm = () => {
  const [alert, setAlert] = useState(<div />);

  const sendMessage = (e) => {
    e.preventDefault();

    setAlert(
      <Alert type="WARNING" title="Loading..." message="Please wait." />
    );

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((result) => {
        setAlert(
          <Alert
            type="SUCCESS"
            title="Sent successfully!"
            message="Thank you, I will try to get back to you as soon as possible."
          />
        );
        console.log(result.text);
      })
      .catch((error) => {
        setAlert(
          <Alert
            type="ERROR"
            title="Error"
            message="There was an error sending the message. Please try again."
          />
        );
        console.error(error.text);
      });
  };

  return (
    <form onSubmit={sendMessage}>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="from_name" className="leading-7 text-sm ">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                autoComplete="name"
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="reply_to" className="leading-7 text-sm ">
                Email
              </label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                required
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full text-center">
            <div
              className="g-recaptcha inline-block"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
            <button
              type="submit"
              className="flex mx-auto text-white bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900 py-2 px-8 sm:mt-4 focus:outline-none text-lg"
            >
              Send
            </button>
          </div>
          {alert}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <p className="leading-normal my-5">London, United Kingdom.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
