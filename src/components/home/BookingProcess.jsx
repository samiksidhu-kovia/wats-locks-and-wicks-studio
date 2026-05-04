const STEPS = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Pick the loc service or style that fits what you need.",
  },
  {
    number: "02",
    title: "Select a Time",
    description: "Choose an available appointment slot that works for your schedule.",
  },
  {
    number: "03",
    title: "Come Ready",
    description: "Arrive with your hair prepared based on the service instructions.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/40">
      <style>{`
        @keyframes dash-wave {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }
        .wave-line {
          stroke-dasharray: 6 4;
          stroke-dashoffset: 0;
          animation: dash-wave 5s linear infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-center mb-14">How Booking Works</h2>

        {/* Steps + connecting wave — hidden on mobile, shown on md+ */}
        <div className="relative hidden md:block">
          {/* SVG wavy dashed line spanning between circles */}
          <div className="absolute top-5 left-0 right-0 flex items-center pointer-events-none px-[calc(100%/6)]">
            <svg
              className="w-full"
              height="28"
              viewBox="0 0 400 28"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,14 C33,4 67,24 100,14 C133,4 167,24 200,14 C233,4 267,24 300,14 C333,4 367,24 400,14"
                fill="none"
                stroke="#FF0A7A"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="wave-line"
              />
            </svg>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-5 shadow-md">
                  <span className="font-body text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="font-body text-sm font-semibold tracking-wider uppercase mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback — stacked with no wave */}
        <div className="flex flex-col gap-10 md:hidden">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-5">
                <span className="font-body text-sm font-bold">{step.number}</span>
              </div>
              <h3 className="font-body text-sm font-semibold tracking-wider uppercase mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}