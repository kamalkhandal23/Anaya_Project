import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Play } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section
                id="video"
                className="py-20 lg:py-32 bg-[#FAFAF8]"
              >
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2
                      className="text-3xl lg:text-5xl text-gray-900 mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Experience the Fragrance
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Immerse yourself in the art of perfumery through
                      our visual journey.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Video */}
                    <motion.div
                      className="relative h-[400px] lg:h-[500px] overflow-hidden bg-gray-900 cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1727799680087-ab413f070912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NzA4Njg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Video"
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-[#C9A96E] group-hover:scale-110 transition-all duration-300">
                          <Play className="w-10 h-10 text-gray-900 group-hover:text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3
                          className="text-2xl text-white mb-2"
                          style={{
                            fontFamily: "Playfair Display, serif",
                          }}
                        >
                          The Making of Essence
                        </h3>
                        <p className="text-white/80 text-sm">
                          Discover how we craft each fragrance with
                          passion and precision.
                        </p>
                      </div>
                    </motion.div>

                    {/* Secondary Videos */}
                    <div className="grid grid-cols-1 gap-8">
                      <motion.div
                        className="relative h-[240px] overflow-hidden bg-gray-900 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1664470740442-f5de3e512e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbm90ZXMlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NjcwODY0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Video"
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-[#C9A96E] group-hover:scale-110 transition-all duration-300">
                            <Play className="w-8 h-8 text-gray-900 group-hover:text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4
                            className="text-lg text-white"
                            style={{
                              fontFamily: "Playfair Display, serif",
                            }}
                          >
                            Ingredient Sourcing
                          </h4>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative h-[240px] overflow-hidden bg-gray-900 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1749191745108-c636380b2898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3NjcwMTQ2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Video"
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full group-hover:bg-[#C9A96E] group-hover:scale-110 transition-all duration-300">
                            <Play className="w-8 h-8 text-gray-900 group-hover:text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4
                            className="text-lg text-white"
                            style={{
                              fontFamily: "Playfair Display, serif",
                            }}
                          >
                            Craftsmanship
                          </h4>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
  );
}