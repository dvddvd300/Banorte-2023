import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import  Hero  from "../components/sectionServices";
import HeroMountain from "~/components/heroMountain";

export let loader: LoaderFunction = async ({ request }) => {
  return {};
};

export default function Index() {
  let { t } = useTranslation();
  const data = useLoaderData();

  return (
    <>
    
      <HeroMountain/>
      <Hero/>
  </>
  );
}
