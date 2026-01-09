import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full bg-[#01afa9]/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#01afa9] to-[#009590] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  DISCO
                </span>
              </div>
            </motion.a>

            {/* Nav Links */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {["Products", "Solutions", "Resources", "Pricing"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white font-medium text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01afa9] transition-all group-hover:w-full" />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#login"
                className="hidden sm:block text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                Log in
              </a>
              <motion.a
                href="#demo"
                className="px-5 py-2.5 bg-[#01afa9] hover:bg-[#009590] text-white text-sm font-semibold rounded-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Demo
              </motion.a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container-custom pt-16 md:pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01afa9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01afa9]"></span>
            </span>
            <span className="text-sm text-slate-300">
              Introducing <span className="text-[#01afa9] font-semibold">Cecilia AI</span> — Your AI Investigation Assistant
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Legal technology for{" "}
            <span className="relative">
              <span className="gradient-text">complex matters</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M2 10C50 2 150 2 298 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#01afa9" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered ediscovery, document review, and case management that saves
            your team thousands of hours while delivering better outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-[#01afa9] hover:bg-[#009590] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#01afa9]/25"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(1, 175, 169, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Demo
            </motion.a>
            <motion.a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-slate-500 text-sm mb-6">Trusted by leading law firms and corporations</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["AmLaw 100", "Fortune 500", "SEC", "DOJ"].map((badge, i) => (
                <motion.span
                  key={badge}
                  className="text-slate-400 font-semibold text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Preview */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01afa9]/20 to-transparent blur-3xl -z-10" />

            {/* Mock Dashboard */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-lg bg-slate-700/50 text-slate-400 text-xs">
                    app.csdisco.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden md:block space-y-3">
                    {["Dashboard", "Documents", "Review", "Analytics", "Settings"].map((item, i) => (
                      <motion.div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-sm ${i === 0 ? "bg-[#01afa9]/20 text-[#01afa9]" : "text-slate-400"}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="col-span-12 md:col-span-10 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Documents", value: "2.4M", trend: "+12%" },
                        { label: "Reviewed", value: "1.8M", trend: "+8%" },
                        { label: "Time Saved", value: "87%", trend: "vs manual" },
                        { label: "Accuracy", value: "99.2%", trend: "+0.3%" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className="p-4 rounded-xl bg-slate-800/50 border border-white/5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                        >
                          <p className="text-slate-500 text-xs mb-1">{stat.label}</p>
                          <p className="text-white text-2xl font-bold">{stat.value}</p>
                          <p className="text-[#01afa9] text-xs mt-1">{stat.trend}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <motion.div
                      className="p-6 rounded-xl bg-slate-800/50 border border-white/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Review Progress</h3>
                        <span className="text-[#01afa9] text-sm">This Week</span>
                      </div>
                      <div className="flex items-end gap-2 h-32">
                        {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#01afa9] to-[#01afa9]/50 rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: 1.3 + i * 0.05 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
