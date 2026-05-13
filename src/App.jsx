import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Links from "./pages/Links";
import Create from "./pages/Create";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

import Redirect from "./pages/Redirect";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* DASHBOARD */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >

        <Route path="home" element={<Home />} />
        <Route path="links" element={<Links />} />
        <Route path="create" element={<Create />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Profile />} />

      </Route>

      {/* REDIRECT */}
      <Route
        path="/r/:shortCode"
        element={<Redirect />}
      />

      {/* DEFAULT */}
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />

    </Routes>

  );
}

export default App;