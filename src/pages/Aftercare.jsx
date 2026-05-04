import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const BEFORE = [
  "Arrive with hair detangled if needed",
  "Avoid heavy oils or product buildup before service",
  "Send inspiration photos if you have a specific style in mind",
  "Be honest about scalp concerns, thinning, or breakage",
];

const AFTER = [
  "Keep your scalp moisturized",
  "Wrap your hair at night",
  "Avoid over-manipulating fresh styles",
  "Book maintenance consistently",
];

export default function Aftercare() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">Loc Care & Appointment Prep</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Before */}
        <div className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl mb-6">Before Your Appointment</h2>
          <ul className="space-y-4">
            {BEFORE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent/30 mb-12" />

        {/* After */}
        <div className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl mb-6">After Your Appointment</h2>
          <ul className="space-y-4">
            {AFTER.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-secondary/40 p-8 text-center">
          <p className="font-body text-sm font-semibold mb-4">Questions before booking?</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
          >
            CONTACT THE STUDIO
          </Link>
        </div>
      </div>
    </div>
  );
}