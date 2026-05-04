import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">Contact Wat's Locks & Wicks Studio</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-xl md:text-2xl mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs font-semibold tracking-wider uppercase mb-1">Phone</p>
                  <a href="tel:6892918399" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                    (689) 291-8399
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs font-semibold tracking-wider uppercase mb-1">Email</p>
                  <a href="mailto:sethtrawatson1@gmail.com" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">
                    sethtrawatson1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs font-semibold tracking-wider uppercase mb-1">Hours</p>
                  <div className="font-body text-sm text-muted-foreground space-y-1">
                    <p>Monday – Friday: By Appointment</p>
                    <p>Saturday: Limited Availability</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-xl md:text-2xl mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}