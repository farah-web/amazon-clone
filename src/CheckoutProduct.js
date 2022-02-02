import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: id
        })
    }
    return (
        <>
            <div className="checkoutProduct">
                <div className="checkoutProduct-imageContainer">
                    <img src={image} alt="prductimage" className="checkoutProduct-image" />
                </div>
                <div className="checkoutProduct-info">
                    <p className="checkoutProduct-title">{title}</p>
                    <p className="checkoutProduct-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct-rating">
                        {Array(rating).fill().map((_, i) => {
                            return <p>⭐</p>
                        })}
                    </div>
                    {!hideButton && (<button onClick={() => removeFromBasket()}>Remove from Basket</button>)}

                </div>
            </div>
        </>
    )
}

export default CheckoutProduct
