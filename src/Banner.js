import React from 'react'
import './Banner.css'
import Products from './Products'

function Banner() {
    return (
        <div className="Banner">
              <img 
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" 
              alt="Banner"
              className="Banner_image"
              />   
             <div className="home_row">
             <Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>    

                `<Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>  
                
              
</div>

                <div className="home_row">
                    
                <Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>  

                <Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>   


                
                <Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>   
                    
                    </div> 

                    <div className="home_row">
                    <Products         
              
              id={12345}
              tittle="Eloquent JavaScript: A Modern Introduction to Programming"
              price={55}
              ratting={5}
              image ="https://images-na.ssl-images-amazon.com/images/I/5138YhQZILL._SX376_BO1,204,203,200_.jpg"
          >
                </Products>  
                    </div>

              
                 
        </div>
    )
}

export default Banner
