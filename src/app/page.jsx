import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrendyPlants from '@/components/TrendyPlants';
import TopSelling from '@/components/TopSelling';
import CustomerReviews from '@/components/CustomerReviews';
import BestO2 from '@/components/BestO2';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="bg-flora-dark min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <TrendyPlants />
      <TopSelling />
      <CustomerReviews />
      <BestO2 />
      <FooterSection />
    </main>
  );
}