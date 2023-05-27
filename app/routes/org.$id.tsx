import { HeadersFunction, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";


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
        new Request(`https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/graphql-readonly-pivuf/graphql?query=%7Borg%28query%3A%7B_id%3A%22${id}%22%7D%29%7Btags+type+bio+name%7Bfull+short%7Dsocial%7Bdiscord+facebook+instagram+linkedin+tiktok+twitch+twitter+website+youtube%7Dcontent%7Braw%7Dlogo%7Burl%7Dsystem%7Bstatus%7Bvisibility+approved%7D%7Dparent+namespace+_id%7D%7D`),
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
  // dvd change the cache to 5 minutes maybe

  // if not found, return http status 404

  // dvd add a counter to rate limit the ip or user
  if (api.data === null) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  let org = api.data.org;
  // if visibility its private or approved its false, return http 405

  // dvd add a counter to rate limit the ip or user to prevent brute force and scraping
  if (org.system.status.visibility === "private" || org.system.status.approved === false) {
    throw new Response(null, {
      status: 405,
      statusText: "Not allowed",
    });
  }
  // remove system from org
  delete org.system;
      
  return {
    org: org,
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


export let meta: MetaFunction = () => {
  let { org } = useLoaderData();
  //definir titulo y descripcion dependiendo de la informacion y el estatus del evento (publico o privado)
  return {
    title: org?.name?.full ?? "360exp",
    description: org?.bio ?? "",
  };
};


export default function Index() {

  let { org } = useLoaderData();
  // const renderOrgs = (MainOrg: any[], ChildOrg: any[]) => {
  //   if (MainOrg.length === 0) {
  //     if (ChildOrg.length === 0) {
  //       return (
  //         <div>

  //         </div>
  //       );
  //     }
  //     else {
  //       return (
  //         <div className="grid gap-1 md:gap-2  lg:gap-6 md:col-span-1 md:row-span-5">

  //           <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">

  //             <div className="grid gap-4 card-body">
  //               <h2 className="card-title">Sub-organizaciónes</h2>

  //               {ChildOrg.map((chta: {
  //                 id: Key | null | undefined,
  //                 titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //                 descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //                 imagenLogo: any,
  //                 tags: any,
  //                 tipoDeOrg: any,
  //               }) => (

  //                 <a href={"/org/" + chta.id} key={chta.id} className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">

  //                   <div className="avatar">
  //                     <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
  //                       <img src={chta.imagenLogo} width="94" height="94" alt={chta.titulo + " Logo"}  ></img>
  //                     </div>
  //                   </div>


  //                   <div>
  //                     <div className="text-center">
  //                       <div className="text-lg font-extrabold">{chta.titulo}</div>
  //                       <div className="my-3 text-sm text-base-content text-opacity-60">{chta.descripcion}</div>
  //                     </div>
  //                     <div className="mt-2 text-center">

  //                       {/* TipoDeOrg */}
  //                       {chta.tipoDeOrg.map((chga: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                         <div key={chga.id} className="badge badge-ghost">{chga.name}</div>
  //                       ))}
  //                       {/* TAGS */}
  //                       {chta.tags.map((chge: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                         <div key={chge.id} className="badge badge-ghost">{chge.name}</div>
  //                       ))}

  //                     </div>
  //                   </div>

  //                 </a>

  //               ))}

  //             </div>
  //           </div>
  //         </div>
  //       );
  //     }

  //   } else if (ChildOrg.length === 0) {
  //     return (
  //       <div className="grid gap-1 md:gap-2  lg:gap-6 md:col-span-1 md:row-span-5" >
  //         <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">

  //           <div className="grid gap-4 card-body">
  //             <h2 className="card-title">Parte de</h2>

  //             {MainOrg.map((maorg: {
  //               id: Key | null | undefined,
  //               titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               ImagenLogo: any,
  //               tags: any,
  //               tipoDeOrg: any,
  //             }) => (

  //               <a href={"/org/" + maorg.id} key={maorg.id} className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">


  //                 <div className="avatar">
  //                   <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
  //                     <img src={maorg.ImagenLogo} width="94" height="94" alt={maorg.titulo + " Logo"}  ></img>
  //                   </div>
  //                 </div>


  //                 <div>
  //                   <div className="text-center">
  //                     <div className="text-lg font-extrabold">{maorg.titulo}</div>
  //                     <div className="my-3 text-sm text-base-content text-opacity-60">{maorg.descripcion}</div>
  //                   </div>
  //                   <div className="mt-2 text-center">

  //                     {/* TipoDeOrg */}
  //                     {maorg.tipoDeOrg.map((maga: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={maga.id} className="badge badge-ghost">{maga.name}</div>
  //                     ))}
  //                     {/* TAGS */}
  //                     {maorg.tags.map((mage: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={mage.id} className="badge badge-ghost">{mage.name}</div>
  //                     ))}

  //                   </div>
  //                 </div>

  //               </a>

  //             ))}

  //           </div>
  //         </div>

  //       </div>
  //     );
  //   }
  //   else {
  //     return (

  //       <div className="grid gap-1 md:gap-2  lg:gap-6 md:col-span-1 md:row-span-5">
  //         <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">

  //           <div className="grid gap-4 card-body">
  //             <h2 className="card-title">Parte de</h2>

  //             {MainOrg.map((maorg: {
  //               id: Key | null | undefined,
  //               titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               ImagenLogo: any,
  //               tags: any,
  //               tipoDeOrg: any,
  //             }) => (

  //               <a href={"/org/" + maorg.id} key={maorg.id} className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">


  //                 <div className="avatar">
  //                   <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
  //                     <img src={maorg.ImagenLogo} width="94" height="94" alt={maorg.titulo + " Logo"}  ></img>
  //                   </div>
  //                 </div>


  //                 <div>
  //                   <div className="text-center">
  //                     <div className="text-lg font-extrabold">{maorg.titulo}</div>
  //                     <div className="my-3 text-sm text-base-content text-opacity-60">{maorg.descripcion}</div>
  //                   </div>
  //                   <div className="mt-2 text-center">

  //                     {/* TipoDeOrg */}
  //                     {maorg.tipoDeOrg.map((maga: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={maga.id} className="badge badge-ghost">{maga.name}</div>
  //                     ))}
  //                     {/* TAGS */}
  //                     {maorg.tags.map((mage: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={mage.id} className="badge badge-ghost">{mage.name}</div>
  //                     ))}

  //                   </div>
  //                 </div>

  //               </a>

  //             ))}

  //           </div>
  //         </div>

  //         <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">

  //           <div className="grid gap-4 card-body">
  //             <h2 className="card-title">Sub-organizaciónes</h2>

  //             {ChildOrg.map((chta: {
  //               id: Key | null | undefined,
  //               titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  //               ImagenLogo: any,
  //               tags: any,
  //               tipoDeOrg: any,
  //             }) => (

  //               <a href={"/org/" + chta.id} key={chta.id} className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">


  //                 <div className="avatar">
  //                   <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
  //                     <img src={chta.ImagenLogo} width="94" height="94" alt={chta.titulo + " Logo"}  ></img>
  //                   </div>
  //                 </div>


  //                 <div>
  //                   <div className="text-center">
  //                     <div className="text-lg font-extrabold">{chta.titulo}</div>
  //                     <div className="my-3 text-sm text-base-content text-opacity-60">{chta.descripcion}</div>
  //                   </div>
  //                   <div className="mt-2 text-center">

  //                     {/* TipoDeOrg */}
  //                     {chta.tipoDeOrg.map((chga: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={chga.id} className="badge badge-ghost">{chga.name}</div>
  //                     ))}
  //                     {/* TAGS */}
  //                     {chta.tags.map((chge: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
  //                       <div key={chge.id} className="badge badge-ghost">{chge.name}</div>
  //                     ))}

  //                   </div>
  //                 </div>

  //               </a>

  //             ))}

  //           </div>
  //         </div>
  //       </div>


  //     );
  //   }
  // }


  return (
    <div className="grow lg:px-8">

      {/* <div className="card card-bordered bg-base-100 rounded-box aspect-[4/1] pb-1 md:pb-2 lg:pb-6">
        <figure><img className="aspect-[4/1]" src={imagenPortada} alt={titulo + " "}></img></figure>
      </div> */}

      {/* <div className="grid grid-cols-1 gap-1 md:gap-2  lg:gap-6 lg:p-4 md:grid-cols-3 md:bg-base-200 rounded-box"> */}
      <div className="grid grid-cols-1 gap-1 md:gap-2  lg:gap-6 lg:p-4 md:bg-base-200 rounded-box">


        {cardName(org.logo?.url ?? "" , org.name?.short ?? "", org.name?.full ?? "", org?.bio ?? "", org.type, org.tags)}

        {/* START Proximos eventos */}
        {/* <div className="card md:col-span-1 md:row-span-2 shadow-lg card-bordered rounded-box bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Proximos eventos</h2>
            <div className="card shadow-lg bg-base-200 card-bordered items-center justify-center p-3">
              
              {org.data.org.renderEvent.map((ta: {
                id: Key | null | undefined,
                titulo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
                descripcion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
                disfecha: any,
                imagenLogo: any,
              }) => (
                <a key={ta.id} href={"/e/" + ta.id} className="card w-full bg-base-100 shadow-lg p-4 mb-2" >
                  <div className="select-none rounded-md flex flex-1 items-center">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <a className="block relative">
                        <img alt={ta.titulo + " Logo"} src={ta.imagenLogo}></img>
                      </a>
                    </div>
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-bold">{ta.titulo}</div>
                      <div className="text-sm opacity-50">{ta.descripcion}</div>
                    </div>
                    <div className="text-xs">
                      {ta.disfecha}
                    </div>
                  </div>
                </a>
              ))} 
            </div>
            {/* ver todos los eventos(redirect a search con los parametros de la organizacion) 
          </div>
        </div> */}
        {/* END Proximos eventos */}

        {/* START content */}
        <div className="md:col-span-2 md:row-span-6">
          <div className="card shadow-lg card-bordered rounded-box bg-base-100">
            <div className="card-body">
              <div>
                {/* {HTMLReactParser(org.content.raw)} */}
                {org.content.raw}
              </div >
            </div>
          </div>
        </div>
        {/* add website iframe if needed */}
        {/* {renderContent(tipoDeContenido, sitioWeb)} */}
        {/* END content */}

        {/* START render orgs */}
        {/* {renderOrgs(renderMainOrg, renderChildOrg)} */}
        <div className="grid gap-1 md:gap-2  lg:gap-6 md:col-span-1 md:row-span-5">
          {/* <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">
            <div className="grid gap-4 card-body">
              <h2 className="card-title">Parte de</h2>
              <a className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">
                <div className="avatar">
                  <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
                    <img width="94" height="94"></img>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <div className="text-lg font-extrabold">titulo</div>
                    <div className="my-3 text-sm text-base-content text-opacity-60">descripcion</div>
                  </div>
                  <div className="mt-2 text-center">
                    {/* TipoDeOrg 
                    <div className="badge badge-ghost">name</div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
          {/* <div className="card shadow-lg card-bordered rounded-box bg-base-100 ">
            <div className="grid gap-4 card-body">
              <h2 className="card-title">Sub-organizaciónes</h2>
              <a className="grid items-center gap-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">
                <div className="avatar">
                  <div className="w-24 h-24 p-px rounded-btn bg-base-content bg-opacity-10 shadow">
                    <img width="94" height="94"></img>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <div className="text-lg font-extrabold">titulo</div>
                    <div className="my-3 text-sm text-base-content text-opacity-60">descripcion</div>
                  </div>
                  <div className="mt-2 text-center">
                    {/* TipoDeOrg 
                    <div className="badge badge-ghost">name</div>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
        </div>
        {/* END render orgs */}

        {/* START social */}
        <div className="md:col-span-2 md:row-span-1">
          <div className="card shadow-lg card-bordered rounded-box bg-base-100">
            <div className="card-body">
              <div>
              {renderSocial(org.social)}
                {/* { content } */}
              </div >
            </div>
          </div>
        </div>
        {/* END social */}



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
