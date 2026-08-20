import Navbar from "../ui/Navbar";
import LightLines from "../ui/light-lines";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <LightLines />

      <Navbar />
    </section>
  );
};

export default Hero;