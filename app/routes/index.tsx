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
  
    


    <div className="hero grow bg-base-200 rounded-xl" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9554505.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Diseñamos soluciones de vida</h1>
        <p className="mb-5">
          Ofrecemos una amplia gama de servicios financieros personalizados para satisfacer las necesidades de nuestros clientes,
          respaldado por más de 100 años de trayectoria, una sólida reputación y un compromiso con el desarrollo económico y social de México.
        </p>
        <button className="btn  bg-red-500">¡Ingresa a tu portal!</button>


        </div>
    </div>
  </div>


  );
}
