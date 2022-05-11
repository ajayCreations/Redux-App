import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './all.css'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product, index) => {
        const {id,title,price,category,image}=product;
        return (
            <article key={index} className="product__card">
                <Link to={`/product/${id}`}>
               
                <div className="product__image">
                    <img src={image} alt={title} />
                </div>

                <div className="product__details">
                        <h4 className="lines">{title}</h4>
                        <h3>$ {price}</h3>
                        <p className="tags">{category}</p>
                </div>
                </Link>
            </article>
        )
    })

    // const {id,title}=products[0];

    return (
        <section id="ProductComponent">

           <div className="product_list">
            {renderList}
            </div> 
           

        </section>
    )

}

export default ProductComponent