import React, { useRef } from 'react'

// HTML part is here. So, import and use the css in that file.
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null) // For the first time, this is not pointing anything. So that, it's 'null'.

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        // console.log(enteredText)

        props.onAddTodo(enteredText)
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' ref={textInputRef}/>
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )
}

export default NewTodo
