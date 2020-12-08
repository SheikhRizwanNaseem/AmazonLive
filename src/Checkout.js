import React from 'react'
import './Checkout.css'
import useStateValue from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import  './Checkout.css'
import SubTotal from './SubTotal'

function Checkout() {

    const[{basket}]=useStateValue();

    return (
        <div className="Checkout">

            <div className="chekout__left">
            <img src="https://www.vglobalinc.com/wp-content/uploads/2019/06/PPC_Ads_New.jpg"
            
            alt="" className="checkoutadd"/>

             {basket.length === 0 ? (

                <div>
                <h1  className="emptybasket__tittle">Your basket is empty</h1>
                </div>
             ): (

                <div>
                    <h1 className="basket__tittle">Your Shopping Basket</h1>
                   {basket.map(item => (
                       <CheckoutProduct
                       id={item.id}
                       tittle={item.tittle}
                       image={item.image}
                       price={item.price}
                       ratting={item.ratting}
                       
                       >

                       </CheckoutProduct>
                   ))}

                </div>
             ) }
             

                    

             </div>   
           {basket.length > 0 && (
               <div className="Checkout__right">
                   <SubTotal></SubTotal>
               </div>
           ) }

        </div>
    )
}

export default Checkout
