import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroTarjetas from "~/components/heroTarjetas";
import NavBarTarjetas from "~/components/navbarTarjetas";
import Clasica, { Oro, PorTi,BasicaNomina,MujerBanorte} from "~/components/heroOpcionesTarjetas";




export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>

      <HeroTarjetas/>
      <NavBarTarjetas/>
      { Clasica() }
      { BasicaNomina() }

        
    </>
    );
  }