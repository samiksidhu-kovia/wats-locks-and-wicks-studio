import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + Contact */}
          <div>
            <Logo variant="footer" className="mb-6" />
            <h4 className="text-accent text-xs font-body font-semibold tracking-widest mb-4">CONTACT US</h4>
            <div className="space-y-2 text-sm text-white/80 font-body">
              <p className="font-medium text-white">Wat's Locks & Wicks Studio</p>
              <p>Customer Service</p>
              <p>(689) 291-8399</p>
              <p>sethtrawatson1@gmail.com</p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-accent text-xs font-body font-semibold tracking-widest mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li><span className="hover:text-accent transition-colors cursor-pointer">Booking Policy</span></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Cancellation Policy</span></li>
              <li><Link to="/aftercare" className="hover:text-accent transition-colors">Appointment Prep</Link></li>
              <li><Link to="/aftercare" className="hover:text-accent transition-colors">Aftercare</Link></li>
              <li><span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent text-xs font-body font-semibold tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/book" className="hover:text-accent transition-colors">Book Appointment</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Loc Style Gallery</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/aftercare" className="hover:text-accent transition-colors">Aftercare</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent text-xs font-body font-semibold tracking-widest mb-4">SOCIAL</h4>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-accent text-xs font-body font-semibold tracking-widest mb-4">SIGN UP FOR UPDATES</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 px-3 py-2 text-sm font-body text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-white px-4 py-2 text-xs font-body font-semibold tracking-wider hover:bg-accent/90 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50 font-body">&copy; 2025 Wat's Locks & Wicks Studio. All rights reserved.</p>
          <p className="text-xs text-white/50 font-body">Orlando / DMV Area</p>
        </div>
      </div>
    </footer>
  );
}