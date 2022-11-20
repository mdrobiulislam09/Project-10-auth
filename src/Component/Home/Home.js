import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'



const Home = () => {
    const classes = useLoaderData();
    return (
        <div className="cards">
            {
                classes.map(cart => <Cart
                     carts={cart}
                     key={cart.id}
                     ></Cart> )
            }
        </div>
    );
};

export default Home;