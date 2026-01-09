import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL || "";

const products = [
  {
    name: "DISCO Platform",
    tagline: "Cloud-Native Ediscovery",
    description: "The complete cloud-native ediscovery platform. Process, analyze, review, and produce documents at unprecedented speed and scale with AI-powered workflows.",
    stat: "32K docs/hour",
    image: "products/platform.webp",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    size: "large",
    gradient: "from-[#01afa9]/20 to-cyan-500/20",
    accentColor: "#01afa9",
  },
  {
    name: "Auto Review",
    tagline: "Generative AI Review",
    description: "AI-powered document review that learns from your team's decisions.",
    stat: "98% accuracy",
    image: "products/autoreview.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    size: "medium",
    isNew: true,
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
  },
  {
    name: "Hold",
    tagline: "Legal Hold Management",
    description: "Automate preservation notices and track compliance effortlessly.",
    stat: "100% defensible",
    image: "products/hold.webp",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    size: "small",
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "#10b981",
  },
  {
    name: "Request",
    tagline: "Legal Request Management",
    description: "Streamline subpoenas, regulatory requests, and internal investigations.",
    stat: "75% faster",
    image: "products/request.webp",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    size: "small",
    gradient: "from-pink-500/20 to-rose-500/20",
    accentColor: "#ec4899",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => {
            const sizeClasses = {
              large: "md:col-span-2 lg:col-span-2 lg:row-span-2",
              medium: "md:col-span-2 lg:col-span-2 lg:row-span-1",
              small: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            };
            const imageHeights = {
              large: "h-48 lg:h-64",
              medium: "h-36",
              small: "h-28",
            };
            const gridClass = sizeClasses[product.size as keyof typeof sizeClasses] || sizeClasses.small;
            const imageHeight = imageHeights[product.size as keyof typeof imageHeights] || imageHeights.small;

            return (
              <motion.div
                key={product.name}
                className={`group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 ${gridClass}`}
                variants={itemVariants}
              >

                <div className="relative h-full flex flex-col">
                  {/* Image Area */}
                  <div
                    className={`relative bg-gradient-to-br ${product.gradient} ${imageHeight}`}
                  >
                    {/* Fallback icon when image not loaded */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div
                        className={`rounded-2xl flex items-center justify-center text-white/80 ${product.size === 'large' ? 'w-20 h-20' : 'w-14 h-14'}`}
                        style={{ backgroundColor: product.accentColor }}
                      >
                        {product.icon}
                      </div>
                    </div>
                    <img
                      src={`${baseUrl}/${product.image}`}
                      alt={`${product.name} product screenshot`}
                      className="absolute inset-0 w-full h-full object-cover object-top z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Gradient fade to blend into card */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />
                    {product.isNew && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-violet-700 text-xs font-semibold shadow-sm">
                        New
                      </span>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className={`flex flex-col flex-1 ${product.size === 'large' ? 'p-6' : 'p-4'}`}>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="p-2 rounded-lg text-white"
                        style={{ backgroundColor: product.accentColor }}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <h3 className={`font-bold text-slate-900 ${product.size === 'large' ? 'text-xl' : 'text-base'}`}>{product.name}</h3>
                        <p className="text-xs text-slate-500 font-medium">{product.tagline}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-slate-600 leading-relaxed flex-1 ${product.size === 'large' ? 'text-base' : 'text-sm'}`}>{product.description}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                      <span className={`font-bold gradient-text ${product.size === 'large' ? 'text-2xl' : 'text-lg'}`}>{product.stat}</span>
                      <motion.a
                        href={`#${product.name.toLowerCase().replace(' ', '-')}`}
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
                </div>
              </motion.div>
            );
          })}
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
