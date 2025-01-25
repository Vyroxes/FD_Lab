import React, { useState, useEffect } from 'react';
import DataList from './DataList';

const DataDisplayApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        marka: '',
        model: '',
        rok_produkcji: '',
        silnik: '',
        kolor: '',
        numer_rejestracyjny: ''
    });

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            fetch('http://localhost:3000/baza')
                .then(response => response.json())
                .then(newData => {
                    setData(newData);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Błąd podczas ładowania danych:', err);
                    setLoading(false);
                });
        };

        fetchData();
    }, []);


    const addCar = (car) => {
        fetch('http://localhost:3000/baza', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        })
            .then(response => response.json())
            .then(newCar => {
                setData(prevData => [...prevData, newCar]);
            })
            .catch(err => console.error('Błąd podczas dodawania samochodu:', err));
    };

    const deleteCar = (id) => {
        fetch(`http://localhost:3000/baza/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setData(prevData => prevData.filter(car => car.id !== id));
            })
            .catch(err => console.error('Błąd podczas usuwania samochodu:', err));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(field => field.trim() !== '')) {
            addCar(formData);
            setFormData({
                marka: '',
                model: '',
                rok_produkcji: '',
                silnik: '',
                kolor: '',
                numer_rejestracyjny: ''
            });
        } else {
            alert('Proszę wypełnić wszystkie pola!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="formularz">
                <div>
                    <label>Marka: </label>
                    <input
                        type="text"
                        name="marka"
                        value={formData.marka}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Model: </label>
                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Rok produkcji: </label>
                    <input
                        type="number"
                        name="rok_produkcji"
                        value={formData.rok_produkcji}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Silnik: </label>
                    <input
                        type="text"
                        name="silnik"
                        value={formData.silnik}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Kolor: </label>
                    <input
                        type="text"
                        name="kolor"
                        value={formData.kolor}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Numer rejestracyjny: </label>
                    <input
                        type="text"
                        name="numer_rejestracyjny"
                        value={formData.numer_rejestracyjny}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Dodaj samochód</button>
            </form>

            {loading ? (
                <p>Ładowanie danych...</p>
            ) : (
                <DataList data={data} onDelete={deleteCar} />
            )}
        </div>
    );
};

export default DataDisplayApp;