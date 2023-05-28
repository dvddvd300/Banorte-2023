export default function EnlaceDigital(){

    return(
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/static/wallpaper.jpg")`,
        height: "60vh", // Establecer altura al 30% de la altura de la pantalla
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Enlace digital</h1>
          <p className="mb-5 text-justify">
          Enlace Digital es la cuenta que te permite realizar todas tus operaciones bancarias desde la palma de tu
          mano, a cualquier hora y en cualquier lugar a través de Banorte Móvil.
          Esta cuenta se adapta a tu estilo de vida actual, sin filas ni tiempos de espera, la puedes contratar desde
          cualquier dispositivo con acceso a internet. 

          </p>

        </div>
      </div>
    </div>

    )
}