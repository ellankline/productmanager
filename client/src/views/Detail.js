import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                removeFromDom(productId)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
            .catch(err => console.log(err))
    }, [props.id])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products"} onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </Link>
        </div>
    )
}

export default Detail;