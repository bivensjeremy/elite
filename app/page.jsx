'use client'
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import { useTheme } from 'next-themes';
import { websiteData } from '../config/data';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

const { theme } = useTheme();
const isBranded = theme === 'dark';

const themeData = useMemo(() => {
  return isBranded ? websiteData.branded : websiteData.unbranded;
}, [isBranded]);

const { hero, about, cta, why, services, testimonials } = themeData;

if (!mounted) return null;

  return (
    <section>
      <Hero componentPack={hero} />
      <Contact/>
      <About componentPack={about} />
      <Services componentPack={services} />
      <Testimonials componentPack={testimonials} />
      <WhyChoose componentPack={why} />
      <CTA componentPack={cta}/>
    </section>
  );
}
