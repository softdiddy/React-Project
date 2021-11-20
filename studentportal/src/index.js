import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./routes/login";
import Registration from './routes/registration';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="createAccount" element={<Registration />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
