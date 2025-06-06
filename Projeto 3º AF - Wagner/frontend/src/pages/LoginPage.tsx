// src/pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleLoginSuccess(token: string) {
    localStorage.setItem("access", token);
    navigate("/filmes"); // Redireciona de forma SPA 
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}
