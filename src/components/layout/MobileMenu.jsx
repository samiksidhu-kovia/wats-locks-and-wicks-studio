import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "BOOK APPOINTMENT", path: "/book" },
  { label: "LOC STYLE GALLERY", path: "/gallery" },
  { label: "SERVICES", path: "/services" },
  { label: "AFTERCARE", path: "/aftercare" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Logo />
          <button onClick={onClose} className="p-1 hover:text-accent transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 py-6 px-6 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="block py-3 text-sm font-body font-semibold tracking-wider text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 border-t border-border">
          <Link
            to="/book"
            onClick={onClose}
            className="block w-full bg-primary text-primary-foreground text-center py-3.5 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </div>
  );
}