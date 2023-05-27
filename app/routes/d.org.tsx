
import {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  useCatch,
  useLoaderData,

} from "@remix-run/react";
import { t } from "i18next";

import { JSXElementConstructor, Key, ReactChild, ReactElement, ReactFragment, ReactPortal } from "react";
import { ReactI18NextChild } from "react-i18next";
import { renderSocial } from "~/components/renderRedes";




export let loader: LoaderFunction = async ({ request, params }) => {
 
  const id = params.type;
  const url = new URL(request.url);

  // childrenid parentid, but namespace not yet
  let namespace = (url.searchParams.get("n") ?? "").toLowerCase();
  let suborg = (url.searchParams.get("o") ?? "").toLowerCase();
  // querry sub orgs
  let api = await fetch(
      new Request(`https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/graphql-readonly-pivuf/graphql?query=%7Borgs%28query%3A%7Bsystem%3A%7Bstatus%3A%7Bapproved%3Atrue+visibility%3A"public"%7D%7D%7D%29%7Btags+type+bio+name%7Bfull+short%7Dsocial%7Bdiscord+facebook+instagram+linkedin+tiktok+twitch+twitter+website+youtube%7Dcontent%7Braw%7Dlogo%7Burl%7Dsystem%7Bstatus%7Bvisibility+approved%7D%7Dparent+namespace+_id%7D%7D`),
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
  const data = api?.data?.orgs ?? [];
  return {
    disorgs: data,
  };
};


export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "private, max-age=900, stale-while-revalidate=1200", // 15 minutes cache with 20 minutes stale-while-revalidate
  };
};

export let meta: MetaFunction = () => {
  return {

  };
};

// export let meta: MetaFunction = () => {
//   // let data = useLoaderData();
//   //definir titulo y descripcion dependiendo de la informacion y el estatus del evento (publico o privado)
//   return {
//     title: "Title",
//     description: "description",
//   };
// };



export default function Index() {
  const { disorgs } = useLoaderData();
  // let pokemonList = useLoaderData<Pokemon[]>();
  // const [search, setSearch] = useState(useSearchParams()[0].get("q") ?? "");

  return (
    <div className="flex flex-col grow lg:px-8">
      <div className="overflow-x-auto flex-grow w-full">

        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {disorgs.map((disorg: { _id: Key | null | undefined; logo: { url: string | undefined; alt: string | undefined; }; name: { full: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactI18NextChild> | null | undefined; short: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }; bio: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactI18NextChild> | null | undefined; social: string | undefined; }) => (
              <li key={disorg._id}>
                <a href={`/org/${disorg._id}`} className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                      <picture>
                        {/* <source srcSet={"https://cdn.360exp.net/unsafe/48x48/filters:format(webp)/" + encodeURIComponent(disorg.logo.url)} type="image/webp" />
                        <source srcSet={"https://cdn.360exp.net/unsafe/48x48/filters:format(png)/" + encodeURIComponent(disorg.logo.url)} type="image/png" /> */}
                        <img src={disorg.logo.url} loading="lazy" alt={disorg.name.short + " Logo"} className="h-12 w-12 inline-block rounded-md"
                          // onError={({ currentTarget }) => {
                          //   currentTarget.onerror = null; // prevents looping
                          //   currentTarget.src=`${disorg.logo.url}`;
                          // }}
                          />
                      </picture>
                      </div>
                      <div className="min-w-0 flex-1 px-4 sm:grid sm:grid-cols-3 md:grid-cols-3 md:gap-4">
                        <div className=" ">
                          <p className="truncate text-lf font-bold text-indigo-600">{disorg.name.short}</p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 ">
                            <span className="truncate">{disorg.name.full}</span>
                          </p>
                        </div>
                        <div className="sm:block">
                          <div>
                            <p className="text-md text-gray-900">
                              <span className="truncate">{disorg.bio}</span>
                            </p>
                          </div>
                        </div>
                        <div className="sm:block">
                          <div className="flex items-center h-12" >
                          {renderSocial(disorg.social)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 align-middle"
                      >{t("view more")}
                      <svg className="h-5 w-5 text-gray-400" x-description="Heroicon name: mini/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                      </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

// this will handle unexpected errors (like the default case above where the
// CatchBoundary gets a response it's not prepared to handle).

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );

}
