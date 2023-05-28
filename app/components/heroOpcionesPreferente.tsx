import 'tailwindcss/tailwind.css';

export default function HeroOpcionesPreferente() {
    return (
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/static/imagen-preferente-1.jpg" className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <div className="text-center lg:text-right">
              <h1 className="text-5xl font-bold text-right">Siempre pensamos en ti, en tus proyectos y en tu futuro.</h1>
              <p className="py-6 text-justify">
                En Banorte Banca Preferente creamos un modelo de servicio que te permitirá disfrutar de una experiencia exclusiva con soluciones que se adaptan a tu estilo de vida.
                <br />
                <strong>Mediante nuestros Asesores Personales</strong> Banorte, recibe asesoría en cuentas, inversiones, créditos y seguros, contribuyendo así al logro de todos tus proyectos financieros.
                <br />
                <br />
                Además contarás con:
              </p>
            </div>
            <ul className="text-center" style={{ color: 'red' }}>
              <li className="font-bold">- Servicios especiales.</li>
              <li className="font-bold">- Beneficios exclusivos por ser cliente preferente.</li>
              <li className="font-bold">- Atención prioritaria en nuestros diferentes canales de contacto.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

  export function HeroOpcionesPreferenteDos() {
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/static/imagen-preferente-2.jpg" className="max-w-xs rounded-lg shadow-2xl" />
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
  

  export function HeroOpcionesPreferenteTres() {
    return (
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/static/imagen-preferente-3.jpg" className="max-w-lg rounded-lg shadow-2xl" />
          <div className="hero-content flex-col lg:flex-row">

           <div>
             <h1 className="text-5xl font-bold text-right">¿Cómo ser cliente preferente?</h1>
             <p className="py-6">Con Banorte tienes varias opciones para ser cliente Preferente y poder disfrutar de los beneficios exclusivos:</p>
             <ul className="text-red-500 font-bold text-center">
                 <ul className="text-red-500 font-bold text-justify">
               <li>- Mantener un saldo promedio superior a $ 500,000 pesos en chequera e inversiones(1).</li>
               <li>- Facturación mensual en tu tarjeta de crédito superior a $ 25,000 pesos.</li>
               <li>- Ingresos comprobables superiores a $ 100,000 pesos mensuales.</li>
               <li>- Contar con una tarjeta de crédito Platinum, Infinite United o United Universe.</li>
               <li>- Contar con un crédito hipotecario vigente mayor a $4,000,000.</li>
               <li>- Contar con un crédito de Auto vigente mayor a $500,000.</li>
               </ul>
            </ul>
            <h1>
                ‎
            </h1>
             <p className="text-sm"> (1) En el saldo promedio mínimo se consideran las cuentas de ahorro, cheques, inversiones a plazo, sociedades de inversión y mesa de dinero.</p>
           </div>
         </div>
        </div>
      </div>

    );
  }


  

  
  
  
  
  
  