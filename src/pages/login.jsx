import { useNavigate } from "react-router-dom";

import Input from "../components/input";
import Button from "../components/button";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>

        <Input
          type="text"
          placeholder="Usuário"
        />

        <Input
          type="password"
          placeholder="Senha"
        />

        <Button onClick={() => navigate("/home")}>
          Entrar
        </Button>
      </div>
    </div>
  );
}

export default Login;