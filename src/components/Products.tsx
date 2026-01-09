import { motion } from "framer-motion";

const products = [
  {
    name: "Cecilia",
    tagline: "AI Investigation",
    description: "Your AI-powered assistant that answers complex fact questions in seconds, not days.",
    stat: "87% time savings",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    featured: true,
    isNew: true,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "Ediscovery",
    tagline: "Cloud-Native Platform",
    description: "Process, analyze, and produce documents at unprecedented speed and scale.",
    stat: "32K docs/hour",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    featured: true,
    gradient: "from-[#01afa9]/20 to-cyan-500/20",
  },
  {
    name: "Auto Review",
    tagline: "Generative AI Review",
    description: "AI-powered document review that learns from your team's decisions.",
    stat: "98% accuracy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    isNew: true,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Case Builder",
    tagline: "Deposition Review",
    description: "Create deposition summaries and case timelines in minutes.",
    stat: "98% faster",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "Hold",
    tagline: "Legal Hold Management",
    description: "Automate preservation notices and track compliance effortlessly.",
    stat: "100% defensible",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    name: "Request",
    tagline: "Legal Request Management",
    description: "Streamline subpoenas, regulatory requests, and internal investigations.",
    stat: "75% faster",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Products = () => {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#01afa9]/10 text-[#01afa9] text-sm font-semibold mb-4">
            Product Suite
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything you need for{" "}
            <span className="gradient-text">modern litigation</span>
          </h2>
          <p className="text-lg text-slate-600">
            A complete platform of AI-powered tools designed to transform how legal teams
            handle complex matters.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className={`group relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8 transition-all hover:border-[#01afa9]/30 hover:shadow-xl ${
                product.featured ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
              variants={itemVariants}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon & Badge Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-white group-hover:text-[#01afa9] transition-colors">
                    {product.icon}
                  </div>
                  {product.isNew && (
                    <span className="px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">
                      New
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                <p className="text-sm text-[#01afa9] font-medium mb-3">{product.tagline}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

                {/* Stat */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold gradient-text">{product.stat}</span>
                  <motion.a
                    href={`#${product.name.toLowerCase()}`}
                    className="flex items-center gap-1 text-slate-500 hover:text-[#01afa9] text-sm font-medium transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#all-products"
            className="inline-flex items-center gap-2 text-[#01afa9] font-semibold hover:underline"
          >
            View all products and integrations
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
