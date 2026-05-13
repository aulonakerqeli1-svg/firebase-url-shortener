import { useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase";

import {
  useNavigate,
  Link
} from "react-router-dom";

import { QRCodeCanvas } from "qrcode.react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  ////////////////////////////////////////
  // REDIRECT IF LOGGED IN
  ////////////////////////////////////////

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (user) => {

      if (user) {
        navigate("/app/home");
      }

    });

    return () => unsub();

  }, []);

  ////////////////////////////////////////
  // LOGIN
  ////////////////////////////////////////

  const login = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/app/home");

    } catch (err) {
      alert(err.message);
    }
  };

  ////////////////////////////////////////
  // UI
  ////////////////////////////////////////

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10">

        {/* LOGIN CARD */}
        <form
          onSubmit={login}
          className="w-full md:w-1/2 bg-[#111827] border border-slate-700 p-8 rounded-3xl shadow-2xl"
        >

          <h1 className="text-4xl font-bold mb-8">
            Login
          </h1>

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
            Login
          </button>

          <p className="text-gray-400 mt-6 text-center">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-cyan-400"
            >
              Register
            </Link>

          </p>

        </form>

        {/* QR */}
        <div className="flex flex-col items-center">

          <p className="mb-5 text-gray-300">
            Scan QR
          </p>

          <div className="bg-white p-5 rounded-3xl">

          <QRCodeCanvas
  value={"https://url-shortener-6ac1f.web.app"}
  size={220}
/>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;