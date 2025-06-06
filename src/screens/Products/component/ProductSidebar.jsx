import { useState } from "react";

const ProductSidebar = ({
  categories,
  months,
  selectedCategory,
  setSelectedCategory,
  selectedMonth,
  setSelectedMonth,
}) => {
  const [showCategory, setShowCategory] = useState(true);
  const [showMonth, setShowMonth] = useState(true);

  return (
    <aside className="w-full md:w-60 py-4 px-6 md:border-r md:border-gray-300 bg-white">
      {/* Category Filter Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Filter by Category</h2>
          <button
            className="text-sm text-green-600 hover:underline cursor-pointer"
            onClick={() => setShowCategory(!showCategory)}
          >
            {showCategory ? "Hide" : "Show"}
          </button>
        </div>

        {showCategory && (
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelectedCategory("All")}
                className={`w-full text-left cursor-pointer ${
                  selectedCategory === "All" ? "font-bold text-green-600" : ""
                }`}
              >
                All Categories
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left cursor-pointer ${
                    selectedCategory === cat ? "font-bold text-green-600" : ""
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Month Filter Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Filter by Month</h2>
          <button
            className="text-sm text-green-600 hover:underline cursor-pointer"
            onClick={() => setShowMonth(!showMonth)}
          >
            {showMonth ? "Hide" : "Show"}
          </button>
        </div>

        {showMonth && (
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelectedMonth("All")}
                className={`w-full text-left cursor-pointer ${
                  selectedMonth === "All" ? "font-bold text-green-600" : ""
                }`}
              >
                All Months
              </button>
            </li>
            {months.map((month) => (
              <li key={month}>
                <button
                  onClick={() => setSelectedMonth(month)}
                  className={`w-full text-left cursor-pointer ${
                    selectedMonth === month ? "font-bold text-green-600" : ""
                  }`}
                >
                  {month}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ProductSidebar;
