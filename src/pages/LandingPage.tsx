import { Card, CardContent } from "../components/ui/card";
import { HeroSectionOne } from "../components/Hero";

const Landing = () => {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <HeroSectionOne />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Landing;