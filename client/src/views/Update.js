import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import {Link, navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';

const Update = (props) => {
    const {id} = props;
    //const [title, setTitle] = useState();
    //const [price, setPrice] = useState();
    //const [description, setDescription] = useState();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                //setTitle(res.data.title);
                //setPrice(res.data.price);
                //setDescription(res.data.description);
                setProduct(res.data);
                setLoaded(true)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (product) => {
        //e.preventDefault();
        //axios.put('http://localhost:8000/api/products/' + id, {
        //    title,
        //    price,
        //    description
        //})
        //   .then(res => console.log(res))
        //    .catch(err => console.log(err));
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton 
                        productId={product._id} 
                        successCallback={() => navigate('/products/')}
                    />
                </>
            )}
        </div>
    )
}

export default Update;
