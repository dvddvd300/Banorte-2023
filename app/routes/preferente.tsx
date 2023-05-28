import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroPreferente from "~/components/heroPreferente";



export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>
      <HeroPreferente/>
  
    </>
    );
  }