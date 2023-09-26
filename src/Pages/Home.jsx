import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "../Assets/images/metaverse.jpg";
import productsData from "../Assets/data/products";
import Productlist from "../components/ul/Productlist";
import axios from "axios";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 10;


  const fetchData = async () => {
    try {
      const headers = {
        Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
      };
      // const id = 100;
      const response = await axios.post(
        `http://caffa.smsoman.com/api/V1/products`,
        {
          currentpage: 1,
          pagesize: 100,
          sortorder: {
            field: "menu_name",
            direction: "desc",
          },
          searchstring: "",
          filter: {
            category: "",
          },
        },
        { headers }
      );
      if(response){

        return response.data.data.products
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
        setTimeout(() => {
          fetchData().then((data)=>{
            setAllProducts(data)
            console.log(data[0]);
            setVisibleProducts(data.slice(0, productsPerPage));
          });
        
        }, 1000); 
  }, []);



  const handleLoadMore = () => {
    const newIndex = startIndex + productsPerPage;
    setVisibleProducts((prevVisibleProducts) => [
      ...prevVisibleProducts,
      ...allProducts.slice(newIndex, newIndex + productsPerPage),
    ]);
    setStartIndex(newIndex);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-10">Lets Fly With us</h2>
              <p className="mb-32">The Heaven of your Pets</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                <Link to="/search">Search</Link>
              </button>
            </div>
            <div>
              <div>
                <img className="w-96" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14">
          <Productlist data={visibleProducts} />
        </div>
        {visibleProducts.length < allProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-14"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
