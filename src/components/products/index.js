import React from 'react';

class Products extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.store.getState());
	}

	render() {
		return (<div>Products</div>)
	}
}

export default Products;