import { useTranslation } from "react-i18next";

export default function HeroMountain( ) {
  let { t } = useTranslation("Inicio");
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp9554505.jpg")`,
        height: "60vh", // Establecer altura al 30% de la altura de la pantalla
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t("Diseñamos soluciones de vida solo para ti.")}</h1>
          <p className="mb-5">
          {t("El banco fuerte de México, ofrece una amplia gama de servicios financieros personalizados para satisfacer las necesidades de nuestros clientes, respaldado por más de 100 años de trayectoria, una sólida reputación y un compromiso con el desarrollo económico y social de México.")},

          </p>
          <button className="btn bg-banorteenlaces hover:bg-rojobanorte">{t("Ingresa a tu portal Banorte")}</button>

        </div>
      </div>
    </div>
  );
}
