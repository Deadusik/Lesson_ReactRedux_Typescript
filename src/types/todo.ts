export interface TodoState {
    todos: any[],
    isLoading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS,
    FETCH_SUCCESS_TODOS,
    FETCH_ERROR_TODOS,
    SET_TODO_PAGE
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_SUCCESS_TODOS,
    payload: any[]
}

interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_ERROR_TODOS,
    payload: string
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoActions =
    FetchTodosAction | FetchTodosSuccessAction
    | FetchTodosErrorAction | SetTodoPage