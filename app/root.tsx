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
import { StickyF } from "./components/StickyF";

import { i18nCookie } from "./i18nCookie.js" 
 
import stylesUrl from './styles/tailwind.css';

// import Hotjar from '@hotjar/browser';

// const siteId = 3510413;
// const hotjarVersion = 6;

// Hotjar.init(siteId, hotjarVersion);

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
    title: "Banorte",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function App() {
  let { locale } = useLoaderData<LoaderData>();
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
        <script src="heatmap.min.js"></script>
        <script src="script.js"></script>
        <Meta />
        <meta property="og:url" content="https://banorte-2023.pages.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Banorte | El Banco Fuerte de México" />
        <meta property="og:description" content="¡Bienvenido a Banorte! Administra tus finanzas con Banco en línea, solicita tu tarjeta de crédito Banorte, cambia a Nómina Banorte, solicita un crédito hipotecario, fondos de inversión y más." />
        <meta property="og:image" content="static/redes_sociales.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="¡Bienvenido a Banorte! Administra tus finanzas con Banco en línea, solicita tu tarjeta de crédito Banorte, cambia a Nómina Banorte, solicita un crédito hipotecario, fondos de inversión y más." />
        <meta name="twitter:title" content="Banorte | El Banco Fuerte de México" />
        <meta name="description" content="¡Bienvenido a Banorte! Administra tus finanzas con Banco en línea, solicita tu tarjeta de crédito Banorte, cambia a Nómina Banorte, solicita un crédito hipotecario, fondos de inversión y más."/>
        <meta name="autor" content="Banorte"/>
        <link href="static/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
				<link rel="canonical" href="https://banorte-2023.pages.dev"/>
        <meta name="theme-color" content="#E30029"></meta>
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
