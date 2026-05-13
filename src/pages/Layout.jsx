
import { Link, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Layout() {

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">

      {/* SIDEBAR */}
      <div className="w-72 bg-[#111827] border-r border-slate-800 p-6">

        <h1 className="text-3xl font-bold mb-10 text-cyan-400">
          Shortify
        </h1>

        <nav className="flex flex-col gap-3">

          <Link
            to="/app/home"
            className="hover:bg-slate-800 p-3 rounded-xl transition"
          >
            🏠 Home
          </Link>

          <Link
            to="/app/links"
            className="hover:bg-slate-800 p-3 rounded-xl transition"
          >
            🔗 Links
          </Link>

          <Link
            to="/app/create"
            className="hover:bg-slate-800 p-3 rounded-xl transition"
          >
            ➕ Create
          </Link>

          <Link
            to="/app/analytics"
            className="hover:bg-slate-800 p-3 rounded-xl transition"
          >
            📊 Analytics
          </Link>

          <Link
            to="/app/profile"
            className="hover:bg-slate-800 p-3 rounded-xl transition"
          >
            👤 Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 mt-6 p-3 rounded-xl"
          >
            Logout
          </button>

        </nav>

      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
