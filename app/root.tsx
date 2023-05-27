import { json, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import i18next from "~/i18next.server";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { useChangeLanguage } from "remix-i18next";
import { themeChange } from "theme-change";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { i18nCookie } from "./i18nCookie.js"
 
import stylesUrl from './styles/tailwind.css';

export function useChangeLanguage(locale: string) { 
  let { i18n } = useTranslation(); 
  useEffect(() => { 
    i18n.changeLanguage(locale); 
  }, [locale, i18n]); 
} 

type LoaderData = { locale: string };

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18next.getLocale(request);
  return json<LoaderData>({ locale }, {
    headers: { "Set-Cookie": await i18nCookie.serialize(locale) }
  })
};

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Experiencia360",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function App() {
  let { locale, domain } = useLoaderData<LoaderData>();
  let { i18n } = useTranslation();
  let { t } = useTranslation();
  useChangeLanguage(locale);

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
function Document({ children, title, }: { children: React.ReactNode; title?: string; }) {
  let { locale } = useLoaderData<LoaderData>() || { locale: "en" };
  let { i18n } = useTranslation();
  return (
    <html lang={locale} dir={i18n.dir()} data-theme="light">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <link rel="apple-touch-icon" sizes="180x180" href="https://staticcontent.360exp.net/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="https://staticcontent.360exp.net/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="https://staticcontent.360exp.net/android-chrome-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="https://staticcontent.360exp.net/favicon-16x16.png"></link>
        <link rel="manifest" href="https://staticcontent.360exp.net/site.webmanifest"></link>
        <link rel="mask-icon" href="https://staticcontent.360exp.net/safari-pinned-tab.svg" color="#040410"></link>
        <link rel="shortcut icon" href="https://staticcontent.360exp.net/favicon.ico"></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="msapplication-TileImage" content="https://staticcontent.360exp.net/mstile-144x144.png"></meta>
        <meta name="msapplication-config" content="https://staticcontent.360exp.net/browserconfig.xml"></meta>
        <meta name="theme-color" content="#040410"></meta>
        <Links />
      </head>
      <body className="flex flex-col min-h-screen bg-base-300">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  let { locale } = useLoaderData<LoaderData>();
  let { i18n } = useTranslation();
  let { t } = useTranslation();

  return (
    <>
    
      <div className="min-h-screen flex flex-col">
      <Header t={t} />
        <div className="grow flex flex-col">
          <Outlet />
        </div>
        <div className="flex-none ">
        <Footer t={t} />
        </div>
      </div>
    </>
  );
}

function LayoutError({ children }: React.PropsWithChildren<{}>) {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 403:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;

    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;


    default:
      throw new Error(caught.data || caught.statusText);
  }
  // <div className="hero min-h-screen bg-base-200">

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <LayoutError>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{caught.status}: {caught.statusText}</h1>
              <p className="py-6">{message}</p>
              <Link to="/" className="btn btn-primary"> Go back to the homepage </Link>
            </div>
          </div>
        </div>
      </LayoutError>
    </Document>

  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (

    <div className="flex-grow">
      <h1>There was an error</h1>
      <p>{error.message}</p>
      <hr />
      <p>
        <a href="/"> Go back to the homepage</a>
      </p>
    </div>

  );
}
