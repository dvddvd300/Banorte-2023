import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroEnlaceDigital from "~/components/heroenlacedigital";
import NavBarEnlaceDigital from "~/components/navbarenlacedigital";
import {Mujer} from "~/components/heroOpcionesEnlaceDigital";



export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>
        <HeroEnlaceDigital/>
        <NavBarEnlaceDigital/>
        {Mujer()}

    
    </>
    );
  }