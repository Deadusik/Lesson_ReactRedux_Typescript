import * as UserActionsCreators from './user'
import * as TodoActionsCreators from './todo'

export const ActionCreators = {
    ...UserActionsCreators,
    ...TodoActionsCreators
}
