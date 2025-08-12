import { useTranslation } from "react-i18next";

export default function ContactMe({
  onFormClick,
}: {
  onFormClick: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-sm mx-auto mb-10">
      <p className="font-semibold text-l leading-snug">
        <span>
        {t("contactMe.paragraph")} {" "}
          <span
            role="button"
            tabIndex={0}
            onClick={onFormClick}
            onKeyPress={(e) => {
              if (e.key === "Enter") onFormClick();
            }}
            className="text-[#485386]  underline transition-transform duration-200 hover:scale-110 inline-block cursor-pointer"
          >
            {t("contactMe.form")}
          </span>
          .
        </span>
      </p>
    </div>
  );
}
