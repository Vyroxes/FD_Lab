import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Offcanvas, Carousel, Card} from 'react-bootstrap';
import './App.css';

function App() {
    const [show, setShow] = useState(false);
    const [activePage, setActivePage] = useState('slider');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavClick = (page) => {
        setActivePage(page);
        handleClose();
    };

    return (
        <div className="container">		
            <Navbar className="navbar" expand={false}>
                <Button variant="primary" onClick={handleShow}>Menu</Button>
            </Navbar>

            <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
                <Offcanvas.Header className="offcanvas-header">
                    <Offcanvas.Title>Menu</Offcanvas.Title>
					<Button variant="close" onClick={handleClose}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link className="nav-link" onClick={() => handleNavClick('slider')}>Slider</Nav.Link>
                        <Nav.Link className="nav-link" onClick={() => handleNavClick('karty')}>Karty</Nav.Link>
						<Nav.Link className="nav-link" onClick={() => handleNavClick('lista')}>Lista</Nav.Link>
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
				<div>
					<h1>To-do lista!</h1>
                </div>
            )}

            <footer className="footer">
                <h2>Strona z żabami stworzona przez Michała Ruska i Łukasza Iwańskiego</h2>
            </footer>

        </div>

    );
}

export default App;