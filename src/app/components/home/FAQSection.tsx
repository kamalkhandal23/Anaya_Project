import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-20 lg:py-32 bg-[#FAFAF8]">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className="text-3xl lg:text-5xl text-gray-900 mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            q: "How long do your fragrances last?",
            a: "Our Eau de Parfum formulations typically last 6-8 hours on the skin, with base notes lingering even longer. Longevity depends on skin type, application method, and environmental factors.",
          },
          {
            q: "What is your return policy?",
            a: "We offer a 30-day return policy for unopened products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Opened products cannot be returned due to hygiene reasons.",
          },
          {
            q: "Do you offer free delivery?",
            a: "Yes, we provide complimentary delivery on all orders above ₹2,500. For orders below this amount, a nominal shipping fee of ₹150 applies. We deliver across India within 5-7 business days.",
          },
          {
            q: "How should I store my perfume?",
            a: "Store your perfume in a cool, dry place away from direct sunlight and heat. Keep the bottle tightly closed when not in use to prevent oxidation. Avoid storing in bathrooms where temperature and humidity fluctuate.",
          },
          {
            q: "Are your fragrances suitable for sensitive skin?",
            a: "Our fragrances are formulated with high-quality ingredients and undergo rigorous testing. However, if you have sensitive skin or known allergies, we recommend doing a patch test before full application or consulting with a dermatologist.",
          },
        ].map((faq, idx) => (
          <motion.div
            key={idx}
            className="border border-gray-200 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.05,
            }}
            viewport={{ once: true }}
          >
            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === idx + 1 ? null : idx + 1,
                )
              }
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx + 1 ? "rotate-180" : ""}`}
              />
            </button>
            {openFaq === idx + 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
              >
                {faq.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}