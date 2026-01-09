import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL || "";

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
              <img
                src={`${baseUrl}/products/disco.svg`}
                alt="DISCO"
                className="h-6 md:h-6 brightness-0 invert"
              />
            </motion.a>

            {/* Nav Links */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {["Products", "Solutions", "Resources", "Pricing"].map(
                (item, i) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white font-medium text-sm transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01afa9] transition-all group-hover:w-full" />
                  </a>
                )
              )}
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
              The #1 cloud-native ediscovery platform — now with{" "}
              <span className="text-[#01afa9] font-semibold">Cecilia AI</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One{" "}
            <span className="relative inline-block">
              <span className="gradient-text">platform</span>
              <motion.svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 120 12"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M2 10C20 2 100 2 118 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#01afa9" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>{" "}
            for all your ediscovery
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Process, review, analyze, and produce at scale. DISCO combines
            powerful search, AI-assisted review, and intuitive workflows in one
            unified platform.
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
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(1, 175, 169, 0.4)",
              }}
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
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
            <p className="text-slate-500 text-sm mb-6">
              Trusted by leading law firms and corporations
            </p>
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
          <div className="relative mx-auto max-w-6xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01afa9]/20 to-transparent blur-3xl -z-10" />

            {/* Mock DISCO Platform */}
            <div className="relative rounded-2xl border border-white/10 bg-[#1e293b] backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* App Header Bar */}
              <div className="flex items-center gap-3 px-3 py-2 bg-[#0f172a] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#01afa9] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">D</span>
                  </div>
                  <span className="text-white text-sm font-semibold hidden sm:block">
                    DISCO Ediscovery
                  </span>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800 text-slate-400 text-xs w-48 md:w-64">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span>Search documents</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-300 text-xs">JD</span>
                  </div>
                </div>
              </div>

              {/* Main Layout */}
              <div className="flex h-[420px] md:h-[480px]">
                {/* Left Sidebar - Filters */}
                <div className="w-36 md:w-44 bg-[#0f172a] border-r border-white/10 hidden md:block overflow-y-auto">
                  <div className="p-2">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 text-xs">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                      <span>Filters</span>
                    </div>
                    {[
                      { icon: "tag", label: "Tags" },
                      { icon: "edit", label: "Redactions" },
                      { icon: "message", label: "Annotations" },
                      { icon: "file", label: "Notes" },
                      { icon: "folder", label: "Folders" },
                      { icon: "search", label: "Saved Searches" },
                      { icon: "list", label: "Search Hits" },
                      { icon: "bar", label: "Topics" },
                      { icon: "users", label: "Custodians" },
                      { icon: "doc", label: "Doc Types" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-2 px-2 py-1.5 text-slate-500 text-xs hover:bg-slate-800/50 rounded cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.8 + i * 0.03 }}
                      >
                        <div className="w-3 h-3 rounded bg-slate-700" />
                        <span>{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  {/* Document Count Header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-white font-semibold text-sm">
                        Documents
                      </span>
                      <span className="text-[#01afa9] font-bold text-sm">
                        447,775
                      </span>
                    </div>
                    <div className="text-slate-500 text-xs hidden sm:block">
                      January 1, 1998 to January 1, 2021
                    </div>
                  </div>

                  {/* Charts Area */}
                  <div className="flex-1 p-4 overflow-y-auto">
                    {/* Date Histogram */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-xs font-medium">
                          Dates
                        </span>
                        <span className="text-slate-500 text-xs">250k</span>
                      </div>
                      <div className="flex items-end gap-[2px] h-24 md:h-32">
                        {[
                          15, 25, 35, 45, 55, 70, 85, 95, 100, 90, 75, 60, 50,
                          40, 35, 30, 25, 20, 18, 15, 12, 10, 8,
                        ].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-[#f59e0b] rounded-t-sm min-w-[4px]"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.4,
                              delay: 1.1 + i * 0.02,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1 text-[10px] text-slate-600">
                        <span>98</span>
                        <span>02</span>
                        <span>06</span>
                        <span>10</span>
                        <span>14</span>
                        <span>18</span>
                        <span>21</span>
                      </div>
                    </motion.div>

                    {/* Topics Section */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-xs font-medium">
                          Topics
                        </span>
                        <svg
                          className="w-3 h-3 text-slate-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          {
                            label: "Information, Data, Web, Process, Mail",
                            value: 85,
                            color: "#01afa9",
                          },
                          {
                            label: "Time, Deal, Customers, Prices, Agreement",
                            value: 72,
                            color: "#01afa9",
                          },
                          {
                            label: "Energy, Management, Gas, Market, Trading",
                            value: 68,
                            color: "#01afa9",
                          },
                          {
                            label: "Time, Day, Meeting, Conference, Trading",
                            value: 45,
                            color: "#01afa9",
                          },
                          {
                            label: "Company, Business, Price, Market, Energy",
                            value: 38,
                            color: "#01afa9",
                          },
                        ].map((topic, i) => (
                          <motion.div
                            key={topic.label}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.4 + i * 0.05,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: topic.color }}
                            />
                            <span className="text-slate-400 text-[10px] truncate flex-1 max-w-[180px]">
                              {topic.label}
                            </span>
                            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden max-w-[100px]">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: topic.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${topic.value}%` }}
                                transition={{
                                  duration: 0.5,
                                  delay: 1.5 + i * 0.05,
                                }}
                              />
                            </div>
                            <span className="text-slate-500 text-[10px] w-8 text-right">
                              {topic.value}%
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Bottom Row - Custodians & Doc Types */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                      >
                        <span className="text-slate-400 text-xs font-medium">
                          Custodians
                        </span>
                        <div className="mt-2 space-y-1">
                          {[
                            "Sara Shackleton",
                            "John Arnold",
                            "Mike Carson",
                          ].map((name, i) => (
                            <div
                              key={name}
                              className="flex items-center gap-2 text-[10px]"
                            >
                              <span className="text-slate-500 truncate">
                                {name}
                              </span>
                              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#01afa9] rounded-full"
                                  style={{ width: `${80 - i * 20}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                      >
                        <span className="text-slate-400 text-xs font-medium">
                          Doc Types
                        </span>
                        <div className="mt-2 space-y-1">
                          {["Email", "PDF", "Word Doc"].map((type, i) => (
                            <div
                              key={type}
                              className="flex items-center gap-2 text-[10px]"
                            >
                              <span className="text-slate-500">{type}</span>
                              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-violet-500 rounded-full"
                                  style={{ width: `${90 - i * 25}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Cecilia AI */}
                <div className="w-56 md:w-72 bg-[#f8fafc] border-l border-slate-200 hidden lg:flex flex-col">
                  {/* Cecilia Header */}
                  <div className="px-3 py-2 border-b border-slate-200 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-800 font-semibold text-sm">
                      Cecilia
                    </span>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-3 overflow-y-auto space-y-3">
                    <motion.div
                      className="bg-white rounded-lg p-2.5 shadow-sm border border-slate-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.8 }}
                    >
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Hi! I'm{" "}
                        <span className="text-violet-600 font-medium">
                          Cecilia
                        </span>{" "}
                        — an AI designed to help you with document exploration
                        and analysis.
                      </p>
                      <p className="text-[#01afa9] text-[10px] mt-1.5 font-medium">
                        Learn more about Cecilia →
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-[#01afa9] rounded-lg p-2.5 ml-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2 }}
                    >
                      <p className="text-white text-xs">
                        What did Sara Shackleton do from day to day at Enron
                        Corp.?
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-lg p-2.5 shadow-sm border border-slate-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.2 }}
                    >
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Sara Shackleton was responsible for building a gas
                        trading business for Enron in Europe. She held various
                        positions including{" "}
                        <span className="text-slate-800 font-medium">
                          manager of corporate travel
                        </span>
                        ...
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400">
                          • Direct sources (3)
                        </p>
                        <p className="text-[10px] text-slate-400">
                          • Related excerpts (2)
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Input */}
                  <div className="p-2 border-t border-slate-200">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                      <input
                        type="text"
                        placeholder="Ask Cecilia..."
                        className="flex-1 text-xs text-slate-600 bg-transparent outline-none"
                        disabled
                      />
                      <svg
                        className="w-4 h-4 text-[#01afa9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
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
