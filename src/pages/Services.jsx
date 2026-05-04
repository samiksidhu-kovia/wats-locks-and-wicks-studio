import ServiceCard from "@/components/services/ServiceCard";
import { IMAGES } from "@/lib/images";

const SERVICES = [
  {
    title: "Starter Locs",
    price: "Starting at $125",
    description: "Begin your loc journey with clean parting and a strong foundation.",
    image: IMAGES.starterLocs,
  },
  {
    title: "Loc Retwist",
    price: "Starting at $85",
    description: "Refresh new growth, clean up parts, and maintain a polished look.",
    image: IMAGES.locRetwist,
  },
  {
    title: "Retwist + Style",
    price: "Starting at $115",
    description: "Combine maintenance with a finished style for a complete appointment.",
    image: IMAGES.retwistStyle,
  },
  {
    title: "Two Strand Twists",
    price: "Starting at $95",
    description: "A clean, versatile style that works well for many loc lengths.",
    image: IMAGES.twoStrandTwists,
  },
  {
    title: "Barrel Twists",
    price: "Starting at $100",
    description: "A bold protective style with a clean, structured finish.",
    image: IMAGES.barrelTwists,
  },
  {
    title: "Pipe Cleaner Curls",
    price: "Starting at $120",
    description: "Defined curls and volume for a polished loc look.",
    image: IMAGES.pipeCleanerCurls,
  },
  {
    title: "Loc Detox",
    price: "Starting at $75",
    description: "Deep cleansing service to help remove buildup and refresh the scalp.",
    image: IMAGES.locDetox,
  },
  {
    title: "Loc Extensions",
    price: "Consultation Required",
    description: "Add length or fullness with a professional loc extension consultation.",
    image: IMAGES.locExtensions,
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">Loc Services</h1>
        <p className="font-body text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
          Professional loc care, styling, maintenance, and installation services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}