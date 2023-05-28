import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroPymes from "~/components/heroPymes";
import HeroOpcionesPymes from "~/components/heroOpcionesPymes";
import HeroOpcionesPymesDos from "~/components/heroOpcionesPymes_Dos";



export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData(); 
  
    return (
      <>
        <HeroPymes/>
        <HeroOpcionesPymesDos/>
        <HeroOpcionesPymes/>
      

  
    </>
    );
  }