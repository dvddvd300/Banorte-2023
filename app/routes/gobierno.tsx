import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Gobierno from "~/components/heroGobierno";
import HeroOpcionesGobierno from "~/components/heroOpcionesGobierno";
import HeroOpcionesPymes from "~/components/heroOpcionesPymes";


export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData(); 
  
    return (
      <>
        
      <Gobierno/>
      <HeroOpcionesGobierno/>
    <HeroOpcionesPymes/>

  
    </>
    );
  }