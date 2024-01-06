import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constants/toDosConstant";

const initialState = {
    isLoading: false,
    toDos: [],
    error: null,
}

const toDosReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:

            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:

            return {
                isLoading: false,
                toDos: action.payload,
                error: null,
            }
        case GET_TODOS_FAILED:

            return {
                ...state,
                error: action.payload,
            }

        default:
            return state;
    }
}

export default toDosReducers;