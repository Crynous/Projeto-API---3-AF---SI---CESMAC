// src/components/RegisterForm.tsx
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (user.password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const data = await response.json();
        const errorMsg = Object.values(data).flat().join(" ");
        throw new Error(errorMsg || "Erro ao cadastrar usuário.");
      }

      setSuccess("Usuário cadastrado com sucesso! Redirecionando...");
      setUser({ username: "", email: "", password: "" });
      setConfirmPassword("");

      // Redireciona após 2 segundos
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      {/*<h2>Registro</h2>*/}
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" onClick={handleRegister}>
          Registrar
        </Button>
      </Form>
    </div>
  );
}
