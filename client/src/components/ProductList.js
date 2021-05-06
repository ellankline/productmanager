import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList = (props) => {

    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.products.map((product, idx)=>(
                <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}
                    </Link> 
                    <br/>
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            ))}
        </div>
    )
}

export default ProductList;