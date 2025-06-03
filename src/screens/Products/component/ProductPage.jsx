import { useState } from "react";
import { allProducts } from "../productCategories"; 
import ProductGrid from "./ProductGrid";
import ProductSidebar from "./ProductSidebar";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  const categories = [...new Set(allProducts.map((p) => p.category))];
  const months = [...new Set(allProducts.map((p) => p.month).filter(Boolean))];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const monthMatch = selectedMonth === "All" || product.month === selectedMonth;
    return categoryMatch && monthMatch;
  });

  return (
    <div className="flex flex-col md:flex-row">
      <ProductSidebar
        categories={categories}
        months={months}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <main className="flex-1">
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
};

export default ProductPage;
