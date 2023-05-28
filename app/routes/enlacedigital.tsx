import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroEnlaceDigital from "~/components/heroenlacedigital";
import NavBarEnlaceDigital from "~/components/navbarenlacedigital";



export let loader: LoaderFunction = async ({ request }) => {
    return {};
  };
  
  export default function Index() {
    let { t } = useTranslation();
    const data = useLoaderData();
  
    return (
      <>
        <HeroEnlaceDigital/>
        <NavBarEnlaceDigital/>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.banorte.com/wps/wcm/connect/banorte/14ace45b-da64-43f6-8252-d17c614151bb/Banorte-Enlace-Digital-Dci2021-410X290.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M202ICC0K05780AILUO1DR2004-14ace45b-da64-43f6-8252-d17c614151bb-okthfnp" />
                <div>
                    <h1 className="text-5xl font-bold">Enlace Digital</h1>
                    <p className="py-6">
                        Con tu Cuenta Enlace Personal Banorte podrás disfrutar de todos estos beneficios para administrar y controlar tus operaciones bancarias, así como beneficios que te abrirán las puertas a los Beneficios digitales.
                    </p>
                    <ul className="list-disc pl-8 py-4">
                        <li><strong>¡LO NUEVO!</strong> Renovación o reposición de tu tarjeta práctica y sencilla. Si ésta llegó a su vencimiento o necesitas reponerla, ahora tienes una nueva opción para renovarla tan fácil como acudir a tu tienda de la esquina. Conoce más <a href="#">aquí</a>.</li>
                        <li>Puedes emitir tres cheques gratis al mes(1).</li>
                        <li>Membresía gratis(2) al usar Banorte Móvil y la tarjeta de débito en comercios (física o digital); también usando la tarjeta de débito 6 veces al mes en comercios o Internet.</li>
                        <li>Inversión Vista Cuenta Enlace Personal Banorte que genera rendimientos con tasas fijas de acuerdo al saldo promedio mensual.</li>
                        <li>Estado de Cuenta digital con envío directo a tu correo electrónico, y disponible a través de Banco en Línea.</li>
                        <li>Blindaje Banorte que protege tu tarjeta de débito contra fraude, robo, extravío o clonación, iniciando la protección desde las 72 horas anteriores a que realices el reporte a través de Banortel.</li>
                        <li>Promociones en miles de establecimientos a nivel nacional con la APP de Promociones y Descuentos Banorte.</li>
                        <li>Todas las consultas y retiros en sucursales y Cajeros Automáticos Banorte sin costo.</li>
                        <li>Disposición de efectivo sin costo con el servicio Paga y Retira Efectivo en miles de tiendas y restaurantes participantes.</li>
                        <li>Domicilia los cargos de tus servicios directamente a tu Cuenta Enlace Personal Banorte.</li>
                        <li>Tarjeta de Débito con la que podrás pagar en comercios. En caso de que hayas contratado tu cuenta desde Banorte Móvil, acude a cualquier 7-Eleven o Farmacia del Ahorro por tu Tarjeta Física y adquiérela por $34 pesos (IVA incluido).</li>
                        <li>Tarjeta Digital para compras seguras por Internet. Genérala en Banorte Móvil.</li>
                        <li>Protege tus cheques desde Banorte en línea o Banorte Móvil. Conoce más detalles <a href="#">aquí</a>.</li>
                    </ul>
                    <button className="btn btn-primary">¡Tramita tu tarjeta ahora!</button>
                </div>
            </div>
        </div>
    
    </>
    );
  }