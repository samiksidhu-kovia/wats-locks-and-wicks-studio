import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "BOOK APPOINTMENT", path: "/book" },
  { label: "LOC STYLE GALLERY", path: "/gallery" },
  { label: "SERVICES", path: "/services" },
  { label: "AFTERCARE", path: "/aftercare" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      {/* Top utility bar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <span className="font-body text-xs tracking-widest text-muted-foreground font-medium">
          ORLANDO / DMV LOC STUDIO
        </span>
        <Logo />
        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="bg-primary text-primary-foreground px-5 py-2 text-xs font-body font-semibold tracking-wider hover:bg-accent transition-colors"
          >
            BOOK APPOINTMENT
          </Link>
          <button className="text-foreground hover:text-accent transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-foreground hover:text-accent transition-colors" aria-label="Account">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-body text-xs font-semibold tracking-wider text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[2px] bg-accent" />
      </nav>

      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border">
        <button onClick={() => setMobileOpen(true)} className="p-1" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
        <Logo />
        <Link
          to="/book"
          className="bg-primary text-primary-foreground px-3 py-1.5 text-[10px] font-body font-semibold tracking-wider hover:bg-accent transition-colors"
        >
          BOOK
        </Link>
      </div>
      <div className="lg:hidden h-[2px] bg-accent" />

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}