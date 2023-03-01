import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

// React.FunctionComponent & React.FC is same which indicates the functional component.
const App: React.FunctionComponent = () => {
    // const [todos, setTodos] = useState<{ id: string; text: string }[]>([])
    const [todos, setTodos] = useState<Todo[]>([]) // Same as previous line.

    const todoAddHandler = (text: string) => {
        setTodos([...todos, { id: Math.random().toString(), text: text }])
    }

    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId)
        })
    }

    return (
        <div className='App'>
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </div>
    )
}

export default App
