import { motion } from "motion/react";
import { Sparkles, Shield, Star, Award } from "lucide-react";

export default function OccasionFragrances() {
  return (
    <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2
                      className="text-3xl lg:text-5xl text-gray-900 mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Fragrances for Every Occasion
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Find the perfect scent to match your mood and
                      moment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Daily Wear */}
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-[300px] overflow-hidden mb-4 bg-[#FAFAF8]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-lg">
                              <Sparkles className="w-8 h-8 text-[#C9A96E]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3
                          className="text-xl text-gray-900 mb-2"
                          style={{
                            fontFamily: "Playfair Display, serif",
                          }}
                        >
                          Daily Wear
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Fresh & Light
                        </p>
                      </div>
                    </motion.div>

                    {/* Office */}
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-[300px] overflow-hidden mb-4 bg-[#FAFAF8]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-lg">
                              <Shield className="w-8 h-8 text-[#C9A96E]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3
                          className="text-xl text-gray-900 mb-2"
                          style={{
                            fontFamily: "Playfair Display, serif",
                          }}
                        >
                          Office
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Professional & Refined
                        </p>
                      </div>
                    </motion.div>

                    {/* Date Night */}
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-[300px] overflow-hidden mb-4 bg-[#FAFAF8]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-lg">
                              <Star className="w-8 h-8 text-[#C9A96E]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3
                          className="text-xl text-gray-900 mb-2"
                          style={{
                            fontFamily: "Playfair Display, serif",
                          }}
                        >
                          Date Night
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Romantic & Alluring
                        </p>
                      </div>
                    </motion.div>

                    {/* Festive */}
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-[300px] overflow-hidden mb-4 bg-[#FAFAF8]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-lg">
                              <Award className="w-8 h-8 text-[#C9A96E]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3
                          className="text-xl text-gray-900 mb-2"
                          style={{
                            fontFamily: "Playfair Display, serif",
                          }}
                        >
                          Festive
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Bold & Celebratory
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

  );
}