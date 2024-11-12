import React from 'react'

function TodoList({ zadania, usunZadanie })
{
    return (
        <ul>
            {zadania.map((zadanie) => (
                <li key={zadanie.id} className="bar">
                    <span>{zadanie.nazwa}</span>
                    <button onClick={() => usunZadanie(zadanie.id)} className="remove_button">
                        Usuń
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList