import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import  Hero  from "../components/Hero";

export let loader: LoaderFunction = async ({ request }) => {
  return {};
};

export default function Index() {
  let { t } = useTranslation();
  const data = useLoaderData();

  return (
    <>
    
    <div className="hero grow bg-base-200 rounded-xl" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9554505.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Diseñamos soluciones de vida</h1>
        <p className="mb-5">
          Ofrecemos una amplia gama de servicios financieros personalizados para satisfacer las necesidades de nuestros clientes,
          respaldado por más de 100 años de trayectoria, una sólida reputación y un compromiso con el desarrollo económico y social de México.
        </p>
        <button className="btn  bg-rojobanorte
        ">¡Ingresa a tu portal!</button>


        </div>
    </div>
  </div>
  <Hero/>
  </>
  );
}
