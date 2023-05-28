export default function HeroTarjetas() {
    return (
      <div className="hero min-h-screen" style={{ 
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`, 
        height: "40vh", 
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        
        <div className="hero-content text-left text-neutral-content">
          <h1 className="mb-5 text-5xl font-bold">
            Tarjetas enfocadas especialmente para ti.
          </h1>
         
          <div className="hero-content text-neutral-content">
          <p className="mb-5 text-5x1 font-normal">
            En Banorte, no solo ofrecemos tarjetas de crédito, sino que también las diseñamos pensando en tus necesidades específicas.
            Contamos con una amplia variedad de tarjetas que se adaptan a tu estilo de vida y preferencias.
          </p>
         
          <p className="mb-5 text-5x1 font-normal">
            Ya sea que busques acumular puntos para viajes, obtener descuentos exclusivos o tener mayor flexibilidad en tus pagos, en Banorte encontrarás una tarjeta diseñada especialmente para ti.
            Nuestro objetivo es brindarte opciones personalizadas y beneficios que complementen tus metas financieras.
          </p>
        </div>
        </div>


        
      </div>
    );
  }
  