import { useState } from "react";
import { ChevronRight, Phone, Mail } from "lucide-react";
import Logo from "@/components/layout/Logo";

const SERVICES = [
  "Starter Locs",
  "Loc Retwist",
  "Loc Styling",
  "Loc Extensions",
  "Loc Detox",
  "Consultation",
];

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-secondary/40 py-12 md:py-16 px-6 text-center">
        <h1 className="font-heading text-3xl md:text-4xl mb-3">Book an Appointment</h1>
        <p className="font-body text-muted-foreground text-sm md:text-base">
          Choose a service below to request or book your appointment.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Service Selector */}
        <div className="mb-12">
          <h2 className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            SELECT A SERVICE
          </h2>
          <div className="border border-border divide-y divide-border">
            {SERVICES.map((service) => (
              <button
                key={service}
                onClick={() => setFormData({ ...formData, service })}
                className={`w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/40 transition-colors ${
                  formData.service === service ? "bg-secondary/60" : ""
                }`}
              >
                <span className="font-body text-sm font-medium">{service}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Help */}
        <div className="bg-secondary/40 p-6 mb-12">
          <p className="font-body text-sm font-semibold mb-3">Need help choosing a service?</p>
          <div className="space-y-2">
            <a href="tel:6892918399" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> (689) 291-8399
            </a>
            <a href="mailto:sethtrawatson1@gmail.com" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> sethtrawatson1@gmail.com
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <h2 className="font-heading text-xl md:text-2xl mb-2">Request an Appointment</h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Fill out the form and we'll confirm your appointment.
          </p>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Desired Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors bg-white"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs font-semibold tracking-wider uppercase mb-2">Current Loc Status / Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Describe your current loc length, texture, or any concerns..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 text-sm font-body font-semibold tracking-wider hover:bg-accent transition-colors"
            >
              REQUEST APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}