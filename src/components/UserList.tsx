import { useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from '../hooks/useActions'
import { fetchUsers } from '../store/action_creators/user'

const UserList: React.FC = () => {
    const { users, error, isLoading } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                // users.map(user => {
                //     <div key={user.id}>user.name</div>
                // })
            }
        </div>
    )
}

export default UserList