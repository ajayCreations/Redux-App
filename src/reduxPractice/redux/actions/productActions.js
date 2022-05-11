import { ActionTypes } from "../constants/action-types"

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET__PRODUCTS,
        payload:products,
    }
}

export const selectedProducts=(product)=>{
    return{
        type:ActionTypes.SELECTED__PRODUCTS,
        payload:product,
    }
}

export const removeSelectedProducts=()=>{
    return{
        type:ActionTypes.REMOVE__SELECTED__PRODUCTS
    }
}

