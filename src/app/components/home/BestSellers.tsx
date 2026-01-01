import Slider from "react-slick";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Velvet Oud",
    price: "₹4,500",
    type: "Eau de Parfum",
    img: "https://images.unsplash.com/photo-1719175936556-dbd05e415913",
  },
  {
    name: "Midnight Rose",
    price: "₹4,200",
    type: "Eau de Parfum",
    img: "https://images.unsplash.com/photo-1759793500391-24a07d5a1269",
  },
  {
    name: "Amber Noir",
    price: "₹4,800",
    type: "Eau de Parfum",
    img: "https://images.unsplash.com/photo-1760113559708-84e7a148ec68",
  },
  {
    name: "Citrus Bloom",
    price: "₹3,800",
    type: "Eau de Toilette",
    img: "https://images.unsplash.com/photo-1689287428221-cd3d7b36b763",
  },
];

export default function BestSellers() {
  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <section id="bestsellers" className="py-16 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-5xl text-gray-900 mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Best Sellers
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Our most loved fragrances, chosen by connoisseurs worldwide.
          </p>
        </div>

        {/* ================= MOBILE LIST ================= */}
        <div className="space-y-6 lg:hidden">
          {products.map((p, i) => (
            <div key={i} className="flex gap-4 bg-[#FAFAF8] p-4">
              <div className="w-28 h-32 flex-shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="text-base text-gray-900"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500">{p.type}</p>
                  <p className="text-sm mt-1">{p.price}</p>
                </div>

                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-gray-900 text-white text-xs py-2">
                    Buy Now
                  </button>
                  <button className="flex-1 border border-gray-900 text-xs py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden lg:block">
          <Slider {...desktopSettings}>
            {products.map((p, i) => (
              <div key={i} className="px-4">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div
                    className="relative h-[380px] mb-6 bg-[#FAFAF8] overflow-hidden"
                    style={{ perspective: "1000px" }}
                  >
                    <motion.div
                      whileHover={{ rotateY: 5, rotateX: 5 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <h3
                      className="text-xl text-gray-900 mb-1"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{p.type}</p>
                    <p className="text-gray-900 mb-3">{p.price}</p>

                    <div className="flex justify-center gap-3">
                      <button className="px-4 py-2 bg-gray-900 text-white text-xs hover:bg-black transition">
                        Buy Now
                      </button>
                      <button className="px-4 py-2 border border-gray-900 text-xs hover:bg-gray-900 hover:text-white transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <Link
            to="/product"
            className="inline-block px-8 py-3 border border-gray-900 text-xs tracking-widest uppercase hover:bg-gray-900 hover:text-white transition"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
