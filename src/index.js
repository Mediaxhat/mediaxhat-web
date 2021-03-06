import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login  from "./Pages/Login";
import Signup from "./Pages/Signup";
import Terms from "./Pages/Terms";
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

