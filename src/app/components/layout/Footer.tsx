import React from "react";  

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white py-16">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                      <h3
                        className="text-2xl mb-6"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        ESSENCE
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Premium luxury fragrances crafted for the
                        discerning individual.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-6">Shop</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <a
                            href="#men"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            For Men
                          </a>
                        </li>
                        <li>
                          <a
                            href="#women"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            For Women
                          </a>
                        </li>
                        <li>
                          <a
                            href="#unisex"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Unisex
                          </a>
                        </li>
                        <li>
                          <a
                            href="#bestsellers"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Best Sellers
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-6">About</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <a
                            href="#story"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a
                            href="#craftsmanship"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Craftsmanship
                          </a>
                        </li>
                        <li>
                          <a
                            href="#sustainability"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Sustainability
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-6">Support</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <a
                            href="#shipping"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Shipping & Delivery
                          </a>
                        </li>
                        <li>
                          <a
                            href="#returns"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Returns & Exchanges
                          </a>
                        </li>
                        <li>
                          <a
                            href="#faq"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a
                            href="#care"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Fragrance Care
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>© 2024 Essence. All rights reserved.</p>
                  </div>
                </div>
              </footer>
  );
}