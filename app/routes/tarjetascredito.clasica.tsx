import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import Clasica from "~/components/heroOpcionesTarjetas";
import HeroTarjetas from "~/components/heroTarjetas";
import NavBarTarjetas from "~/components/navbarTarjetas";




export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>


      <HeroTarjetas/>
      <NavBarTarjetas/>
      <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://www.banorte.com/wps/wcm/connect/banorte/6b9520af-0c12-49ad-84c9-6c9ceab53f69/Banorte-TDC-Clasica-410x290.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M202ICC0K05780AILUO1DR2004-6b9520af-0c12-49ad-84c9-6c9ceab53f69-otIjOv3" className="max-w-sm rounded-lg shadow-2xl" />
        <div>

      <h1 className="text-5xl font-bold">Clasica</h1>
      <p className="py-6">La Tarjeta de Crédito Clásica de Banorte ofrece beneficios exclusivos, como la opción de pagar a 12 meses con una tasa de interés fija del 2.08% mensual. Durante los primeros 30 días, se pueden realizar compras a 6 meses sin intereses. La tarjeta brinda acceso a la banca digital para administrar el crédito y realizar consultas, descargas de estados de cuenta y aclaraciones. También incluye protección contra robo o extravío, así como cobertura para daño o robo de compras y reembolso de diferencia de precios. Otros beneficios incluyen servicios de domiciliación de pagos, tarjetas adicionales y descuentos en plataformas digitales. </p>
      <button className="btn btn-primary">¡Tramita tu tarjeta ahora!</button>
    </div>
  </div>
</div>

        
    </>
    );
  }