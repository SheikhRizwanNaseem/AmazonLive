import React , {useContext} from 'react'
import './Products.css'

import useStateValue from './StateProvider'

function Products({id , tittle , price , ratting , image}) {

const [{basket} , dispatch] = useStateValue()

const addToCart = () => {
dispatch({
 type: "Add to  Basket",

 item: {
id: id,
tittle: tittle,
price: price,
ratting: ratting,
image: image

 },
});

    };


    return (
        <div className="Product">
           
            <div className="productDiscription">
    <p>{tittle}</p>
            </div>
            <div className="productprice">
                <small>$</small>
    <strong>{price}</strong>
            </div>

            <div className="productratting">

        {
            Array(ratting).fill().map(()=>(
                <p> ⭐ </p>
            )
                
            )
        }
            </div>

            <img src={image} alt=""/>
            <button onClick={addToCart}>Add to basket</button>
            
        </div>
    )
}

export default Products
