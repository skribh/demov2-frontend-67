import Header from "@/components/Header";
import AuthForm from "@/components/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Login</h1>

            <AuthForm mode="login" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
