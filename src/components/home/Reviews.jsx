import { Star } from "lucide-react";

const REVIEWS = [
  {
    text: "My retwist came out so clean and lasted way longer than usual.",
    name: "Aaliyah M.",
  },
  {
    text: "She took her time with every part and made sure my locs looked exactly how I wanted.",
    name: "Jasmine R.",
  },
  {
    text: "Professional, neat, and the style came out beautiful.",
    name: "Brianna T.",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">Client Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.name} className="border border-border p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-body text-xs font-semibold tracking-wider uppercase">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}