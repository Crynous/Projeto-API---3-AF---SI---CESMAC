// src/pages/HomePage.tsx
import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="text-center">
        <Col md={12}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
            alt="CineApp"
            width={120}
            className="mb-4"
            roundedCircle
          />
          <h1 className="display-4">Bem-vindo ao CineApp! 🍿</h1>
          <p className="lead">Cadastre-se, faça login e gerencie sua lista de filmes e séries favoritas.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="success">Cadastrar</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
