import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from "../redux/actions/productActions";


const ProductListing=()=>{

    const products=useSelector((state)=> state);
    const dispatch = useDispatch();

    const fetchProducts=async()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log('Error while fetching products',err)
        });
        
        dispatch(setProducts(response.data));
    }

   
    console.log(products)
    useEffect(()=>{
        fetchProducts();
    },[])

    return(
        <div className="container">
            <ProductComponent />
        </div>
    )

}

export default ProductListing