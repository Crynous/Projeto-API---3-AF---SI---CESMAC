// src/components/Navbar.tsx
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AppNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [token, setToken] = useState<string | null>(localStorage.getItem('access'));

    useEffect(() => {
        // Atualiza o token toda vez que a rota mudar
        setToken(localStorage.getItem('access'));
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('access');
        setToken(null);
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
            <Container>
                <Navbar.Brand as={Link} to="/">🎬 CineApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        {token && <Nav.Link as={Link} to="/filmes">Filmes</Nav.Link>}
                    </Nav>
                    <Nav className="d-flex align-items-center gap-2">
                        {!token ? (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Registrar</Nav.Link>
                            </>
                        ) : (
                            <Button variant="outline-light" onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
