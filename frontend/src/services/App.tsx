import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, NotFound, Explore, Login } from "./pages";
import { Navbar } from "./components";

const App: React.FC = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <main className="bg-red-400">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
