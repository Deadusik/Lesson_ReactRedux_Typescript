import { useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action_creators/user'

const UserList: React.FC = () => {
    const { users, error, isLoading } = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div></div>
    )
}

export default UserList