import { useNavigate } from "react-router";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login(
      {
        id: 1,
        name: "Amir",
        email: "amir@example.com",
      },
      "fake-token",
    );

    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
