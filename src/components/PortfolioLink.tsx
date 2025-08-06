export default function PortfolioLink() {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <p className="font-semibold text-l leading-snug text-center">
        If you want more information about me and my projects, please visit my
        main website clicking on this{" "}
        <a
          href="https://yourmainwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 text-[17px]"
        >
          link
        </a>
        .
      </p>
    </div>
  );
}
