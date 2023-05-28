import { HeadersFunction, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";


import cardName from "../components/common/cardName";
import { renderSocial } from "~/components/renderRedes";

/**
 * check the user to see if there is an active session, if not
 * redirect to login page
 *
 * @param param0
 * @returns
 */
export let loader: LoaderFunction = async ({ params, request }) => {


  return {
  };
}

export const headers: HeadersFunction = () => {
 
  return {
    "Cache-Control": "private, max-age=900, stale-while-revalidate=1200", // 15 minutes cache with 20 minutes stale-while-revalidate
  };
};


export let meta: MetaFunction = () => {
  return {

  };
};
function setIgnoreXFrameOptions() {
  if (window.addEventListener) {
    window.addEventListener("message", function (e) {
      if (e.data === "setIgnoreXFrameOptions") {
        var iframes = document.querySelectorAll("iframe");
        for (var i = 0; i < iframes.length; i++) {
          iframes[i].setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
        }
      }
    }, false);
  }
}

export default function Index() {

  setIgnoreXFrameOptions();

  return (
    <div className="grow lg:px-8">
      <iframe id="geolocatorFrame"
        src="https://www.banorte.com/cms/geolocalizacion-banorte/v3/gmaps.html"
        style={{ margin: 0, border: 0, width: '100%', height: '52vw', backgroundColor: '#eee' }}
        allow="geolocation *;"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      </div>
    )
}

// this will handle unexpected errors (like the default case above where the
// CatchBoundary gets a response it's not prepared to handle).

// CatchBoundary is a component that can be used to catch errors that occur
// in its children. It's a bit like a try/catch block in JavaScript.
// It's used in this example to catch errors that occur in the
// <Suspense> component.


export function ErrorBoundary({ error }: { error: Error }) {

  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
