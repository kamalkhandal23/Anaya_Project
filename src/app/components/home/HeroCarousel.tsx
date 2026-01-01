import Slider from "react-slick";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import hero1 from "../../images/img1.png";
import hero2 from "../../images/img2.png";
import hero3 from "../../images/img3.png";

export default function HeroCarousel() {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    swipe: true,
    touchMove: true,
  };

  return (
    <section
      className="
    relative
    min-h-[250px]
    sm:min-h-[400px]
    lg:h-[700px]
  "
    >
      <Slider {...heroSettings}>
        {/* Slide 1 */}
        <div className="relative min-h-[250px] sm:min-h-[400px] lg:h-[700px]">

          <div className="absolute inset-0">
            <ImageWithFallback
              src={hero1}
              alt="Luxury Fragrance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-6xl text-white mb-3"

                style={{ fontFamily: "Playfair Display, serif" }}
              >
                
              </motion.h2>

              <p className="text-white/85 text-sm sm:text-base mb-4">

                
              </p>

              <button className="bg-[#C9A96E] text-white px-8 py-3 hover:bg-[#B89858] transition">
                
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative min-h-[250px] sm:min-h-[400px] lg:h-[700px]">

          <div className="absolute inset-0">
            <ImageWithFallback
              src={hero2}
              alt="New Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-6xl text-white mb-3">
                
              </h2>
              <p className="text-white/85 text-sm sm:text-base mb-4">

               
              </p>
              <button className="bg-[#C9A96E] text-white px-8 py-3">
                
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative min-h-[250px] sm:min-h-[400px] lg:h-[700px]">

          <div className="absolute inset-0">
            <ImageWithFallback
              src={hero3}
              alt="Limited Edition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-4xl lg:text-4xl text-white mb-3">
               
              </h2>
              <p className="text-white/85 text-sm sm:text-base mb-4">

                
              </p>
              <button className="bg-[#C9A96E] text-white px-8 py-3">
                
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
