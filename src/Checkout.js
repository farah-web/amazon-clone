import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <img src="./images/ad-img.jpg" alt="checkoutAd" className="checkout-ad" />
      <div className="checkout">
        <div className="checkout-left">
          <div>
            <h3 className="checkout-name">Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {
              basket.map((item) => {
                
                return (<CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
               )
               
              })
            }
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal />
        </div>

      </div>
    </>
  )
}

export default Checkout
