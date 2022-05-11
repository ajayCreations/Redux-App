import React, { useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";
import './all.css'


const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    console.log('is product', product);

    const { productId } = useParams();
    const dispatch = useDispatch();

    const productDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('error while fetching product details', err)
            })

        dispatch(selectedProducts(response.data));
        // console.log('he product is', response.data);
    }

    useEffect(() => {
        if (productId && productId !== '') productDetails();
        return () =>{
            dispatch(removeSelectedProducts());
        }
    }, [productId])



    return (
        <section id="product_details">

            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) :
                (


                    <div className="product__listt">
                        <article className="product-card">

                              <div className="product-image">
                                <img src={image} alt={title} />
                             </div>              

                             <div className="product-details">
                                 <h2>{title}</h2>
                                 <h3>$ {price}</h3>

                                 <h4>{category}</h4>

                                 <p>{description}</p>

                                 <button>Add to Card</button>
                             </div>

                           
                        </article>
                    </div>


                )
            }

        </section>
    )

}

export default ProductDetails