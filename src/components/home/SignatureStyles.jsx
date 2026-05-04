import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";

const STYLES = [
  { title: "Pipe Cleaner Curls", image: IMAGES.pipeCleanerCurls },
  { title: "Two Strand Twists", image: IMAGES.twoStrandTwists },
  { title: "Barrel Twists", image: IMAGES.barrelTwists },
  { title: "Loc Petals", image: IMAGES.locPetals },
  { title: "Rope Twists", image: IMAGES.ropeTwists },
  { title: "High Bun", image: IMAGES.highBun },
  { title: "Loc Bob", image: IMAGES.locBob },
  { title: "Wedding Loc Style", image: IMAGES.weddingLocStyle, position: "object-top" },
];

export default function SignatureStyles() {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">Signature Loc Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STYLES.map((style) => (
            <Link to="/gallery" key={style.title} className="group">
              <div className="aspect-square overflow-hidden mb-3">
                <img
                  src={style.image}
                  alt={style.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${style.position || "object-center"}`}
                />
              </div>
              <h3 className="font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-center group-hover:text-accent transition-colors">
                {style.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
          >
            VIEW STYLE GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}