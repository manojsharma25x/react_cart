import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(data => setProducts(data))
    })
    const addToCartHander = (productProperties)=>{
        dispatch({
            type:"addToCart",
            payload:productProperties
        })
        toast.success('Added to cart');
        dispatch({
            type: "calculation"
          });
    }

    return (
        <div className="container mt-5">
            <div className='row'>
                {products?.map((p, i) => {
                    const {id, title, image , price} = p
                    return (<div className="col-12 col-md-6 col-lg-3 mb-3" key={i}>
                        <div className="card h-100">
                            <img src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <h4>{price} INR</h4>
                                <button className="btn btn-primary" onClick={() => addToCartHander({id, title, image, price, quantity: 1 })}>Add to cart</button>
                            </div>
                        </div>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default Products