import React from 'react';
import './Product.css';
// import { useStateValue } from './StateProvider';

function Product({id,title,rating,price,image}) {
    // const [{basket},dispatch]=useStateValue();
    // const addtoBasket=()=>{
    //     dispatch({
    //         type:'ADD_TO_BASKET',
    //         item:{
    //             id:id,
    //             title:title,
    //             image:image,
    //             price:price,
    //             rating:rating
    //         }
    //     })
    // }
  return (
    <div className='product'>
        <div className="product_info">
        <b>{title}</b>
        <p className='product_price' > <small>$</small> <strong>{price}</strong></p>
        <div className="product_rating">
            {
                Array(rating).fill().map((_)=>{
                    return(
                        <p>⭐</p>
                    )
                   
                })
            }
        </div>
        </div>
        <img src={image} alt=" is about product" className='product_image' srcset="" />
        <button
        //  onClick={addtoBasket}
         >add to basket</button>
        
      
    </div>
  )
}

export default Product
