import { Link } from "react-router-dom";

export default function ServiceCard({ title, price, description, image }) {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-body text-sm font-semibold tracking-wider uppercase mb-1 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="font-body text-xs text-accent font-medium mb-2">{price}</p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <Link
        to="/book"
        className="inline-block bg-primary text-primary-foreground px-6 py-2.5 text-xs font-body font-semibold tracking-wider hover:bg-accent transition-colors"
      >
        BOOK THIS SERVICE
      </Link>
    </div>
  );
}