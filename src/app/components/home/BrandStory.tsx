import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function BrandStory() {
  return (
    <section id="story" className="py-20 lg:py-32">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1749191745108-c636380b2898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY3JhZnRzbWFuc2hpcHxlbnwxfHx8fDE3NjcwMTQ2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
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
            Crafted with Passion, Perfected with Time
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Essence, we believe that fragrance is more
            than just a scent—it's an expression of
            identity, a memory captured in a bottle, and a
            statement of refined taste.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our master perfumers blend traditional
            craftsmanship with modern innovation, sourcing
            only the finest ingredients to create fragrances
            that are timeless, elegant, and uniquely
            personal.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Each bottle is a testament to our commitment to
            excellence, designed for those who appreciate
            the art of perfumery and the luxury of
            authenticity.
          </p>
          <button className="border border-gray-900 text-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors">
            Discover Our Story
          </button>
        </motion.div>
      </div>
    </div>
  </section>
  );
}