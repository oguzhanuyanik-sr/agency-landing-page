import Cards from '@/components/cards';
import Features from '@/components/features';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Cards />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
