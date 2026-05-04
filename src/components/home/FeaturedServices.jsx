import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";

const SERVICES = [
  {
    title: "Starter Locs",
    caption: "Start your loc journey with clean, even parts and a strong foundation.",
    image: IMAGES.starterLocs,
  },
  {
    title: "Loc Retwist",
    caption: "Fresh parts, clean roots, and a polished finish for maintained locs.",
    image: IMAGES.locRetwist,
  },
  {
    title: "Loc Styling",
    caption: "Protective, creative styles for everyday wear, events, and photos.",
    image: IMAGES.locStyling,
  },
  {
    title: "Loc Extensions",
    caption: "Length, fullness, and a natural look with professional installation.",
    image: IMAGES.locExtensions,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <Link to="/services" key={service.title} className="group">
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-body text-sm font-semibold tracking-wider uppercase mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.caption}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}