import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import "./index.css";
import Main from "./Main";
import ECommerceApp from "./components/e-commerce-app";
import PageNotFoundComponent from "./components/PageNotFoundComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="e-commerce-app" element={<ECommerceApp />} />
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>
    </div>
  );
};

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
