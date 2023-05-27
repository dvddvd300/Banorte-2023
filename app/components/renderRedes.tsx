// TYPESCRIPT DEFINE STRUCTURE OF PROPS
interface social {
  facebook: string;
  discord: string;
  instagram: string;
  linkedin: string;
  twitch: string;
  tiktok: string;
  website: string;
  twitter: string;
  youtube: string;
}
// href acording to social network name list of urls maped to social network name
const socialNetworks = new Map([
  ["facebook", "https://www.facebook.com/"],
  ["discord", "https://discord.gg/"],
  ["instagram", "https://www.instagram.com/"],
  ["linkedin", "https://www.linkedin.com/company/"],
  ["twitch", "https://www.twitch.tv/"],
  ["tiktok", "https://www.tiktok.com/@"],
  ["website", ""],
  ["twitter", "https://twitter.com/"],
  ["youtube", "https://www.youtube.com/channel/"],
]);
// href acording to social network name list of urls maped to social network name


export function renderRedes(url: string | undefined, alt: string | undefined, className: string | undefined, socialname: string | undefined) {
  // if (url === "null") {
  if (url === "null" || url === "") {
    return null;
  }
  else {
    return (
      <a
        href={`${socialNetworks.get(socialname)}${url}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <picture>
          <source media="(min-height:96px)" srcSet={`https://staticcontent.360exp.net/icons8-${socialname}-96.png`} type="image/png"  />
          <source srcSet={`https://staticcontent.360exp.net/icons8-${socialname}-48.png`} type="image/png" />
          <img src={`https://staticcontent.360exp.net/icons8-${socialname}-48.png`} alt={alt} loading="lazy" className="h-12 w-12"
            // onError={event => {
            //   event.target.src = ""
            //   event.onerror = null
            // }}
          />
        </picture>
      </a>
    );
  }
}

export function renderSocial(social : social | any |  undefined | null ) {
  if (social === undefined) {
    return null;
  }
  else {

    return (
      <div className="flex flex-none items-center h-10">
        {renderRedes(social?.facebook ?? "null", "Facebook", `social-icon`, `facebook`)}
        {renderRedes(social?.discord ?? "null", "Discord", `social-icon`, `discord`)}
        {renderRedes(social?.instagram ?? "null", "Instagram", `social-icon`, `instagram`)}
        {renderRedes(social?.linkedin ?? "null", "Linkedin", `social-icon`, `linkedin`)}
        {renderRedes(social?.twitch ?? "null", "Twitch", `social-icon`, `twitch`)}
        {renderRedes(social?.tiktok ?? "null", "Tiktok", `social-icon`, `tiktok`)}
        {renderRedes(social?.website ?? "null", "Website", `social-icon`, `web`)}
        {renderRedes(social?.twitter ?? "null", "Twitter", `social-icon`, `twitter`)}
        {renderRedes(social?.youtube ?? "null", "Youtube", `social-icon`, `youtube`)}
      </div>
    );
  }
}