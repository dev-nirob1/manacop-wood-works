import Hero from "../components/front/Hero";
import CTA from "../components/front/CTA";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <CTA />
    </div>
  );
};

export default Home;