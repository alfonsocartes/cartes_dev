import React, { useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export const CookieNotice = () => {
  const [show, setShow] = React.useState(false);
  function handleCookieNotice() {
    console.log("Cookie notice clicked");
    Cookies.set("cookie-notice", "accepted", { expires: 365 });
    setShow(false);
  }

  useEffect(() => {
    const cookieValue = Cookies.get("cookie-notice");
    if (cookieValue != "accepted") {
      setShow(true);
    }
  }, []);

  if (show) {
    return (
      <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-indigo-500 p-2 shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-1 items-center">
                <p className="ml-3 font-medium text-white">
                  To continue, you must agree to our{" "}
                  <Link href="/privacy-policy">
                    <a className="underline">privacy policy.</a>
                  </Link>
                </p>
              </div>
              <div className=" mt-2 w-auto flex-shrink-0 sm:mt-0">
                <button
                  onClick={handleCookieNotice}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  I agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
