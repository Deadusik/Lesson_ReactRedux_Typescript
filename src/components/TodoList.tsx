import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from 'react'
import { useActions } from "../hooks/useActions"

export const TodoList: React.FC = () => {
    const { page, error, isLoading, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos } = useActions()

    useEffect(() => {
        fetchTodos()
    }, [])

    if (isLoading) {
        return (<h1>Loading...</h1>)
    }

    if (error) {
        return (<h1>{error}</h1>)
    }

    return (
        <div>
            {
                todos.map(todo => (
                    <div>
                        <div key={todo.id}>{todo.id} - {todo.title}</div>
                        <div>Page is {page}</div>
                    </div>
                ))
            }
        </div>
    )
}