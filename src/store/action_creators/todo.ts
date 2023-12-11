import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import axios from "axios"
import { TodoActionTypes, TodoActions } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10): any => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS })
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    params: { _page: page, _limit: limit }
                }
            )
            dispatch({ type: TodoActionTypes.FETCH_SUCCESS_TODOS, payload: res.data })
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_ERROR_TODOS,
                payload: 'Error loading todos!'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoActions => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}