
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import Reviews from '../components/Reviews'
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Quote from '../components/Quote';

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Contact />
      <About />
      <Services />
      {/* <OurWork /> */}
      {/* <Quote /> */}
      {/* <Reviews /> */}
      <CTA />
    </section>
  );
}
