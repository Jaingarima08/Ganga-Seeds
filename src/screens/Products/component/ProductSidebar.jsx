const ProductSidebar = ({
  categories,
  months,
  selectedCategory,
  setSelectedCategory,
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <aside className="w-full md:w-60 py-4 px-8 border-r border-gray-400">
      {/* Category Filter */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedCategory("All")}
              className={`w-full text-left ${
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
                className={`w-full text-left ${
                  selectedCategory === cat ? "font-bold text-green-600" : ""
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Month Filter */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Filter by Month</h2>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedMonth("All")}
              className={`w-full text-left ${
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
                className={`w-full text-left ${
                  selectedMonth === month ? "font-bold text-green-600" : ""
                }`}
              >
                {month}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductSidebar;
