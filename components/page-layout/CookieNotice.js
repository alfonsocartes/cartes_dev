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
    console.log("cookieValue", cookieValue);
    if (cookieValue != "accepted") {
      setShow(true);
    }
  }, []);

  if (show) {
    return (
      <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-indigo-500 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex-1 flex items-center">
                <p className="ml-3 font-medium text-white">
                  To continue, you must agree to our{" "}
                  <Link href="/privacy-policy">
                    <a className="underline">privacy policy.</a>
                  </Link>
                </p>
              </div>
              <div className=" mt-2 flex-shrink-0 sm:mt-0 w-auto">
                <button
                  onClick={handleCookieNotice}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
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
