import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import { Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">About Wat's Locks & Wicks Studio</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Brand Story */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
            Wat's Locks & Wicks Studio was created for clients who want neat, healthy, long-lasting loc care without feeling rushed. Every appointment is focused on detail, scalp care, clean parting, and a style that fits the client's look.
          </p>
        </div>

        {/* Stylist Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={IMAGES.stylistPortrait}
              alt="Sethtra Watson, Loc Stylist"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-2">Sethtra Watson</h2>
            <p className="font-body text-sm text-accent font-medium tracking-wider uppercase mb-6">
              Loc Stylist / Natural Hair Specialist
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              Specializing in loc care, maintenance, creative styling, and protective styles. Every client receives focused attention, clean results, and a comfortable experience from start to finish.
            </p>
            <div className="space-y-3 mb-8">
              <a href="mailto:sethtrawatson1@gmail.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> sethtrawatson1@gmail.com
              </a>
              <a href="tel:6892918399" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> (689) 291-8399
              </a>
            </div>
            <Link
              to="/book"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}