import React from 'react';
import "./checkout.css";

import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider.';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
  return (
      <div className='Checkout'>
          <div className='Checkout__Left'>
              <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
          <div>
              <h2 className='checkout__title'>
                      Your shopping Basket</h2>
                  
              
                  {basket.map(item => {
                      return (
                      <Checkoutproduct
                              id={item.id}
                              image={item.image}
                          title={item.title}
                          price={item.price}
                          rating={item.rating}
                      />     
                      )
                  })}
              </div>
          </div>
          <div className='Checkout__Right'>
            
              <Subtotal />
          </div>


        
    </div>
  )
}

export default Checkout
