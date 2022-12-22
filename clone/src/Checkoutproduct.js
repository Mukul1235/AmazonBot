import React from 'react'
import "./Checkoutproduct.css"
import { useStateValue } from './StateProvider.';

function Checkoutproduct(id, image, title, price, rating) {
  const [{ basket }, dispatch] = useStateValue();

  const RemovefromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id
    })
  }
  return (
      <div className='Checkoutproduct'>
          <img className='Checkoutproduct__image' src={image} />
          <div className='Checkoutproduct__info'>
              <p className='Checkoutproduct__title'>{title}
              </p>
              <p className='Checkoutproduct__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='Checkoutproduct__rating'>
              {Array(rating)
                .fill().map(() => (
                  <p>🌟</p>
                ))}
              </div>
              <button onClick={RemovefromBasket}>Remove from Basket</button>
          </div>
    </div>
  )
}

export default Checkoutproduct
