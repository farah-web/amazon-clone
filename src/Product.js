import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };
    return (
        <>
            <div className="product">
                <div className="product-info">
                    <p >{title}</p>
                    <div className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <div className="product-rating">
                        {
                            Array(rating).fill().map((_, i) => {
                                return (<p>⭐</p>)
                            })
                        }
                    </div>
                </div>
                <img src={image} className="product-image" alt="products" />
                <button onClick={()=>addToBasket()}>Add to Basket</button>
            </div>
        </>
    )
}

export default Product
