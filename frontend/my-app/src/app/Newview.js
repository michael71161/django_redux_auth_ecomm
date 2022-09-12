import React, { useEffect, useState } from "react";
import { getProductsAsync,selectProducts } from './productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './loginSlice';
import { selectToken } from './loginSlice';



const Newview = () => {
    const products = useSelector(selectProducts);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    useEffect(() => {
        dispatch(getProductsAsync(token));
      }, []);
  return (
    <div>
       <h1>
          products in the shop :  {products.length}
            
        </h1>
        {products.length >0 &&  products.map( prod=> <div>{prod.desc}{" "} {prod.price}{" "}{prod.category}{" "}{prod.quantity} </div>)}
        
    </div>
  )
}

export default Newview
