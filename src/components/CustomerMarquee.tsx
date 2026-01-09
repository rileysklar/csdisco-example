import { motion } from "framer-motion";

const customers = [
  {
    name: "Morrison & Foerster",
    type: "AmLaw 50",
    quote: "Reduced review time by 65%",
    logo: "MoFo",
  },
  {
    name: "Kirkland & Ellis",
    type: "AmLaw 10",
    quote: "2M docs processed in 48 hours",
    logo: "K&E",
  },
  {
    name: "Microsoft",
    type: "Fortune 10",
    quote: "Enterprise-wide deployment",
    logo: "MSFT",
  },
  {
    name: "Gibson Dunn",
    type: "AmLaw 25",
    quote: "90% cost reduction on review",
    logo: "GD",
  },
  {
    name: "Johnson & Johnson",
    type: "Fortune 50",
    quote: "Standardized global ediscovery",
    logo: "J&J",
  },
  {
    name: "Latham & Watkins",
    type: "AmLaw 5",
    quote: "AI-first litigation strategy",
    logo: "L&W",
  },
  {
    name: "Google",
    type: "Fortune 10",
    quote: "Trusted for complex IP matters",
    logo: "GOOG",
  },
  {
    name: "Sidley Austin",
    type: "AmLaw 20",
    quote: "Firm-wide DISCO adoption",
    logo: "SA",
  },
];

const customers2 = [
  {
    name: "Skadden Arps",
    type: "AmLaw 5",
    quote: "Transformed M&A due diligence",
    logo: "SKA",
  },
  {
    name: "Apple",
    type: "Fortune 5",
    quote: "Patent litigation at scale",
    logo: "AAPL",
  },
  {
    name: "Quinn Emanuel",
    type: "Litigation Leader",
    quote: "70% faster case prep",
    logo: "QE",
  },
  {
    name: "Pfizer",
    type: "Fortune 100",
    quote: "Regulatory compliance simplified",
    logo: "PFE",
  },
  {
    name: "Weil Gotshal",
    type: "AmLaw 15",
    quote: "Bankruptcy matters streamlined",
    logo: "WG",
  },
  {
    name: "Amazon",
    type: "Fortune 5",
    quote: "Global legal operations",
    logo: "AMZN",
  },
  {
    name: "Davis Polk",
    type: "AmLaw 10",
    quote: "SEC investigations accelerated",
    logo: "DP",
  },
  {
    name: "Meta",
    type: "Fortune 50",
    quote: "Privacy litigation support",
    logo: "META",
  },
];

interface CustomerCardProps {
  name: string;
  type: string;
  quote: string;
  logo: string;
}

const CustomerCard = ({ name, type, quote, logo }: CustomerCardProps) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#01afa9]/30 transition-all duration-300 group">
    <div className="flex items-start gap-4">
      {/* Logo placeholder */}
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center group-hover:from-[#01afa9]/10 group-hover:to-[#01afa9]/5 group-hover:border-[#01afa9]/20 transition-all">
        <span className="text-sm font-bold text-slate-600 group-hover:text-[#01afa9] transition-colors">
          {logo}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-slate-900 truncate">{name}</h3>
        <p className="text-sm text-[#01afa9] font-medium">{type}</p>
      </div>
    </div>

    {/* Quote */}
    <p className="mt-4 text-slate-600 text-sm leading-relaxed">"{quote}"</p>

    {/* Decorative element */}
    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
      <div className="flex -space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-slate-400">Verified Customer</span>
    </div>
  </div>
);

const CustomerMarquee = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container-custom mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#01afa9]/10 text-[#01afa9] text-sm font-semibold mb-4">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Powering the world's best legal teams
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From AmLaw 100 firms to Fortune 500 corporations, leading organizations
            trust DISCO for their most complex matters.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Scroll Left */}
        <div className="mb-6 group">
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {[...customers, ...customers].map((customer, index) => (
              <CustomerCard key={`row1-${index}`} {...customer} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="group">
          <div className="flex gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...customers2, ...customers2].map((customer, index) => (
              <CustomerCard key={`row2-${index}`} {...customer} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        className="container-custom mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { value: "500+", label: "Law Firms" },
            { value: "200+", label: "Corporations" },
            { value: "50M+", label: "Matters Handled" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CustomerMarquee;
