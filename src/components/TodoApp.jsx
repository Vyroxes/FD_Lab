import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp()
{
    const [zadania, ustawZadania] = useState([])

    const dodajZadanie = (nazwa) =>
    {
		if (nazwa.length < 5) 
        {
            alert("Nazwa zadania musi mieć co najmniej 5 znaków!")
            return
        }
		
		if (zadania.some((zadanie) => zadanie.nazwa === nazwa))
        {
            alert("Takie zadanie już istnieje na liście!")
            return
        }
		
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