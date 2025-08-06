export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    // Outer gradient only visible above mobile
    <div
      className="min-h-screen w-full flex items-center justify-center
      md:bg-gradient-to-tr md:from-indigo-200 md:via-purple-100 md:to-blue-200"
    >
      {/* Card: fills on mobile, "floats" on desktop */}
      <div
        className="
          w-full min-h-screen bg-[#C6C6C6] rounded-none shadow-none mx-0 px-4
          md:max-w-md md:min-h-0 md:rounded-2xl md:shadow-2xl md:mx-auto md:my-12
        "
      >
        {children}
      </div>
    </div>
  );
}
