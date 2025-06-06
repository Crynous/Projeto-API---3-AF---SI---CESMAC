// src/components/LoginForm.tsx
import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "../services/api";
import { UserCredentials } from "../types/User";

interface Props {
  onLoginSuccess: (token: string) => void;
}

export default function LoginForm({ onLoginSuccess }: Props) {
  const [user, setUser] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const data = await loginUser(user.username, user.password);
      onLoginSuccess(data.access);
    } catch {
      alert("Erro no login. Verifique usuário e senha.");
    }
  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Usuário</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu usuário"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
}
