import { HeadersFunction, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";


import HTMLReactParser from 'html-react-parser';

import cardName from "../components/common/cardName";
import { renderSocial } from "~/components/renderRedes";

/**
 * check the user to see if there is an active session, if not
 * redirect to login page
 *
 * @param param0
 * @returns
 */
export let loader: LoaderFunction = async ({ params, request }) => {
  // if the user is not authenticated, redirect to login

  // do something with the user

  // dvd check the counter to see if the user is not abusing the system

  // get the id and clean it so it dosnt have any special characters
  let id = params.id.replace(/[^a-zA-Z0-9]/g, "");
  let api = await fetch(
    new Request(`https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/graphql-readonly-pivuf/graphql?query=query+MyQuery%7Bevent%28query%3A%7B_id%3A%22${id}%22%7D%29%7B_id+access+content%7Braw%7Dend_date%7Bdate+time+timezone+utc%7Dlocation%7Bformat+virtual%7Bplatform+url%7Drecorded%7Bembed_code+platform+url%7Dphysical%7Baddress+city+country+state+venue+zip%7Dlive_streamed%7Bembed_code+recorded%7D%7Dlogo%7Burl%7Dnamespace+start_date%7Bdate+time+timezone+utc%7Dsystem%7Bstatus%7Bapproved+visibility%7D%7Dtitle%7D%7D&operationName=MyQuery`),
    {
      method: "POST",
      headers: {
        "apiKey": "vSt5MHdsTZvq5u9nPWJuaNxU16b6tXGwuotuCi0AKBTStMHycv4rjRr7TAsX58UH",
      },
      // @ts-expect-error
      cf: {
        // Always cache this fetch regardless of content type
        cacheEverything: true,
        // for a max of 5 min before revalidating the resource
        cacheTtl: 300, // 5 minutes
      },
    }
  ).then((api) => api.json())
  console.log(api);
  // dvd change the cache to 5 minutes maybe

  // if not found, return http status 404

  // dvd add a counter to rate limit the ip or user
  if (api.data === null) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  let event = api.data.event;
  // if visibility its private or approved its false, return http 405

  // dvd add a counter to rate limit the ip or user to prevent brute force and scraping
  if (event.system.status.visibility === "private" || event.system.status.approved === false) {
    throw new Response(null, {
      status: 405,
      statusText: "Not allowed",
    });
  }
  // remove system from org
  delete event.system;

  return {
    event: event,
  };
}

export const headers: HeadersFunction = () => {
  // let { org } = useLoaderData();
  // dvd cache the page depending on the event start and end date
  // if event start date is more than 24 hours, cache for 12 hours
  // if event start date is less than 24 hours but more than 6 hour, cache for 2 hours
  // if event start date is less than 6 hours but more than 1 hour, cache for 30 minutes
  // if event start date is less than 1 hour, cache for 15 minutes
  // if event start date is less than 15 minutes, cache for 5 minutes
  // if event start date is less than 5 minutes, cache for 1 minute
  // if event start date is in the past but event end date has not passed, cache for 1 minute
  // if event end date has passed within the last 6 hours, cache for 30 minutes
  // if event end date has passed within the last 12 hours, cache for 2 hours
  // if event end date has passed within the last 24 hours, cache for 12 hours
  // if event end date has passed more than 24 hours, cache for 1 day
  // if event end date has passed more than 1 day, cache for 1 week
  return {
    "Cache-Control": "private, max-age=900, stale-while-revalidate=1200", // 15 minutes cache with 20 minutes stale-while-revalidate
  };
};

export default function Index() {
  let { event } = useLoaderData();



  const renderContent = (TipoDeContenido: string, url: string | undefined) => {
    if (TipoDeContenido == 'Notion y Sitio Externo') {
      return (
        <div className="md:col-span-2 md:row-span-6 grid gap-1 md:gap-2  lg:gap-6">

          <div className="card shadow-lg card-bordered rounded-box bg-base-100">
            <div className="card-body">
              {/* <div><Render blocks={data.props.blocks} useStyles /></div > */}
            </div>
          </div>
          {/* add the url in a pill and display ofseted to the botom about 12 px down */}
          <div className="shadow-2xl rounded-box mockup-window bg-base-300">
            <div className="text-xs text-center text-gray-500 relative p-0 m-0 -top-8 -mb-4">
              <a
                className="badge badge-ghost badge-md badge-offset badge-bottom bg-base-100 text-base-content min-w-[60%]
            "
                href={url} target="_blank" rel="noopener noreferrer"
              >
                {url}
              </a>
            </div>
            <div className="bg-base-200">
              <iframe width="100%" className='aspect-[1/3] md:aspect-[3/2]  lg:aspect-[16/10] ' src={url} frameBorder="0" scrolling="yes" id="Iframe" loading="lazy" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>
            </div>
          </div>

        </div>
      );
    }
  }


  return (
    <div className="flex-grow lg:px-8">

      <div className="grid grid-cols-1 gap-1 md:gap-2  lg:gap-6 lg:p-4 md:grid-cols-3 md:bg-base-200 rounded-box">

        {/* {cardName(event.logo?.url ?? "", event.title ?? "", "", "", [], [])} */}
        <div className="card md:col-span-1 md:row-span-1 shadow-lg card-bordered rounded-box bg-base-100">
          <div className="card-body">

            <h2 className="card-title">Informacion</h2>
            <div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <line x1="16" y1="3" x2="16" y2="7" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="4" y1="11" x2="20" y2="11" />
                <rect x="8" y="15" width="2" height="2" />
              </svg>{/* Fecha */}
              <span className="align-middle text-md font-bold text-base-content text-opacity-60">Fecha: </span>
              <span>{event.start_date}</span>
              <br />

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <circle cx="18" cy="18" r="4" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>{/* Hora */}
              <span className="align-middle text-md font-bold text-base-content text-opacity-60">Hora: </span>
              <span>{event.start_time}</span>
              <br />

              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>{/* Publico
              <span className="align-middle text-md font-bold text-base-content text-opacity-60">Publico: </span>
              <span>
                {publico.map((pu: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                  <div key={pu.id} className="badge badge-ghost">{pu.name}</div>
                ))}
              </span>
              <br /> */}

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                <line x1="8" y1="7" x2="8" y2="7.01" />
                <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                <line x1="16" y1="15" x2="16" y2="15.01" />
              </svg>{/* lugares */}
              {event.location?.format === "physical" ? (<>
                <span className="align-middle text-md font-bold text-base-content text-opacity-60">
                  lugar:
                </span>
                <span>
                  {event.location.physical.venue + ", " + event.location.physical.city + ", " + event.location.physical.state}
                </span></>
              ) : event.location?.format === "virtual" ? (<>
                <span className="align-middle text-md font-bold text-base-content text-opacity-60">
                  Virtual:
                </span>
                <span>
                  {event.location.virtual.platform}
                </span></>
              ) : (<>
                <span className="align-middle text-md font-bold text-base-content text-opacity-60">
                  Lugar:
                </span>
                <span>
                  Por definir
                </span></>
              )}
              <br />

            </div>

          </div>
        </div>

        {/* START content */}
        <div className="md:col-span-2 md:row-span-6">
          <div className="card shadow-lg card-bordered rounded-box bg-base-100">
            <div className="card-body">
              <div>
                {/* {HTMLReactParser(org.content.raw)} */}
                {event.content.raw}
              </div >
            </div>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-5">
          <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">

            {/* <div className="grid gap-4 card-body">
              <h2 className="card-title">Organizado por</h2>

              {data.props.renderOrg.map((ta: {
                id: Key | null | undefined,
                titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
                descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
                ImagenLogo: any,
                tags: any,
                tipoDeOrg: any,
              }) => (

                <a href={"/org/" + ta.id} key={ta.id} className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">


                  <div className="avatar">
                    <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
                      <img src={ta.ImagenLogo} width="94" height="94" alt={ta.titulo + " Logo"}  ></img>
                    </div>
                  </div>


                  <div>
                    <div className="text-center">
                      <div className="text-lg font-extrabold">{ta.titulo}</div>
                      <div className="my-3 text-sm text-base-content text-opacity-60">{ta.descripcion}</div>
                    </div>
                    <div className="mt-2 text-center">

                      {/* TipoDeOrg
                      {ta.tipoDeOrg.map((ga: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                        <div key={ga.id} className="badge badge-ghost">{ga.name}</div>
                      ))}
                      {/* TAGS
                      {ta.tags.map((ge: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                        <div key={ge.id} className="badge badge-ghost">{ge.name}</div>
                      ))}

                    </div>
                  </div>

                </a>

              ))}

            </div> */}
          </div>
        </div>


      </div>
    </div>
  )
}

// this will handle unexpected errors (like the default case above where the
// CatchBoundary gets a response it's not prepared to handle).

// CatchBoundary is a component that can be used to catch errors that occur
// in its children. It's a bit like a try/catch block in JavaScript.
// It's used in this example to catch errors that occur in the
// <Suspense> component.


export function ErrorBoundary({ error }: { error: Error }) {

  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
