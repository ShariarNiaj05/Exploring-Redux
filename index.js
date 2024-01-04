const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'

// state
const initialCounterState = {
    count: 0
}
const initialUsersState = {
    users: [
        { name: "Shariar Islam" }
    ]
}



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


const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Niaj' }
    }
}