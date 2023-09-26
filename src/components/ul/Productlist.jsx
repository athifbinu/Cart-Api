import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Productlist = ({data}) => {
  return (
    <>
    {
      data?.map((item,index)=>(
        <Link to={`/details/${item.id}`}>
        <ProductCard item={item} key={index}/>
        </Link>
      ))
    }
    </>
  );
}

export default Productlist;
