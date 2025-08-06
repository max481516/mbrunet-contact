export default function ContactMe({
  onFormClick,
}: {
  onFormClick: () => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <p className="font-bold text-l leading-snug text-center">
        <span className="underline-offset-4 decoration-blue-400">
          Interested in hiring me? Please contact me in your preferred method or
          send me directly a message using this{" "}
          <span
            role="button"
            tabIndex={0}
            onClick={onFormClick}
            onKeyPress={(e) => {
              if (e.key === "Enter") onFormClick();
            }}
            className="text-purple-600 font-bold cursor-pointer"
          >
            form
          </span>
          .
        </span>
      </p>
    </div>
  );
}
