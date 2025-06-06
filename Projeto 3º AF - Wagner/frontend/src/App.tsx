// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage";
import Footer from "./components/Footer";

function App() {

  {/*const isAuthenticated = !!localStorage.getItem("access"); // - desativada para testes*/}

  return (
    <Router>
      
      <Navbar />
      {/* Bootstrap container aqui */}
      <div className="container mt-4" style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/*<Route
            path="/filmes"
            element={
              isAuthenticated ? <MoviesPage /> : <Navigate to="/login" />
            }
          /> // - possível bug no navigate causado por essa linha*/}
          <Route
            path="/filmes" element={<MoviesPage />}/>

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
