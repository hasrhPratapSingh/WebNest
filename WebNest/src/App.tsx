import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>

        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
