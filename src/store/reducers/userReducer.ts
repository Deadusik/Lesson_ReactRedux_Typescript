import { IUserState, UserAction, UserActionTypes } from "../../types/user"

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS: {
            return { users: [], isLoading: true, error: null }
        }
        case UserActionTypes.FETCH_USERS_SUCCESS: {
            return { users: action.payload, isLoading: false, error: null }
        }
        case UserActionTypes.FETCH_USERS_ERROR: {
            return { users: [], isLoading: false, error: action.payload }
        }
        default:
            return state
    }
}