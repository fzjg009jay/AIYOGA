import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GalleryMarquee from '@/components/GalleryMarquee';
import Philosophy from '@/components/Philosophy';
import ClassesGrid from '@/components/ClassesGrid';
import Locations from '@/components/Locations';
import Instructors from '@/components/Instructors';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GalleryMarquee />
        <Philosophy />
        <ClassesGrid />
        <Locations />
        <Instructors />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
