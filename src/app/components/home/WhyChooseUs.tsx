import { motion } from "motion/react";
import { Sparkles, Truck, Shield, Award } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className="text-3xl lg:text-5xl text-gray-900 mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          The Essence Difference
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {[
          {
            icon: Sparkles,
            title: "Premium Quality",
            desc: "Crafted with the finest ingredients from around the world.",
          },
          {
            icon: Truck,
            title: "Free Shipping",
            desc: "Complimentary delivery on all orders above ₹2,500.",
          },
          {
            icon: Shield,
            title: "Authentic Products",
            desc: "100% genuine fragrances with quality guarantee.",
          },
          {
            icon: Award,
            title: "Award Winning",
            desc: "Recognized globally for excellence in perfumery.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-[#FAFAF8] rounded-full">
                <item.icon className="w-8 h-8 text-[#C9A96E]" />
              </div>
            </div>
            <h3
              className="text-xl text-gray-900 mb-3"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}