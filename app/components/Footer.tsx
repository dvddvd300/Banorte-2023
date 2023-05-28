export function Footer({ t }: { t: any }) {
  return (


      <footer className="footer text-white p-10 bg-rojobanorte text-[color:white] shadow-sm col-span-1 xl:col-span-3
      w-full h-18 bg-repeat-x bg-[url(/static/patern.png)]  ">
      <div>
        <img src="../static/Banorte-Logo.png" className="h-25 w-60" alt="Banorte" />
        <div className="btn-group bg-transparent">
          <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/InstaBlanco.png" className="h-10 w-10" alt="Instagram" /></button>
          <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/FaceBookBlanco.png" className="h-10 w-10" alt="FaceBook" /></button>
          <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/YtBlanco.png" className="h-10 w-10" alt="Youtube" /></button>
          <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/TwBlanco.png" className="h-10 w-10" alt="Instagram" /></button>
        </div>
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