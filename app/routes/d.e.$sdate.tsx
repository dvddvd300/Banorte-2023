
import {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/cloudflare";
import {
  Link,
  useCatch,
  useLoaderData,

} from "@remix-run/react";
import { t } from "i18next";

import moment from "moment";
import momenttimezone from "moment-timezone";

import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function generateDays(inputDate) {
  const [day, month, year] = inputDate.split('-').map(Number);

  // Calculate the start date (first Sunday of the month or previous month)
  const startDate = new Date(year, month - 1, 1);
  const startDay = startDate.getDay();
  const diff = startDay !== 0 ? startDay : 7;
  startDate.setDate(startDate.getDate() - diff);

  // Calculate the end date (last Saturday of the 6th week)
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 41);

  const dates = [];

  while (startDate <= endDate) {
    const formattedDate = `${startDate.getDate().toString().padStart(2, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getFullYear()}`;
    const isCurrentMonth = startDate.getMonth() === month - 1;

    let currentDate = {
      date: formattedDate,
      isCurrentMonth: isCurrentMonth
    };

    if (formattedDate === inputDate) {
      currentDate.isSelected = true;
    }

    const today = new Date();
    if (
      startDate.getDate() === today.getDate() &&
      startDate.getMonth() === today.getMonth() &&
      startDate.getFullYear() === today.getFullYear()
    ) {
      currentDate.isToday = true;
    }

    dates.push(currentDate);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
}

export let loader: LoaderFunction = async ({ request, params }) => {
  
  // get selected date
  const SelectDate = params.sdate;

  // transform selected date to yyyy-mm-dd from dd-mm-yyyy
  const [dd, mm, yyyy] = SelectDate.split('-').map(Number);

  const dateapi = `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`;
  console.log(dateapi);

  // https://360graphqlexp.d30.workers.dev/
  let api = await fetch(
    new Request(`https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/graphql-readonly-pivuf/graphql?query=query+MyQuery%28%24utc%3AString%3D%22${dateapi}%22%29%7Bevents%28sortBy%3A_ID_ASC+query%3A%7BAND%3A%5B%7Bsystem%3A%7Bstatus%3A%7Bapproved%3Atrue%7D%7D%7D%7Bsystem%3A%7Bstatus%3A%7Bvisibility%3A%22public%22%7D%7D%7D%7BOR%3A%5B%7Bstart_date%3A%7Butc_gte%3A%24utc%7D%7D%7Bend_date%3A%7Butc_gte%3A%24utc%7D%7D%5D%7D%5D%7D%29%7B_id+title+logo%7Burl%7Dlocation%7Bformat+live_streamed%7Brecorded%7Dphysical%7Bvenue+state%7Drecorded%7Bplatform%7Dvirtual%7Bplatform%7D%7Dend_date%7Butc+timezone+time+date%7Dstart_date%7Bdate+time+timezone+utc%7D%7D%7D&operationName=MyQuery`),
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
  const data = api?.data?.events ?? [];
  console.log(data);

  // order events by start date
  data.sort((a, b) => {
    return new Date(a.start_date.utc) - new Date(b.start_date.utc);
  });

  let short = data.map((event) => {
    return {
      id: event._id,
      datetime: event.start_date.utc,
      enddatetime: event.end_date.utc,
      title: event.title,
      imageUrl: event.logo?.url,
      location:
        event.location?.format === "physical" ? (event.location.physical.venue + ", " + event.location.physical.city + ", " + event.location.physical.state) :
          event.location?.format === "virtual" ? ("Virtual, " + event.location.virtual.platform) :
            event.location?.format === "live_streamed" ? ("Live Streamed, " + event.location.live_streamed.recorded) :
              event.location?.format === "recorded" ? ("Recorded, " + event.location.recorded.platform) :
                ("Unknown Location"),
    };
  });

  // get all dates of the month
  const days = generateDays(SelectDate);

  // const url = new URL(request.url);

  // childrenid parentid, but namespace not yet
  // let namespace = (url.searchParams.get("n") ?? "").toLowerCase();
  // let suborg = (url.searchParams.get("o") ?? "").toLowerCase();
  // querry sub orgs
  return {
    days: days,
    SelectDate: SelectDate,
    events: short,
    cf: request.cf,
  };
};


// export const headers: HeadersFunction = () => {
//   return {
//     "Cache-Control": "private, max-age=900, stale-while-revalidate=1200", // 15 minutes cache with 20 minutes stale-while-revalidate
//   };
// };

// export let meta: MetaFunction = () => {
//   return {

//   };
// };

// export let meta: MetaFunction = () => {
//   // let data = useLoaderData();
//   //definir titulo y descripcion dependiendo de la informacion y el estatus del evento (publico o privado)
//   return {
//     title: "Title",
//     description: "description",
//   };
// };




export default function Index() {
  const { days, SelectDate, events, cf } = useLoaderData();


  return (
    // :AFTER pseudo element
    <div className="grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-10">
        <h2 className="text-base font-semibold leading-6 text-gray-900">Events Calendar</h2>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
            <div className="flex items-center text-gray-900">
              <button
                type="button"
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              // go to previous month
              ><Link to={`/d/e/${moment(SelectDate, "DD-MM-YYYY").subtract(1, 'months').format("DD-MM-YYYY")}`}>
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </button>
              <div className="flex-auto text-sm font-semibold">{
                moment(SelectDate, "DD-MM-YYYY").format("MMMM YYYY")
              }</div>
              <button
                type="button"
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              ><Link to={`/d/e/${moment(SelectDate, "DD-MM-YYYY").add(1, 'months').format("DD-MM-YYYY")}`}>
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </button>
            </div>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>Dom.</div>
              <div>Lun.</div>
              <div>Mar.</div>
              <div>Mié.</div>
              <div>Jue.</div>
              <div>Vie.</div>
              <div>Sáb.</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  // href = {`/d/e/${day.date}`}
                  className={classNames(
                    'py-1.5 hover:bg-gray-100 focus:z-10',
                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                    (day.isSelected || day.isToday) && 'font-semibold',
                    day.isSelected && 'text-white',
                    !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                    !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                    day.isToday && !day.isSelected && 'text-indigo-600',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === days.length - 7 && 'rounded-bl-lg',
                    dayIdx === days.length - 1 && 'rounded-br-lg'
                  )}
                ><Link to={`/d/e/${day.date}`}>
                    <time
                      dateTime={day.date.split('-').reverse().join('-')}
                      className={classNames(
                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                        day.isSelected && day.isToday && 'bg-indigo-600',
                        day.isSelected && !day.isToday && 'bg-gray-900'
                      )}
                    >
                      {day.date.split('-')[0].replace(/^0/, '')}
                    </time>
                  </Link>
                </button>
              ))}
            </div>
            {SelectDate !== moment().format("DD-MM-YYYY") && (
              <div className="mt-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700" // go to today
                ><Link to={`/d/e/${moment().format("DD-MM-YYYY")}`}>
                    Go to today
                  </Link>
                </button>
              </div>
            )}

            {/* <button
              type="button"
              className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add event
            </button> */}
          </div>
          <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            {events.length === 0 ? (
              <li className="py-6 xl:py-12">
                <div className="space-y-2 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M24 8a16 16 0 1016 16A16 16 0 0024 8z"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 14v8l4 4"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 34V24l-4-4"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-base font-medium text-gray-900">No events found for this day.</div>
                  <div className="text-sm">
                    {SelectDate !== moment().format("DD-MM-YYYY") && (
                      <Link className="font-medium text-indigo-600 hover:text-indigo-500" to={`/d/e/${moment().format("DD-MM-YYYY")}`}>
                        Go to today <span aria-hidden="true">&rarr;</span>
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ) : (
              events.map((event) => (
                // <Link to={`/e/${event.id}`} >
                <li key={event.id} className="relative flex space-x-6 py-6 xl:static">

                  <img src={event.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
                  <div className="flex-auto">
                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.title}</h3>
                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>
                          <time dateTime={momenttimezone.utc(event.datetime).tz(cf.timezone).format("YYYY-MM-DDTHH:mm:ssZ")}>
                            {momenttimezone.utc(event.datetime).tz(cf.timezone).format("dddd, MMMM D, YYYY")} at {momenttimezone.utc(event.datetime).tz(cf.timezone).format("h:mm A")}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                        <dt className="mt-0.5">
                          <span className="sr-only">Location</span>
                          <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>{event.location}</dd>
                      </div>
                    </dl>
                  </div>
                  <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Edit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Cancel
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                //</Link>
              ))
            )}
          </ol>
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
