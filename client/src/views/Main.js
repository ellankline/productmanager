import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            })
    }, []);
    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm />
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main;