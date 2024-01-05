const { createStore, applyMiddleware } = require('redux');
const { thunk } = require('redux-thunk');
const axios = require('axios');



// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api


const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"

// states
const initialTodoState = {
    toDos: [],
    isLoading: false,
    error: null,
}



// action
const getToDosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}

const getToDosSuccess = (toDos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: toDos,
    }
}

const getToDosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    }
}

// reducer
const toDosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:

            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:

            return {
                ...state,
                isLoading: false,
                toDos: action.payload
            }
        case GET_TODOS_FAILED:

            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

// async action creator 
const fetchData = () => {
    return (dispatch) => {
        dispatch(getToDosRequest())
        axios.get(API_URL)
            .then(res => {
                const toDos = res.data
                const title = toDos.map(toDo => toDo.title)
                dispatch(getToDosSuccess(title))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getToDosFailed(errorMessage))
            })

    }
}

// store 
const store = createStore(toDosReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())