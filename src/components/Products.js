import React, {useContext} from 'react';

// Components
import Product from './Product';

//Context
import {ProductContext} from '../contexts/ProductContext';

const Products = (s) => {
	const { products, addItem } = useContext(ProductContext);
	// call on the useContext hook to pass in the context object that we want to use (ProductContext) into it. It's going to return the value prop passed by our ProductContext.Provider. (products & addItem)
	// now that we have all of the data we can refactor our Products component from using props by removing every prop
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
