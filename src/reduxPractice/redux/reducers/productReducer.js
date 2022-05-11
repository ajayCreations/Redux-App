import { ActionTypes } from "../constants/action-types";

const initialState={
    products:[],
} 


export const productReducer = (state = initialState, {type,payload})=>{
    switch (type) {
        case ActionTypes.SET__PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED__PRODUCTS:
            return{...state,...payload}

        case ActionTypes.REMOVE__SELECTED__PRODUCTS:
            return{}
    
        default:
          return state;
    }

}


