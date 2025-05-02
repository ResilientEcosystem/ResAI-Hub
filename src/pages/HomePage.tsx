
import { Card, CardContent } from "../components/ui/card";
import { HeroSectionOne } from "../components/Hero";

const Home = () => {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-7xl bg-white dark:bg-neutral-900 shadow-lg">
        <CardContent className="p-0">
          <HeroSectionOne />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
