import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import { CheckCircle } from "lucide-react";

const FEATURES = [
  "Clean, detailed parting",
  "Healthy loc maintenance",
  "Styles for everyday and special events",
];

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={IMAGES.salonInterior}
              alt="Wat's Locks & Wicks Studio salon interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              About Wat's Locks & Wicks Studio
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Wat's Locks & Wicks Studio specializes in loc care, retwists, starter locs, styling, and protective loc services. The goal is simple: healthy locs, clean parts, and styles that make clients feel confident walking out the chair.
            </p>
            <ul className="space-y-3 mb-8">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-body text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
            >
              MEET THE STYLIST
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}