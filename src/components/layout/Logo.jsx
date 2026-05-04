import { Link } from "react-router-dom";

export default function Logo({ className = "", variant = "default" }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="https://media.base44.com/images/public/69f8ee151c0f213b8dd34ae3/04e6d9c69_watslogodemo1.png"
        alt="Wat's Locks & Wicks Studio"
        className={variant === "footer" ? "h-16 brightness-0 invert" : "h-14 md:h-16"}
      />
    </Link>
  );
}