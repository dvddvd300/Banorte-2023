import { json } from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { ReactI18NextChild } from "react-i18next";
import { Theme } from "./choose-theme";



export function Header({ t }: any) {
   

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-all duration-100 text-base-content">
      <nav className="navbar sticky mb-2 shadow-lg bg-neutral text-neutral-content rounded-box col-span-1 xl:col-span-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">
              {t("Home")}
              </Link></li>
              {/* <li><Link to="/d/e?n=-tec-">
              {t("Events")}
              </Link></li> */}
              <li><Link to="/d/org?n=-tec-">
              {t("Organizations")}
              </Link></li>
              {/* <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                  </a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Banorte</span>
      </div></a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/">
            {t("Home")}
            </Link></li>
            {/* <li><Link to="/d/e?n=-tec-">
            {t("Events")}
            </Link></li> */}
            <li><Link to="/d/org?n=-tec-">
            {t("Organizations")}
            </Link></li>
            {/* <li tabIndex={0}>
                <a>
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li> */}
          </ul>
        </div>

        <div className="navbar-end">
          {/* <div className="flex-1 lg:flex-none">
                  <div className="form-control">
                      <input type="text" placeholder="Search" className="input input-ghost" />
                  </div>
                </div> */}
          {/* <div
            title="Change Theme"
            className="dropdown dropdown-end z-50"
            tabIndex={0}
          >
            <div className="btn gap-1 normal-case btn-ghost">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
              <span className="hidden md:inline">{t("Theme")}</span>
              <svg
                width="12px"
                height="12px"
                className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
              <Theme />
            </div>
          </div> */}

          {/* lang */}
          <div title="Change Language" className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost gap-1 normal-case">
              <svg
                className="inline-block h-4 w-4 fill-current md:h-5 md:w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
              </svg>
              <svg
                width="12px"
                height="12px"
                className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl">
              <ul className="menu menu-compact gap-1 p-3" tabIndex={0}>
                <li>
                  <a href="?lng=es" className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="Español"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg"
                    />
                    <span className="flex flex-1 justify-between">Español</span>
                  </a>
                </li>
                <li>
                  <a href="?lng=en" className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="English"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                    />
                    <span className="flex flex-1 justify-between">
                      English
                      <span className="badge badge-sm badge-ghost">beta</span>
                    </span>
                  </a>
                </li>
                {/* <li>
                  <button className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="Indonesia"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ee-1f1e9.svg"
                    />
                    <span className="flex flex-1 justify-between">
                      Indonesia
                      <span className="badge badge-sm badge-ghost">Beta</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="日本語"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ef-1f1f5.svg"
                    />
                    <span className="flex flex-1 justify-between">
                      日本語
                      <span className="badge badge-sm badge-ghost">ベータ</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="한국어"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f0-1f1f7.svg"
                    />
                    <span className="flex flex-1 justify-between">한국어 </span>
                  </button>
                </li>
                <li>
                  <button className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="中文"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1e8-1f1f3.svg"
                    />
                    <span className="flex flex-1 justify-between">
                      中文
                      <span className="badge badge-sm badge-ghost">测试版</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="flex">
                    <img
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="繁體中文"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f9-1f1fc.svg"
                    />
                    <span className="flex flex-1 justify-between">
                      繁體中文
                      <span className="badge badge-sm badge-ghost">測試版</span>
                    </span>
                  </button>
               </li> */}
              </ul>
            </div>
          </div>

          {/* 
          <div className="flex-none">
            <Link
              to="/d/e"
              className="btn btn-square btn-ghost btn-sm rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </Link>
          </div> */}


          {/* <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                            </path>
                        </svg>
                    </button>
                </div> */}
          {/* <div className="flex-none">
                    <div className="avatar">
                        <div className="rounded-full w-10 h-10 m-1">
                            <img src="https://i.pravatar.cc/500?img=32" />
                        </div>
                    </div>
                </div> */}
          {/* <a className="btn">Get started</a> */}
        </div>

      </nav>
    </header>
  );
}

