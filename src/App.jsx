import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Offcanvas, Carousel, Card, Form, ListGroup} from 'react-bootstrap';
import TodoApp from './components/TodoApp'
import DataDisplayApp from './components/DataDisplayApp';
import './App.css';


const Login = ({ setAuthenticated }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        setAuthenticated(true);
    };

    return (
        <div className="container">		
            <Navbar className="navbar" expand={false}>
                <button className="menu_button" variant="primary" onClick={handleShow}>Menu</button>
            </Navbar>

            <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
                <Offcanvas.Header className="offcanvas-header">
                    <Offcanvas.Title>Menu</Offcanvas.Title>
					<button className="menu_close_button" variant="close" onClick={handleClose}>x</button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link className="nav-link" onClick={() => handleNavClick('slider')}>Slider</Nav.Link>
                        <Nav.Link className="nav-link" onClick={() => handleNavClick('karty')}>Karty</Nav.Link>
						<Nav.Link className="nav-link" onClick={() => handleNavClick('lista')}>Lista</Nav.Link>
                        <Nav.Link className="nav-link" onClick={() => handleNavClick('wypozyczalnia')}>Wypożyczalnia</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            {activePage === 'slider' && (
				<div classname="slider-container">
					<h1>Slider z żabami</h1>
					<Carousel className="carousel">
						<Carousel.Item>
							<img className="images" src="https://upload.wikimedia.org/wikipedia/commons/a/af/RanaRidibundaFemale.jpg" alt="1"/>
							<Carousel.Caption>
								<h3 className="text-background">Żaba śmieszka</h3>
								<p className="text-background">Pelophylax ridibundus, syn. Rana ridibunda</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/%C5%BBaba_jeziorkowa.JPG/1280px-%C5%BBaba_jeziorkowa.JPG" alt="2"/>
							<Carousel.Caption>
								<h3 className="text-background">Żaba jeziorkowa</h3>
								<p className="text-background">Pelophylax lessonae, syn. Rana lessonae</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Teichfrosch.jpg/1024px-Teichfrosch.jpg" alt="3"/>
							<Carousel.Caption>
								<h3 className="text-background">Żaba wodna</h3>
								<p className="text-background">Pelophylax kl. esculentus, syn. Rana esculenta, właśc. Rana kl. esculenta</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
            )}

            {activePage === 'karty' && (
                <div className="card-container">
					<h1>Karta z żabą</h1>
                    <Card className="custom-card">
                        <Card.Img variant="top" src="https://zwierzakwdomu.pl/wp-content/uploads/2021/01/frog-peeking-out-P2KMUJV-scaled.jpg" />
                        <Card.Body>
                            <Card.Title>Żaba</Card.Title>
                            <Card.Text>To jest opis karty z żabą.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}
			
			{activePage === 'lista' && (
				<div className="App">
                    <h1>To-do lista!</h1>

                    <TodoApp />
                </div>
            )}

            {activePage === 'wypozyczalnia' && (
                <div className="wypozyczalnia">
                    <h1>Wypozyczalnia samochodów</h1>
                    
                    <DataDisplayApp />
                </div>
            )}

            <footer className="footer">
                <h2>Strona z żabami stworzona przez Michała Ruska i Łukasza Iwańskiego</h2>
            </footer>

        </div>

    );
};

export default App;