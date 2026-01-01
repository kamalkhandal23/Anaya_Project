import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function LifestyleImage() {
  return (
    <section className="relative h-[400px] lg:h-[600px] overflow-hidden">
    <div className="absolute inset-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
        alt="Luxury Lifestyle"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    <div className="relative h-full flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl lg:text-4xl text-white text-center px-6 max-w-3xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        "Fragrance is the invisible accessory that makes you
        unforgettable."
      </motion.p>
    </div>
  </section>
  );
}