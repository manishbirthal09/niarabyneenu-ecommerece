import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Categories from "../components/layout/Categories";
import FeaturedProducts from "../components/layout/FeaturedProducts";
import Footer from "../components/layout/Footer";
import About from "../components/layout/About";
import InstagramFeed from "../components/layout/InstagramFeed";
import Testimonials from "../components/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <InstagramFeed />
      <Footer />
    </>
  );
}