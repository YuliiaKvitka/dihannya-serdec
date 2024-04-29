import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSection from '@/components/heroSection/HeroSection';
import Section2 from '@/components/section2/Section2';
import Section3 from '@/components/section3/Section3';
import Section4 from '@/components/section4/Section4';
import Section5 from '@/components/section5/Section5';
import Section6 from '@/components/section6/Section6';
import Section7 from '@/components/section7/Section7';

export default function Home() {
  return (
    <>
      <div className=' '>
        {/* <Header /> */}
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        {/* <Footer /> */}
      </div>
    </>
  );
}
