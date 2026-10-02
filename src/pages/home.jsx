import { useNavigate } from "react-router-dom";

import Button from "../components/button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <h1>Olá, seja bem-vindo!</h1>

        <p>
          Acompanhe suas atividades e informações no Laivy.
        </p>

        <Button onClick={() => navigate("/atividades")}>
          Atividades
        </Button>
      </div>
    </div>
  );
}

export default Home;