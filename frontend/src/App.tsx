import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, NotFound, Explore, Login } from "./pages";
import { Navbar, Footer } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
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

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
