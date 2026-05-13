
import { useState } from "react";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/app/home");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-[#111827] border border-slate-700 p-8 rounded-3xl">

        <h1 className="text-4xl font-bold mb-8">
          Register
        </h1>

        <form onSubmit={register}>

          <input
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl mb-4"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl mb-6"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-xl">
            Create Account
          </button>

        </form>

        <p className="text-gray-400 mt-6 text-center">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;