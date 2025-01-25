import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Navbar, Nav, Container, Carousel, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import TodoApp from './components/TodoApp';
import DataDisplayApp from './components/DataDisplayApp';
import './App.css';


const Login = ({ setAuthenticated }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        setAuthenticated(true);
    };

    return (
        <Container className="mt-5">
            <h2>Logowanie</h2>
			<Form className="logowanie" onSubmit={handleLogin}>
				<Form.Group controlId="username">
					<Form.Label>Nazwa użytkownika</Form.Label>
					<Form.Control type="text" placeholder="Wpisz nazwę użytkownika" required />
				</Form.Group>
				<Button type="submit" className="login-button">
				Zaloguj się
				</Button>
			</Form>
        </Container>
    );
};

const StronaGlowna = () => (
    <Container className="mt-5">
        <h2>Strona główna</h2>
        <p>Strona z żabami</p>
    </Container>
);

const ONas = () => (
    <Container className="mt-5">
        <h2>O nas</h2>
        <p>Strona z żabami stworzona przez Michała Ruska i Łukasza Iwańskiego</p>
    </Container>
);

const Kontakt = () => (
    <Container className="mt-5">
        <h2>Kontakt</h2>
        <Form className="kontakt">
            <Form.Group controlId="name">
                <Form.Label>Imię</Form.Label>
                <Form.Control type="text" placeholder="Twoje imię" required />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Twój email" required />
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button className="send-button" type="submit">
                Wyślij
            </Button>
        </Form>
    </Container>
);

const Slider = () => (
    <Container className="mt-5">
        <h2>Slider z żabami</h2>
        <Carousel className="carousel">
            <Carousel.Item>
                <img className="carousel-image" src="https://www.ekologia.pl/wp-content/uploads/2023/03/marsh-frog-pelophylax-ridibundus_800x533.jpg" alt="Żaba śmieszka" />
                <Carousel.Caption>
                    <h3>Żaba śmieszka</h3>
                    <p>Pelophylax ridibundus, syn. Rana ridibunda</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/%C5%BBaba_jeziorkowa.JPG/1280px-%C5%BBaba_jeziorkowa.JPG" alt="Żaba jeziorkowa" />
                <Carousel.Caption>
                    <h3>Żaba jeziorkowa</h3>
                    <p>Pelophylax lessonae, syn. Rana lessonae</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Teichfrosch.jpg/1024px-Teichfrosch.jpg" alt="Żaba wodna" />
                <Carousel.Caption>
                    <h3>Żaba wodna</h3>
                    <p>Pelophylax kl. esculentus, syn. Rana esculenta</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
);

const Karty = () => (
    <Container className="card-container">
        <h2>Karty</h2>
        <Card className="card">
            <Card.Img className="card-image" src="https://zwierzakwdomu.pl/wp-content/uploads/2021/01/frog-peeking-out-P2KMUJV-scaled.jpg" />
            <Card.Body>
                <Card.Title>Żaba</Card.Title>
                <Card.Text>To jest opis karty z żabą.</Card.Text>
            </Card.Body>
        </Card>
    </Container>
);

const TodoLista = () => (
    <Container className="mt-5">
        <h2>To-do lista!</h2>

        <TodoApp />
    </Container>
);

const Wypozyczalnia = () => (
    <Container className="mt-5">
        <h2>Wypożyczalnia samochodów!</h2>

        <DataDisplayApp />
    </Container>
);

const Blad404DwaZnaki = () => (
    <Container className="mt-5">
        <h2>Błąd 404 - 2 znaki</h2>
        <p>Strona, której szukasz, nie istnieje.</p>
        <Link to="/">Wróć na stronę główną</Link>
    </Container>
);

const Blad404 = () => (
    <Container className="mt-5">
        <h2>Błąd 404</h2>
        <p>Strona, której szukasz, nie istnieje.</p>
        <Link to="/">Wróć na stronę główną</Link>
    </Container>
);

const Footer = () => (
    <footer className="footer">
        <Container>
            <p>&copy; {new Date().getFullYear()} Strona z żabami stworzona przez Michała Ruska i Łukasza Iwańskiego</p>
        </Container>
    </footer>
);

const CheckPath = () => {
    const { path } = useParams();
  
    if (/^[a-zA-Z0-9]{2}$/.test(path))
    {
      return <Blad404DwaZnaki />;
    }
  
    return <Blad404 />;
  };

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <Router>
            {authenticated ? (
                <>
                    <Navbar variant="dark" expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/">Strona główna</Nav.Link>
                                        <Nav.Link as={Link} to="/onas">O nas</Nav.Link>
                                        <Nav.Link as={Link} to="/kontakt">Kontakt</Nav.Link>
                                        <Nav.Link as={Link} to="/slider">Slider</Nav.Link>
                                        <Nav.Link as={Link} to="/karty">Karty</Nav.Link>
                                        <Nav.Link as={Link} to="/todo">Lista</Nav.Link>
                                        <Nav.Link as={Link} to="/wypozyczalnia">Wypożyczalnia</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <Routes>
                            <Route path="/" element={<StronaGlowna />} />
                            <Route path="/onas" element={<ONas />} />
                            <Route path="/kontakt" element={<Kontakt />} />
                            <Route path="/slider" element={<Slider />} />
                            <Route path="/karty" element={<Karty />} />
                            <Route path="/todo" element={<TodoLista />} />
                            <Route path="/wypozyczalnia" element={<Wypozyczalnia />} />
                        </Routes>
						
						<Footer />
                    </>
                ) : (
                    <Routes>
                        <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
                        <Route path=":path" element={<CheckPath />} />
                    </Routes>
                )}
        </Router>
    );
};

export default App;