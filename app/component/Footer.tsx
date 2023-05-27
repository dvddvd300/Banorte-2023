export function Footer ({ t }: { t: any }) {
    return (
      <footer className="p-4 footer bg-base-300 text-base-content footer-center">
          {/* <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p> */}
          <a className="link" href="https://forms.gle/e4kCyFYwiMv2tDgm9">
            {t("Feedbacks")}
          </a>
          <span className="text-base-200">v 0.687 - icons by Icons8</span>
      </footer>
    );
}