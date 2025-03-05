import { AboutMain } from "../components/AboutMain";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AboutMain />
      <Footer />
    </div>
  );
};
