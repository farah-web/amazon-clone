import React from 'react'
import './Home.css'
import Product from './Product';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-container">
                    <img src="./images/home-banner.jpg" alt="banner" className="home-image" />

                    <div className="home-row">
                        <div className="home-rowProduct">
                            <Product
                                id={1}
                                title="Surgama Carvaan Earphones GT01 with Mic..."
                                price={12.43}
                                rating={5}
                                image="https://source.unsplash.com//250x150/?earphone"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={2}
                                title="Deli Lenevo 82C7A606TD V15 ADA Laptop..."
                                price={529.00}
                                rating={3}
                                image="https://source.unsplash.com/250x150/?laptop"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={3}
                                title="Mobile phone Fluid Black, 8GB RAM, 128GB Storage ..."
                                price={999.99}
                                rating={5}
                                image="https://source.unsplash.com//250x150/?phone"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={4}
                                title="Boy's/Men's Shirt Round Neck Short Sleeve T-Shirt ..."
                                price={29.76}
                                rating={5}
                                image="https://source.unsplash.com/250x150/?shirt"
                            />
                        </div>

                        <div className="home-rowProduct">
                            <Product
                                id={5}
                                title="Men's Loafer Quick-Dry Aqua Leather Shoes..."
                                price={43.60}
                                rating={3}
                                image="https://source.unsplash.com/250x150/?shoes"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={6}
                                title="Homefab Royal Polyester 7ft Door Curtain..."
                                price={24.99}
                                rating={5}
                                image="https://source.unsplash.com/250x150/?curtain"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={7}
                                title="Hitech 40-Inch LED Smart TV with Alexa..."
                                price={249.99}
                                rating={5}
                                image="https://source.unsplash.com/250x150/?tv"
                            />
                        </div>
                        <div className="home-rowProduct">
                            <Product
                                id={8}
                                title=" Women Eau de Toilette, 100ml and Body Lotion..."
                                price={15.56}
                                rating={5}
                                image="https://source.unsplash.com/250x150/?Toilette"
                            />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Home
