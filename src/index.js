import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Login  from "./pages/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="terms" element={<Terms/>} />
    </Routes>
  </BrowserRouter>
);

