import { LoaderFunction, redirect } from "@remix-run/cloudflare";
import { useCatch, useLoaderData } from "@remix-run/react";


export let loader: LoaderFunction = async ({ request }) => {
  // get current date and redirect to /d/e/dd-mm-yyyy
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return redirect(`/d/e/${dd}-${mm}-${yyyy}/`);
};



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
