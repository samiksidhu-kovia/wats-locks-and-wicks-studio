import { Link } from "react-router-dom";

export default function BookingCTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl mb-4">
          Ready for a fresh retwist or new loc style?
        </h2>
        <p className="font-body text-sm md:text-base text-white/80 mb-8 leading-relaxed">
          Book your appointment with Wat's Locks & Wicks Studio and leave with a clean, polished look.
        </p>
        <Link
          to="/book"
          className="inline-block bg-white text-foreground px-8 py-3.5 text-sm font-body font-semibold tracking-wider hover:bg-accent hover:text-white transition-colors"
        >
          BOOK APPOINTMENT
        </Link>
      </div>
    </section>
  );
}