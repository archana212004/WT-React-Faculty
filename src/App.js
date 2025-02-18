import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Faculty from "./faculty";
import Layout from "./Layout";
import Product from "./Product";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Product" element={<Product />}></Route>
            {/* <Route path="/footer" element={<Footer />}></Route> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Faculty />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
