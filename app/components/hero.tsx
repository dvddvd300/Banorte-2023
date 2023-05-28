import { Link } from "@remix-run/react";


export default function Hero( bgImage: string, title: string, description: string, btn ) {
    return (

        <div className="hero h-[60vh]" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
            {btn.length > 0 ? <Link to={btn[0].url} className="btn bg-rojobanorte">{btn[0].label}</Link> : null
            }
          </div>
        </div>
      </div>


    )
}