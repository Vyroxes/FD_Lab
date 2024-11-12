import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp()
{
    const [zadania, ustawZadania] = useState([])

    const dodajZadanie = (nazwa) =>
    {
        ustawZadania([...zadania, { nazwa, id: Date.now() }])
    }

    const usunZadanie = (id) =>
    {
        ustawZadania(zadania.filter((zadanie) => zadanie.id !== id))
    }

    return (
        <div>
            <TodoForm dodajZadanie={dodajZadanie} />
            <TodoList zadania={zadania} usunZadanie={usunZadanie} />
        </div>
    )
}

export default TodoApp