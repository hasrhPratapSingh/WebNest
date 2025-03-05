import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeMain } from "../components/HomeMain";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
};
