import React from 'react';
import Section from './section';
import { useTranslation } from "react-i18next";

const people = [
  {
    name: 'Tarjetas de Crédito',
    role: 'Encuentra la mejor tarjeta de crédito para ti, conoce sus beneficios y comienza a disfrutar de sus ventajas.',
    imageUrl: '/static/tarjetas-banorte.png',
    linkUrl: '/tarjetascredito',
  },
  {
    name: 'Cuenta enlace digital',
    role: 'Conoce la nueva cuenta enlace digital, la cuenta que te permite realizar tus operaciones bancarias desde tu celular.',
    imageUrl: '/static/cuenta-digital-banorte.png',
    linkUrl: '/enlacedigital',
  },
  {
    name: 'Banca Preferente',
    role: 'Conoce la nueva cuenta enlace digital, la cuenta que te permite realizar tus operaciones bancarias desde tu celular.',
    imageUrl: '/static/banorte-web.jpg',
    linkUrl: '/preferente',
  },
];

export default function Example() {
  let { t } = useTranslation("Inicio");
  return ( 
    <Section delay={0.1}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("Servicios de vanguardia, justo lo que te mereces.")}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t("Los servicios de Banorte son excepcionales, brindamos soluciones financieras confiables y eficientes para cada tipo persona. Con una amplia gama de productos y oferta de servicios, su atención es insuperable.")}
              
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >

            <li key={t("Tarjetas de Crédito")}>
              <a href={"/tarjetascredito"}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={'/static/tarjetas-banorte.png'} alt={"Tarjeta de Credito"} />
                </a>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{t('Tarjetas de Crédito')}</h3>
              <p className="text-base leading-7 text-gray-600">{t('Encuentra la mejor tarjeta de crédito para ti, conoce sus beneficios y comienza a disfrutar de sus ventajas.')  }</p>
              </li>
            <li key={'Cuenta enlace digital'}>
              <a href={"/enlacedigital"}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={'/static/cuenta-digital-banorte.png'} alt={"Tarjeta de Credito"} />
              </a>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{t('Cuenta enlace digital')}</h3>
              <p className="text-base leading-7 text-gray-600">{t('Conoce la nueva cuenta enlace digital, la cuenta que te permite realizar tus operaciones bancarias desde tu celular.')}</p>
            </li>
            <li key={'Banca Preferente'}>
              <a href={"/preferente"}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={'/static/banorte-web.jpg'} alt={"Tarjeta de Credito"} />
              </a>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{t('Banca Preferente')}</h3>
              <p className="text-base leading-7 text-gray-600">{t('Conoce la nueva cuenta enlace digital, la cuenta que te permite realizar tus operaciones bancarias desde tu celular.')}</p>
            </li>



          </ul>
        </div>
      </div>
    </Section>
  );
}
