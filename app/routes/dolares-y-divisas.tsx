import { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import HeroPreferente from "~/components/heroPreferente";
import HeroOpcionesPreferente from "~/components/heroOpcionesPreferente";
import { HeroOpcionesPreferenteDos, HeroOpcionesPreferenteTres } from "~/components/heroOpcionesPreferente";
import { useState, useEffect } from "react";


export let loader: LoaderFunction = async ({ request }) => {
  const dolares = await fetch('https://www.banorte.com/indicadores/dolar').then((res) => res.text());
  const divisas = await fetch('https://www.banorte.com/indicadores/divisas').then((res) => res.text());


  return {
    dolarResponse: dolares,
    divisasResponse: divisas,
  };
};

export default function Index() {
  let { t } = useTranslation();

  // Add other state variables for the remaining values

  let { dolarResponse, divisasResponse } = useLoaderData();

  // Extract the values of compra and venta
  const compraStartIndex1 = dolarResponse.indexOf('compra="') + 8;
  const compraEndIndex1 = dolarResponse.indexOf('"', compraStartIndex1);
  const compraValue1 = dolarResponse.substring(compraStartIndex1, compraEndIndex1);

  const ventaStartIndex1 = dolarResponse.indexOf('venta="') + 7;
  const ventaEndIndex1 = dolarResponse.indexOf('"', ventaStartIndex1);
  const ventaValue1 = dolarResponse.substring(ventaStartIndex1, ventaEndIndex1);

  console.log('compra:', compraValue1);
  console.log('venta:', ventaValue1);

  const divisaRegex = /divisa="([^"]+)"/g;
  const values = [];
  let match;
  while ((match = divisaRegex.exec(divisasResponse)) !== null) {
    const divisa = match[1];
    const compraStartIndex = divisasResponse.indexOf(`compra="`, match.index) + 8;
    const compraEndIndex = divisasResponse.indexOf(`"`, compraStartIndex);
    const compraValue = divisasResponse.substring(compraStartIndex, compraEndIndex);

    const ventaStartIndex = divisasResponse.indexOf(`venta="`, match.index) + 7;
    const ventaEndIndex = divisasResponse.indexOf(`"`, ventaStartIndex);
    const ventaValue = divisasResponse.substring(ventaStartIndex, ventaEndIndex);

    values.push({ divisa, compra: compraValue, venta: ventaValue });
  }

  // Print the extracted values for each divisa
  
  values.forEach(({ divisa, compra, venta }) => {
    console.log('divisa:', divisa);
    console.log('compra:', compra);
    console.log('venta:', venta);
    console.log('---');
  });
  console.log(values)


  return (
    <>
      <div id="indicadores_financieros_wrapper">
        <div className="header">
          <h1>Dólares y divisas</h1>
        </div>
        <div className="content">
          <table cellPadding="0" cellSpacing="0" id="tablaDolar" className="defaultTable">
            <thead>
              <tr>
                <th>Dólares</th>
                <th>Compra</th>
                <th>Venta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VENTANILLA</td>
                <td id="dolarCompra">{compraValue1}</td>
                <td id="dolarVenta">{ventaValue1}</td>
              </tr>
            </tbody>
          </table>
          <table cellPadding="0" cellSpacing="0" id="tablaDivisas" className="defaultTable">
            <thead>
              <tr>
                <th>Divisas</th>
                <th>Compra</th>
                <th>Venta</th>
              </tr>
            </thead>
            <tbody>
              {values.map(({ divisa, compra, venta }) => (
              <tr>
                <td>{divisa}</td>
                <td id={divisa+'compra'}>{compra}</td>
                <td id={divisa+'venta'}>{venta}</td>
              </tr>
              ))}
              {/* Add similar rows for other values */}
            </tbody>
          </table>
        </div>
        <div className="notaCotizaciones">
          <p>Nota: Las cotizaciones se muestran con al menos 30 minutos de retraso. Los precios pueden variar de acuerdo a la zona geográfica.</p>
        </div>
      </div>


    </>
  );
}