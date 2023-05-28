import 'tailwindcss/tailwind.css';

export default function HeroOpcionesPreferente() {
    return (
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/static/imagen-preferente-1.jpg" className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <div className="text-center lg:text-right">
              <h1 className="text-5xl font-bold text-right">Siempre pensamos en ti, en tus proyectos y en tu futuro.</h1>
              <div className="text-5x1 py-6 text-justify">
                <p>
                  En Banorte Banca Preferente creamos un modelo de servicio que te permitirá disfrutar de una experiencia exclusiva con soluciones que se adaptan a tu estilo de vida. Mediante nuestros Asesores Personales Banorte, recibe asesoría en cuentas, inversiones, créditos y seguros, contribuyendo así al logro de todos tus proyectos financieros.
                </p>
                <p className="py-6 text-center">Además contarás con:</p>
              </div>
              <p className="py-6 text-center">
                - Servicios Especiales
                <h1>‎</h1>
                - Beneficios exclusivos por ser cliente preferente.
                <h1>‎</h1>
                - Atención prioritaria en nuestros diferentes canales de contacto.
                <h1>‎</h1>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }

  export function HeroOpcionesPreferenteDos() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/static/imagen-preferente-2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Productos Exclusivos</h1>
            <p className="py-6">
              <strong>Permítenos apoyarte a administrar tu patrimonio con nuestras cuentas e inversiones:</strong>
              <br />
              <br />
              - <span style={{ color: 'red', fontWeight: 'bold' }}>Cuenta Preferente con Tarjeta de Débito Platinum</span>
              <br />
              <br />
              <span className="ml-6">
                ● Sin cobro de membresía al mantener un saldo promedio integral de $500,000.
                <br />
                ● Blindaje Banorte que protege la Tarjeta de Débito hasta 72 horas antes de realizar el reporte.
                <br />
                ● Seguro por muerte accidental o pérdidas orgánicas desde $360,000 con oportunidad de incrementarlo a $500,000.
                <br />
                ● Servicio de asistencias gratis en el hogar, médica, legal y vial.
                <br />
                ● Múltiples beneficios y seguros*.
              </span>
              <br />
              <br />
              - <span style={{ color: 'red', fontWeight: 'bold' }}>Pagaré Altos Rendimientos</span>
              <br />
              <br />
              <span className="ml-6">
                ● Tasa referenciada a Cetes, con un mínimo de inversión de $250,000.
                <br />
                ● Plazos para adaptarse a tus necesidades: 28, 35, 60, 91, 182 y 366 días.
                <br />
                ● Cuenta con opción de reinversión automática.
              </span>
              <br />
              <br />
              - <span style={{ color: 'red', fontWeight: 'bold' }}>Pagaré Digital</span>
              <br />
              <br />
              <span className="ml-6">● Contrata desde Banorte Móvil y Banorte en Línea, con una atractiva tasa de rendimiento.</span>
              <br />
              <br />
              - <span style={{ color: 'red', fontWeight: 'bold' }}>Fondos de Inversión</span>
              <br />
              <br />
              <span className="ml-6">
                ● Fondos diseñados para clientes preferentes que buscan diversificar sus inversiones y obtener atractivos rendimientos.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  