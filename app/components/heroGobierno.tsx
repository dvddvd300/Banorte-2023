export default function Gobierno() {
    return(
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/static/banorte-foto-reuters.jpeg")`,
        height: "60vh", // Establecer altura al 30% de la altura de la pantalla
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Te apoyamos para construir un mejor futuro.</h1>
          <p className="mb-5">
          Impulsamos tus proyectos para lograr éxito en tu negocio y en tu vida. 

          </p>

        </div>
      </div>
    </div>
    )
}