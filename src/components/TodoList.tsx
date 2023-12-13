import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect, useState } from 'react'
import { useActions } from "../hooks/useActions"

export const TodoList: React.FC = () => {
    const { page, error, isLoading, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos } = useActions()
    const pageNumbers = [1, 2, 3, 4, 5]
    const [pageNumber, setPageNumber] = useState(1)

    const componentStyles = {
        todoItem: {
            border: '2px solid tomato',
            width: '30%'
        },
        pageBar: {
            marginTop: '10px',
            display: 'flex',
        },
        pageBarItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px',
            height: '50px',
            background: 'gray',
            color: 'white',
            cursor: 'pointer',
            border: '1px solid tomato'
        }
    }

    useEffect(() => {
        fetchTodos(pageNumber)
    }, [pageNumber])

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
                    <div key={todo.id} style={componentStyles.todoItem}>
                        <div key={todo.id}>{todo.id} - {todo.title}</div>
                        <div>Page is {page}</div>
                    </div>
                ))
            }
            <div style={componentStyles.pageBar}>
                {
                    pageNumbers.map(pageNumber => (
                        <div key={pageNumber} onClick={() => setPageNumber(pageNumber)} style={componentStyles.pageBarItem}>
                            {pageNumber}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}