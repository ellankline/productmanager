import React from 'react';
import {Link} from '@reach/router';


const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>(
                <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export default ProductList;