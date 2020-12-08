import React , {useContext} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStateValue from './StateProvider'

function Header() {
   const [{basket}] = useStateValue();
   //console.log(basket)
   
    return (
        <div className="header">
           <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"  alt="AmazonLogo"/>

            </Link>
           <div className="header_searchbar">
               <input type="text" className="searchbox"/>
               <SearchIcon className="searchicon"></SearchIcon>


            <div className="header_text">
            

                
                <div className="header_link">
                           <span className="lineone">
                              Helo
                           </span>
                           <span className="linetwo">
                             <strong>& Sign in</strong>                  
                           </span> 
                           

                </div>   

                <div className="header_link">
                           <span className="lineone">
                              Returns
                           </span>
                           <span className="linetwo">
                            <strong>& orders</strong>               
                           </span> 


            </div>

            <div className="header_link">
                           <span className="lineone">
                              Your
                           </span>
                           <span className="linetwo">
                            <strong>Prime</strong>               
                           </span> 


            </div>
            <div className="header_cart">
                 <Link to ="/checkout">
                <ShoppingCartIcon className="cartIcon"></ShoppingCartIcon>
                </Link>
    <h4 className="CartHeading">Cart : {basket.length}</h4>
                 </div>   
</div>

             

               
               </div> 
            
        </div>
    )
}

export default Header
