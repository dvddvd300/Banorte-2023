// import tailwind from "../../tailwind.config.js";
// let DEFAULT_THEMES = tailwind.daisyui.themes;
let DEFAULT_THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

// let theme =  document.documentElement.getAttribute("data-theme");
// if (!theme) { let theme = "default"; }

export function Theme ({  }) {
    return (
      <div className="grid grid-cols-1 gap-3 p-3 z-50" tabIndex={0}>
        <div
          className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
          data-set-theme=""
          data-act-class="outline"
        >
          <div
            data-theme="default"
            className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
          >
            <div className="grid grid-cols-5 grid-rows-3">
              <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                <div className="flex-grow text-sm font-bold">default</div>{" "}
                <div className="flex flex-shrink-0 flex-wrap gap-1">
                  <div className="bg-primary w-2 rounded"></div>{" "}
                  <div className="bg-secondary w-2 rounded"></div>{" "}
                  <div className="bg-accent w-2 rounded"></div>{" "}
                  <div className="bg-neutral w-2 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {DEFAULT_THEMES.map((th) => (
          <div key={th}
            className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
            data-set-theme={th}
            data-act-class="outline"
          >
            <div
              data-theme={th}
              className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">{th}</div>{" "}
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>{" "}
                    <div className="bg-secondary w-2 rounded"></div>{" "}
                    <div className="bg-accent w-2 rounded"></div>{" "}
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}