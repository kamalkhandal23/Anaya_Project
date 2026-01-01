import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function BrandPhilosophy() {
  return (
    <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h2
                        className="text-3xl lg:text-5xl text-gray-900 mb-6"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        The Art of Perfumery
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Every fragrance tells a story. At Essence, we
                        don't just create perfumes—we craft emotions,
                        memories, and moments that linger long after the
                        first spritz.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Our philosophy is simple: luxury should be
                        timeless, quality should be uncompromising, and
                        fragrance should be an extension of your true
                        self.
                      </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1664470740442-f5de3e512e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbm90ZXMlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NjcwODY0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Philosophy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
  );
}
