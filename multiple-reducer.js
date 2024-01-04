const { createStore } = require("redux")

// product constant 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

// cart constant 
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

// product state 
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
}

// cart state 
const initialCartState = {
    cart: ['sugar'],
    numberOfProducts: 1
}

// products action 
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    }
}

// cart action 
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product,
    }
}


// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:

            return {
                ...state,
            }
        case ADD_PRODUCTS:

            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            state
    }
}

// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:

            return {
                ...state
            }
        
        case ADD_CART_ITEMS: 
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            state
    }
}



// const productStore = createStore(productReducer)
// const cartStore = createStore(cartReducer)

productStore.subscribe(() => {
    console.log(productStore.getState());
})

cartStore.subscribe(() => {
    console.log(cartStore.getState());
})

productStore.dispatch(getProducts())
productStore.dispatch(addProducts('biriani'))
productStore.dispatch(addProducts('borhani'))

cartStore.dispatch(getCart())
cartStore.dispatch(addCart('tea'))