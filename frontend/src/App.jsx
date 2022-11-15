import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/Forgetpwd";
import Reset from "./components/Resset";
import Livreur from "./components/Livreur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route path="register" element={<Register />} />
          <Route path="api/user/" element={<Dashboard />} >
            <Route path="livreur" element={<Livreur />} />
          </Route>   
          <Route path="login" element={<Login />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="resetpassword/:token" element={<Reset/>} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
