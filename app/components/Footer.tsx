export function Footer({ t }: { t: any }) {
  return (
    <footer className="footer text-white p-10 bg-rojobanorte text-[color:white]">
      <div>
        <img src="../static/Banorte-Logo.png" className="h-25 w-60" alt="Banorte" />
      </div>
      <div>
        <span className="footer-title  ">Servicios</span>
        <a className="link link-hover ">Tarjetas</a>
        <a className="link link-hover ">Prestamos</a>
        <a className="link link-hover ">Hipotecas</a>
        <a className="link link-hover ">Inversiones</a>
      </div>
      <div>
        <span className="footer-title">Banorte</span>
        <a className="link link-hover">Nuestra Historia</a>
        <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Trabajos</a>
        <a className="link link-hover">Servicio al cliente</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terminos y condiciones</a>
        <a className="link link-hover">Politica de Privacidad</a>
        <a className="link link-hover">Politica Cache</a>
      </div>
    </footer>

  );
}