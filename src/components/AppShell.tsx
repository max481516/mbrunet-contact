export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    // Outer gradient only visible above mobile
    <div
      className="min-h-screen w-full flex items-center justify-center
      sm:bg-gradient-to-tr sm:from-indigo-200 sm:via-purple-100 sm:to-blue-200"
    >
      {/* Card: fills on mobile, "floats" on desktop */}
      <div
        className="
          w-full min-h-screen bg-[#C6C6C6] rounded-none shadow-none mx-0 px-4 pt-2 
          sm:max-w-md sm:min-h-0 sm:rounded-sm sm:shadow-2xl sm:mx-auto sm:my-12
        "
      >
        {children}
      </div>
    </div>
  );
}
