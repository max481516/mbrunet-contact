import { useTranslation } from "react-i18next";

export default function PortfolioLink() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-sm mx-auto mb-6">
      <p className="font-semibold text-l leading-snug ">
        {t("portfolioLink.paragraph")} {" "}
        <a
          href="https://mbrunet.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#485386] underline transition-transform duration-200 hover:scale-110 inline-block"
        >
          {t("portfolioLink.link")}
        </a>
        .
      </p>
    </div>
  );
}
