import { useState } from "react";   

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(true);
  return (
    <section className="py-20 lg:py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2
                      className="text-3xl lg:text-5xl text-gray-900 mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Join Our Exclusive Circle
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Get 10% off on your first order and be the first
                      to know about new collections and special offers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-900 bg-white"
                      />
                      <button className="bg-[#C9A96E] text-white px-8 py-4 hover:bg-[#B89858] transition-colors whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </section>
  );
}