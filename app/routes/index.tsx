import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Section from "~/components/sectionServices";
import HeroMountain from "~/components/heroMountain";

export let loader: LoaderFunction = async ({ request }) => {
  let cf = request.cf;
  return {
    cf : cf,
  };
};


export default function Index() {
  let { t } = useTranslation();
  const data = useLoaderData();

  return (
    <>
    
      <HeroMountain/>
      <Section/>
     
  </>
  );
}
