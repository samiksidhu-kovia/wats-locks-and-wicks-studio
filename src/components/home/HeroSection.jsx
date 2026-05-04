import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Styled locs by Wat's Locks & Wicks Studio"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 text-center">
        <h1 className="font-heading text-white text-2xl md:text-4xl lg:text-5xl font-medium mb-3 leading-tight">
          Loc Care, Styling & Retwist Services
        </h1>
        <p className="font-body text-white/90 text-sm md:text-base mb-8 max-w-md">
          Clean parts. Healthy locs. Styles that last.
        </p>
        <Link
          to="/book"
          className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
        >
          BOOK APPOINTMENT
        </Link>
      </div>
    </section>
  );
}