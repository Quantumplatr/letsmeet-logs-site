import logo from './logo.svg';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"
import './App.css';

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import WMRs from "./pages/WMRs"
import Logs from "./pages/Logs"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="wmrs" element={<WMRs />} />
          <Route path="logs" element={<Logs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
