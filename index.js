const { createStore } = require("redux")
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
// const ADD_USER = 'ADD_USER'

// state
const initialCounterState = {
    count: 0
}

/* const initialUsersState = {
    users: [
        { name: "Shariar Islam" }
    ]
} */



// action ==> Object => type, payload 
// Increment Counter
const incrementCounter = () => {
    return {
        type: INCREMENT,

    }
}

// Decrement Counter 
const decrementCounter = () => {
    return {
        type: DECREMENT

    }
}

// create reducer for counter 
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }


        default:
            state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action 
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())


/* 
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Niaj' }
    }
} */