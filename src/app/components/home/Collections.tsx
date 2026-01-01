import Slider from "react-slick";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "For Men",
    link: "#men",
    img: "https://images.unsplash.com/photo-1759793500391-24a07d5a1269",
  },
  {
    title: "For Women",
    link: "#women",
    img: "https://images.unsplash.com/photo-1760113559708-84e7a148ec68",
  },
  {
    title: "Unisex",
    link: "#unisex",
    img: "https://images.unsplash.com/photo-1719175936556-dbd05e415913",
  },
  {
    title: "New Arrivals",
    link: "#new",
    img: "https://images.unsplash.com/photo-1749191745108-c636380b2898",
  },
];

export default function Collections() {
  const collectionSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  
    autoplay: true,          // ✅ auto slide ON
    autoplaySpeed: 1000,     // ✅ 1 second
    pauseOnHover: false,     // ✅ hover par bhi chalta rahe
    pauseOnFocus: false,
  
    arrows: false,
    swipe: true,
    draggable: true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  

  return (
    <section id="collections" className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl lg:text-5xl text-gray-900 mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore fragrances designed for every personality and occasion.
          </p>
        </div>

        {/* ================= DESKTOP (carousel) ================= */}
        <div className="hidden md:block">
          <Slider {...collectionSettings}>
            {collections.map((item, i) => (
              <DesktopCard key={i} {...item} />
            ))}
          </Slider>
        </div>

        {/* ================= MOBILE (grid) ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {collections.map((item, i) => (
            <MobileCard key={i} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/product"
            className="inline-block px-10 py-3 border border-gray-900 text-gray-900 text-xs tracking-widest uppercase hover:bg-gray-900 hover:text-white transition"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================= DESKTOP CARD ================= */
function DesktopCard({ title, img, link }: any) {
  return (
    <div className="px-4">
      <a href={link} className="group block">
        <div className="relative h-[420px] overflow-hidden mb-5">
          <ImageWithFallback
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />

          {/* 👇 IMPORTANT FIX */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition pointer-events-none" />
        </div>

        <h3
          className="text-xl text-center mb-1"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>
        <p className="text-center text-sm text-gray-500">
          Explore Collection
        </p>
      </a>
    </div>
  );
}


/* ================= MOBILE CARD (La Vie style) ================= */
function MobileCard({ title, img, link }: any) {
  return (
    <a href={link} className="block bg-white p-2">
      <div className="h-[150px] mb-2 overflow-hidden">
        <ImageWithFallback
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">Explore</p>
    </a>
  );
}
