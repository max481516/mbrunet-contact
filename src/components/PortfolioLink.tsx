export default function PortfolioLink() {
  return (
    <div className="w-full max-w-sm mx-auto mb-6">
      <p className="font-semibold text-l leading-snug ">
        If you want more information about me and my projects, please visit my
        main website clicking on this{" "}
        <a
          href="https://mbrunet.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#485386] underline transition-transform duration-200 hover:scale-110 inline-block"
        >
          link
        </a>
        .
      </p>
    </div>
  );
}
