import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SessionalProducts = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold px-6 py-4">Sessional Products</h1>
      <div className="bg-green-100 p-8 md:px-14 pb-16">
        <div className="flex flex-row">
          <h1 className="bg-green-500 w-full md:w-1/2 h-80 px-6 py-12 text-white text-3xl font-semibold">
            Bestselling Seasonal Seeds Chosen by Farmers
          </h1>
          <div className=" w-full md:w-1/2 pl-10">
            <p className=" leading-relaxed text-justify">
              Seasonal seed preferences in agriculture often vary by region,
              climate, and evolving farmer needs. However, certain crops remain
              consistently in high demand due to their adaptability and
              profitability. At Ganga Seeds, we cater to these seasonal trends
              by offering a curated selection of high-quality seeds, trusted by
              farmers across India. Some of our most widely purchased seasonal
              seed products include:
            </p>

            <Link to="/product">
              <div className="my-5 p-2 bg-green-500 text-white rounded-sm gap-1 w-42 text-center cursor-pointer flex justify-center items-center">
                <button className="cursor-pointer text-lg font-semibold">
                  More Products
                </button>
                <FontAwesomeIcon icon={faAnglesRight} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center px-6 pt-8">
        <ProductCard />
      </div>
    </div>
  );
};

export default SessionalProducts;
