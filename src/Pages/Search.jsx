import React, { useEffect, useState } from "react";
import products from "../Assets/data/products";
import Productlist from "../components/ul/Productlist";

const Search = () => {
  const [allProducts, setAllProducts] = useState(products);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    const searchedProducts = products.filter((item) =>(
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    );
    console.log(searchedProducts);
    setAllProducts(searchedProducts);
  };
  return (
    <section>
      <div
        className="px-[30px] py-4 max-w-[1170px]
      mx-auto flex flex-col lg:flex-row
      gap-4 lg:gap-x-3 relative lg:shadow-1 bg-white 
      lg:bg-transparent lg:backdrop-blur rounded-lg mb-12"
      >
        <div>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search Foods"
            className="p-2.5 w-full text-gray-500
          bg-white border
          rounded-md shadow-sm outline-none appearance-none
          focus:border-orange-400
          font-bold
          "
          />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14">
          {allProducts.length === 0 ? (
            <h1>No Product Found</h1>
          ) : (
            <Productlist data={allProducts} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
