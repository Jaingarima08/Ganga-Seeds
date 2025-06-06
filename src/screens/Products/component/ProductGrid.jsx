const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-4">
      {products.map((product) => (
        <div key={product.id} className="p-3 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-50 object-cover mb-2"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold h-10">{product.title}</h3>
          <p className="text-sm text-gray-700 h-10">{product.description}</p>
          <p className="text-xs text-gray-500 mt-1 h-10">
            Category: {product.category}
          </p>
          {/* <p className="text-xs text-gray-500 mt-1 h-10">Month: {product.month}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
