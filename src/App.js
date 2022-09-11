import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Copyright } from "./components";
import { Article, Home, Privacy, Terms } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
