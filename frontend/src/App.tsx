import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, NotFound, Explore, Login } from "./pages";
import { Navbar } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
