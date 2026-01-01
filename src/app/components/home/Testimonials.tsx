import { motion } from "motion/react";
import { Star } from "lucide-react";    

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className="text-3xl lg:text-5xl text-gray-900 mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Priya Sharma",
            location: "Mumbai",
            text: "Absolutely stunning fragrances. The quality is exceptional and the scent lasts all day. Worth every penny.",
          },
          {
            name: "Arjun Mehta",
            location: "Delhi",
            text: "Finally found a premium brand that understands elegance. The packaging and fragrance both exceed expectations.",
          },
          {
            name: "Kavya Iyer",
            location: "Bangalore",
            text: "Essence has become my signature scent. I receive compliments everywhere I go. Highly recommend!",
          },
        ].map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="bg-[#FAFAF8] p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>
            <div>
              <p className="text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonial.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}