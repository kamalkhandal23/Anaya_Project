import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Product = {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
};

const products: Product[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `Essence No. ${i + 1}`,
  type: "Eau de Parfum",
  price: `₹${3999 + i * 120}`,
  image: `https://source.unsplash.com/600x800/?luxury,perfume,${i}`,
}));

export default function AllProducts() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1
            className="text-4xl lg:text-6xl text-gray-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            All Fragrances
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of signature luxury perfumes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative h-[380px] overflow-hidden mb-4 bg-white">
                <ImageWithFallback
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3
                className="text-lg text-gray-900 mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{p.type}</p>
              <p className="text-gray-900">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
