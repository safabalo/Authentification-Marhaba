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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="api/user/" element={<Dashboard />}>
        <Route path="livreur" element={<LivreurAdd />} />
        </Route>
        <Route path="api/user/" element={<Livreur />}>
          <Route path="livreur/me" element={<Livreurs />} />
        </Route>
        <Route element={<PrivateClientRoutes/>}>
          <Route path="api/user/" element={<Client />}>
            <Route path="client/me" element={<Clients />} />
          </Route>
        </Route>
        
        
        <Route path="login" element={<Login />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="resetpassword/:token" element={<Reset />} />
        <Route path="verify-email/:userToken" element={<Verified />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
