import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SessionalProducts = () => {
  return (
    <section className="">
      <h1 className="text-2xl sm:text-3xl font-bold px-6 pb-10 text-center">
        Seasonal Products
      </h1>

      <div className="bg-green-100 p-6 sm:p-8 md:px-14 pb-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Side */}
          <div className="bg-green-500 w-full md:w-1/2 h-40 sm:h-50 md:h-60  flex items-center justify-center px-6 py-10 text-white text-center rounded-md shadow">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
              Bestselling Seasonal Seeds <br className="hidden sm:block" /> Chosen by Farmers
            </h2>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 text-gray-800">
            <p className="text-justify leading-relaxed">
              Seasonal seed preferences in agriculture often vary by region, climate,
              and evolving farmer needs. However, certain crops remain consistently in
              high demand due to their adaptability and profitability.
              <br />
              <br />
              At <strong>Ganga Seeds</strong>, we cater to these seasonal trends by offering a curated
              selection of high-quality seeds, trusted by farmers across India.
              Some of our most widely purchased seasonal seed products include:
            </p>

            <Link to="/product">
              <div className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                <span className="text-base font-semibold">More Products</span>
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pt-8">
        <ProductCard />
      </div>
    </section>
  );
};

export default SessionalProducts;
