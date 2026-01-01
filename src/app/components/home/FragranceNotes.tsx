import { motion } from "motion/react";

export default function FragranceNotes() {
  return (
    <section className="py-20 lg:py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2
                      className="text-3xl lg:text-5xl text-gray-900 mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Understanding Fragrance Notes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Every perfume is a symphony of carefully layered
                      scents, revealing itself over time.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Top Notes */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full border-2 border-[#C9A96E]">
                          <span
                            className="text-2xl"
                            style={{
                              fontFamily: "Playfair Display, serif",
                            }}
                          >
                            1
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-xl text-gray-900 mb-4"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Top Notes
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        The first impression. Light, fresh notes that
                        greet you immediately and last 5-15 minutes.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Citrus • Bergamot • Lavender
                      </p>
                    </motion.div>

                    {/* Heart Notes */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full border-2 border-[#C9A96E]">
                          <span
                            className="text-2xl"
                            style={{
                              fontFamily: "Playfair Display, serif",
                            }}
                          >
                            2
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-xl text-gray-900 mb-4"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Heart Notes
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        The essence. Full-bodied scents that emerge
                        after top notes fade, lasting 3-5 hours.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Rose • Jasmine • Spices
                      </p>
                    </motion.div>

                    {/* Base Notes */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full border-2 border-[#C9A96E]">
                          <span
                            className="text-2xl"
                            style={{
                              fontFamily: "Playfair Display, serif",
                            }}
                          >
                            3
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-xl text-gray-900 mb-4"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Base Notes
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        The foundation. Deep, rich notes that linger and
                        give the perfume its lasting character.
                      </p>
                      <p className="text-gray-500 text-sm">
                        Sandalwood • Musk • Amber
                      </p>
                    </motion.div>
                  </div>
                </div>
              </section>
  );
}
