import React from 'react'
import './CheckoutProduct.css'
import useStateValue from './StateProvider'

function CheckoutProduct({id , tittle , image , price , ratting}) {
   
    const [{basket} , dispatch] = useStateValue()

    const RemoveFromBasket = () => {
    dispatch({
     type: "Remove From Basket",
    
    id: id,
    });
    
        };
    
    


    return (
        <div className="CheckoutProduct">
            <img src={image} className="checkoutProduct__image" alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__tittle">
                      {tittle}
                </p>
                <p className="checkoutProduct__price">
                  <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__ratting">

                    {
                        Array(ratting).fill().map(()=>(
                            <p> ⭐ </p>
                        )
                            
                        )
                    }
                 </div>

                 <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
