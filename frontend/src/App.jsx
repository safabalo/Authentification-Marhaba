import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/Forgetpwd";
import Reset from "./components/Resset";
import LivreurAdd from "./components/LivreurAdd";
import Verified from "./components/Verified";
import Livreurs from "./components/Livreurs";
import Clients from "./components/Clients"
import Livreur from "./pages/Livreur";
import Client from "./pages/Client";
import PrivateClientRoutes from "./utils/PrivateClientRoutes";
import PrivateLivreurRoutes from "./utils/PrivateLivreurRoutes"
import PrivateAdminRoutes from "./utils/PrivateAdminRoutes"
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="resetpassword/:token" element={<Reset />} />
        <Route path="verify-email/:userToken" element={<Verified />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/logout" element={<Logout />} />

        <Route element={<PrivateAdminRoutes />}>
          <Route path="manager" element={<Dashboard />}>
            <Route path="livreur" element={<LivreurAdd />} /></Route>
        </Route>

        <Route element={<PrivateLivreurRoutes />}>
          <Route path="livreur" element={<Livreur />}>
            <Route path="me" element={<Livreurs />} /></Route>
        </Route>

        <Route element={<PrivateClientRoutes />}>
          <Route path="client" element={<Client />}>
            <Route path="me" element={<Clients />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
