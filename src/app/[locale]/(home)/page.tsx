import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import CollegeOverview from "@/src/components/CollegeOverview";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CollegeOverview />
    </main>
  );
};

export default HomePage;
