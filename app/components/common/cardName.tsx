import { useState } from "react";

export function component(imagenLogo, shortName, fullName, descripcion, type, tags) {
  let timeoutId = setTimeout(() => {
    const img = document.querySelector('img[alt="' + shortName + ' logo"]');
    if (img && !img.complete) {
      img.src = imagenLogo;
      img.onerror = null;
      setTimeout(() => {
        const sources = img.parentNode.querySelectorAll('source');
        sources.forEach(source => {
          source.remove();
        });
      }, 1000); // remove the source elements after 1 seconds
    }
  }, 1000); // check after 1 seconds
  return (
    <div className="card md:col-span-2 md:row-span-1 shadow-lg card-bordered rounded-box bg-base-100 side">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-btn w-48 h-48 shadow">
              {/* logo cuadrado evento, centrado */}
              <picture>
                <source srcSet={"https://cdn.360exp.net/unsafe/192x192/filters:format(webp)/" + encodeURIComponent(imagenLogo)} type="image/webp"
                />
                <source srcSet={"https://cdn.360exp.net/unsafe/192x192/filters:format(png)/" + encodeURIComponent(imagenLogo)} type="image/png" 
                />
                <img loading="lazy" alt={shortName + " logo"} src={imagenLogo} 
                  onLoad={() => {
                    clearTimeout(timeoutId);
                  }}
                  onError={event => {
                    event.target.src = imagenLogo;
                    event.target.onerror = null;
                    setTimeout(() => {
                      const sources = event.target.parentNode.querySelectorAll('source');
                      sources.forEach(source => {
                        source.remove();
                      });
                    }, 1000); // remove the source elements after 1 seconds
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
        <div>
          {/* TITULO */}
          <h2 className="my-4 text-4xl font-bold card-title">{shortName}</h2>
          <p>{fullName}</p>
          <div className="mb-4 space-x-2 card-actions">
            {/* TipoDeOrg */}
            {type.length > 0 &&
              type.map((tipo: string) => {
                if (tipo.length > 0) {
                  return <span key={tipo} className="badge badge-ghost">{tipo}</span>;
                } else {
                  return null;
                }
              })}
            {/* Tags */}
            {tags.length > 0 &&
              tags.map((tag: string) => {
                if (tag.length > 0) {
                  return <span key={tag} className="badge badge-ghost">{tag}</span>;
                } else {
                  return null;
                }
              })}
          </div>
          {/* DESCRIPCION CORTA */}
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default component;