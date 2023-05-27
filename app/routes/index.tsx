import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

/**
 * check the user to see if there is an active session, if not
 * redirect to login page
 *
 * @param param0
 * @returns
 */
 export let loader: LoaderFunction = async ({ request }) => {
  
  return({
    
  });
};

/**
 *  handle the logout request
 *
 * @param param0
 */


export default function Index() {
  //utilizar i18next para traducir el contenido de la pagina
  let { t } = useTranslation();

  const data = useLoaderData();
  return (
    // {t("greeting")}
  //   <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
  //     <h1>Welcome to Remix</h1>
  //     <img
  //       src="https://staticcontent.360exp.net/icons8-twitter-48.png"
  //       alt="A house with two children standing in front of it"
  //       onError={event => {
  //         event.target.src = "https://staticcontent.360exp.net/icons8-web-48.png"
  //         event.onerror = null
  //       }}
  //  />
    // </div>
  
  <div className="hero grow bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hola, </h1>
        <p className="py-6">En este portal puedes explorar los grupos que existen, y informacion de los mismos.</p>
        <Link to="/d/org?n=-tec-" className="btn btn-primary">Descubrir organizaciónes</Link>
        </div>
    </div>
  </div>
  );
}
