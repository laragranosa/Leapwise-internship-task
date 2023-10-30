// import './App.css';
import { globalStyles, theme } from "./styles/stitches.config.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import homePage from "./pages/homePage";
import previewPage from "./pages/previewPage.jsx";
import "./styles/reset.css";

function App() {
  globalStyles();
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />

          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Registration} />
          <Route path="/homePage" Component={homePage} />
          <Route path="/preview" Component={previewPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
