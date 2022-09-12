import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAsync, selectProducts, addProductAsync ,updProductAsync,remove,delProductAsync} from './productSlice';
import { selectToken } from './loginSlice';

const Product = () => {
  const token = useSelector(selectToken)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    dispatch(getProductsAsync(token));
  }, []);


  return (
    <div>
      <hr/>
      description: <input onChange={(e) => setDesc(e.target.value)} />
      Price: <input onChange={(e) => setPrice(e.target.value)} />
      category: <input onChange={(e) => setCategory(e.target.value)} />
      quantity: <input onChange={(e) => setQuantity(e.target.value)} />

      <br/>
      products in the shop: {products.length}
      <br/>
      {products.length >0 &&  products.map( prod=> <div>{prod.id}{" "}{prod.desc}{" "} {prod.price}{" "}{prod.category}{" "}{prod.quantity} <button
            onClick={() =>
              dispatch(
                updProductAsync({
                  id: prod.id,
                  desc: desc,
                  price: price,
                  category: category,
                  quantity: quantity,
                  token
                })
              )
            }
          >
            Update
          </button>

          <button
        onClick={() =>
          dispatch(
            delProductAsync({
              id: prod.id,
              token

            })
          )
        }
      >
        delete product
      </button>
          </div>)}
      
      <button
        onClick={() =>
          dispatch(
            addProductAsync({
              desc: desc,
              price: price,
              category: category,
              quantity: quantity,
             // id:id,
              token
              
            })
            
          )
          
        }
        
      >
        Add
      </button>
      <br></br>
      <hr/>
      <button
        onClick={() =>
          dispatch(
            getProductsAsync(token)
          )
        }
      >
        get products
      </button>

      
      
    </div>
  )
}

export default Product

