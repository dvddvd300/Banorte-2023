export function StickyF({ t }: { t: any }) {
    return (
        <div className="sticky bottom-0 flex justify-center bg-transparent">
            <div className="btn-group bg-transparent">
                <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/InstagramLogo.png" className="h-10 w-10" alt="Instagram" /></button>
                <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/FaceBookLogo.png" className="h-10 w-10" alt="FaceBook" /></button>
                <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/YoutubeLogo.png" className="h-10 w-10" alt="Youtube" /></button>
                <button className="btn btn-xs border-none bg-rojobanorte"><img src="../static/TwitterLogo.png" className="h-10 w-10" alt="Instagram" /></button>
            </div>
        </div>
    );
}
