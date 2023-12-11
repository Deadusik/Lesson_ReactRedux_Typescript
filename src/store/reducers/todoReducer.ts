import { TodoActionTypes, TodoActions, TodoState } from "../../types/todo"

const defaultState: TodoState = {
    todos: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state = defaultState, action: TodoActions): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS: {
            return { ...state, isLoading: true }
        }
        case TodoActionTypes.FETCH_SUCCESS_TODOS: {
            return { ...state, isLoading: false, todos: action.payload }
        }
        case TodoActionTypes.FETCH_ERROR_TODOS: {
            return { ...state, isLoading: false, error: action.payload }
        }
        case TodoActionTypes.SET_TODO_PAGE: {
            return { ...state, page: action.payload }
        }
        default:
            return state
    }
} 