import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroCasaDeBolsa from "~/components/heroCasaDeBolsa";
import HeroOpcionesCasaDeBolsa from "~/components/heroOpcionesCasaDeBolsa";

export let loader: LoaderFunction = async ({ request }) => {
  return {};
};

export default function Index() {
  let { t } = useTranslation();
  const data = useLoaderData();

  return (
    <>
      <HeroCasaDeBolsa />
        <HeroOpcionesCasaDeBolsa />

    </>
  );
}
