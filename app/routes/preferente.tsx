import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroPreferente from "~/components/heroPreferente";
import HeroOpcionesPreferente from "~/components/heroOpcionesPreferente";
import { HeroOpcionesPreferenteDos, HeroOpcionesPreferenteTres } from "~/components/heroOpcionesPreferente";



export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>
    <HeroPreferente/>
    <HeroOpcionesPreferente/>
    <HeroOpcionesPreferenteDos/>
    <HeroOpcionesPreferenteTres/>

  
    </>
    );
  }