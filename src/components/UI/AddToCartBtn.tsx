import React, { useContext } from 'react'
import { CartItemsContext } from '../../store/cartStore'
import type { Product } from '../../utils/productHttp';


type AddToCartBtnProps={
  item: Product
}

const AddToCartBtn = ({item}:AddToCartBtnProps) => {

  const {addToCart}= useContext(CartItemsContext);

  return (
    <button className='outline-0 border-0 cursor-pointer bg-[#ffbb54] p-8 rounded-[1rem]' onClick={()=>addToCart(item)}>
      <h3>Add to Cart</h3>
    </button>
  )
}

export default AddToCartBtn