import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none mb-8">
      <CardContent className="flex flex-col items-center pt-6 pb-8">
        {/* Profile photo (placeholder for now) */}
        <Avatar className="w-64 h-64 mb-4 rounded-xs">
          {/* Replace src with your CDN link later */}
          <AvatarImage src="" alt="Maximilien Brunet" />
          <AvatarFallback className="bg-gradient-to-tr from-indigo-400 to-purple-400 text-3xl rounded-xs">
            MB
          </AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold text-center">Maximilien Brunet</h2>
        <span className="text-muted-foreground text-sm text-center mb-2">
          Dubai, UAE
        </span>
        <p className="text-center text-base font-medium max-w-xs mt-2">
          Hi, I am a detail-oriented web developer based in Dubai, fluent in
          French, Russian, and English, and passionate about creating modern,
          fast, and user-friendly websites that help businesses grow.
        </p>
      </CardContent>
    </Card>
  );
}
