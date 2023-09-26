import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Productlist = ({data}) => {
  return (
    <>
    {
      data?.map((item,index)=>(
        <ProductCard item={item} key={index}/>
      ))
    }
    </>
  );
}

export default Productlist;
