import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataList = ({ data, onDelete }) => {
    return (
        <div>
            <Table striped bordered hover className="data-table">
                <thead>
                    <tr>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Rok produkcji</th>
                        <th>Silnik</th>
                        <th>Kolor</th>
                        <th>Numer rejestracyjny</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((car) => (
                        <tr key={car.id}>
                            <td>{car.marka}</td>
                            <td>{car.model}</td>
                            <td>{car.rok_produkcji}</td>
                            <td>{car.silnik}</td>
                            <td>{car.kolor}</td>
                            <td>{car.numer_rejestracyjny}</td>
                            <td>
                                <Button className="remove-button2" onClick={() => onDelete(car.id)}>
                                    Usuń
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataList;
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DataList = ({ data, onDelete }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Rok produkcji</th>
                        <th>Silnik</th>
                        <th>Kolor</th>
                        <th>Numer rejestracyjny</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((car) => (
                        <tr key={car.id}>
                            <td>{car.marka}</td>
                            <td>{car.model}</td>
                            <td>{car.rok_produkcji}</td>
                            <td>{car.silnik}</td>
                            <td>{car.kolor}</td>
                            <td>{car.numer_rejestracyjny}</td>
                            <td>
                                <Button variant="danger" onClick={() => onDelete(car.id)}>
                                    Usuń
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataList;