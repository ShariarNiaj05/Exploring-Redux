const { createStore } = require("redux")
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// state
const initialState = {
    count: 0
}

/* const initialUsersState = {
    users: [
        { name: "Shariar Islam" }
    ]
} */



// action ==> Object => type, payload 
// Increment Counter
const incrementCounterAction = () => {
    return {
        type: INCREMENT,

    }
}

// Decrement Counter 
const decrementCounterAction = () => {
    return {
        type: DECREMENT

    }
}

// Reset counter 
const resetCounterAction = () => {
    return {
        type: RESET

    }
}

// create reducer for counter 
const counterReducer = (state = initialState, action) => {
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

        case RESET:
            return {
                count: initialState.count
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
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())


/* 
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Niaj' }
    }
} */