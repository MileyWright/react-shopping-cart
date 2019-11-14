import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import {ProductContext} from './contexts/ProductContext';
	//now that we created our ProductContext we can provide data across our app
import {CartContext} from './contexts/CartContext';
	// we can now provide data across our app

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = id => {
		// removes the item from the cart
		const tempCart = cart.filter(element => element.id !== id)
		setCart(tempCart)
	}

	return (
		<ProductContext.Provider value = {{products, addItem}}>
			{/* 1. now that we created our ProductContext, wrap all our components/routes. 
			2. Pass a value props to the Provider (the products state and an addItem function that will allow us to add the product to the cart)*/}
			<CartContext.Provider value = {{cart, removeItem}}>
				{/* 1. now that we create our CartContext, wrap all components/routes.
				2. Pass a value props to the Provider (the cart state and the removeItem function that will allow us to remove the product from the cart) */}
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/" component={Products}
					/>

					<Route
						path="/cart" component= {ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
