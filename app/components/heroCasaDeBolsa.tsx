export default function Preferente(){

    return(
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.banorte.com/cms/banorte/banca-transaccional/img/banner.jpg")`,
        height: "60vh", // Establecer altura al 30% de la altura de la pantalla
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Expertos en la banca, trabajando para usted.</h1>
          <p className="mb-5">
            Una banca con visión y experiencia suficiente acorde a su nivel de éxito
          </p>

        </div>
      </div>
    </div>

    )
}