// Working with React so importing React. Otherwise JSX is not working.
import React from 'react'

// HTML part is here. So, import and use the css in that file.
import './TodoList.css'

// This interface (generic type) indicates that how my 'props' looks like.
interface TodoListProps {
    items: { id: string; text: string }[] // Array of object
    onDeleteTodo: (todoId: string) => void
}

// Indicating functional component
const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                        DELETE
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
