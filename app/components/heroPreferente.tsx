import { useTranslation } from "react-i18next";

export default function Preferente(){
  let { t } = useTranslation("preferente");
    return(
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/static/banorte-fuerte-mexico.jpg")`,
        height: "60vh", // Establecer altura al 30% de la altura de la pantalla
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">{t("La banca que va más allá por tu preferencia.")}</h1>
          <p className="mb-5">
          {t("Experiencias de acuerdo a tu estilo de vida, conoce los beneficios de ser cliente preferente.")}

          </p>

        </div>
      </div>
    </div>

    )
}