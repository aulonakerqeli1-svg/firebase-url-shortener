import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-blue-400 cursor-pointer"
        >
          URL Shortener
        </h1>

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-400"
          >
            Dashboard
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;