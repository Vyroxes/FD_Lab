import React, { useState } from 'react'

function TodoForm({ dodajZadanie })
{
    const [nazwa, ustawNazwe] = useState('')

    const obsluzZmiane = (e) =>
    {
        ustawNazwe(e.target.value)
    }

    const obsluzWyslanie = (e) =>
    {
        e.preventDefault()
        if (nazwa.trim())
        {
            dodajZadanie(nazwa)
            ustawNazwe('')
        }
    }

    return (
        <form onSubmit={obsluzWyslanie} className="to-do-lista">
            <input
                type="text"
                value={nazwa}
                onChange={obsluzZmiane}
                placeholder="Nowe zadanie (minimum 5 znaków)"
                className="search"
            />
            <button type="submit" className="add-button">Dodaj</button>
        </form>
    )
}

export default TodoForm