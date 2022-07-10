import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login  from "./Login";
import Signup from "./Signup";
import Terms from "./Terms";
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

