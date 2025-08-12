import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function ProfileCard() {
  return (
    <Card className="w-full max-w-sm mx-auto bg-gray-300 shadow-lg border-none mb-8 mt-3 py-10" >
      <CardContent className="flex flex-col items-center">
        {/* Profile photo (placeholder for now) */}
        <Avatar className="w-64 h-64 mb-4 rounded-xs">
          {/* Replace src with your CDN link later */}
          <AvatarImage src="" alt="Maximilien Brunet" />
          <AvatarFallback className="bg-[linear-gradient(90deg,#302C36,#666F98)] text-3xl rounded-xs">
            MB
          </AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold text-center">Maximilien Brunet</h2>
        <span className="text-muted-foreground text-sm text-center mb-2">
          Dubai, UAE
        </span>
        <p className="text-center text-base font-medium max-w-xs mt-2">
        Dubai-based, trilingual (French, Russian, English) developer driven by one goal: helping businesses grow. I craft sleek, high-performance apps using cutting-edge tools and agile workflows to turn ideas into results.
        </p>
      </CardContent>
    </Card>
  );
}
