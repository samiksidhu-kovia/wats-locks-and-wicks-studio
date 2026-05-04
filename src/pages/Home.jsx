import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import SignatureStyles from "@/components/home/SignatureStyles";
import BookingCTA from "@/components/home/BookingCTA";
import AboutPreview from "@/components/home/AboutPreview";
import BookingProcess from "@/components/home/BookingProcess";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedServices />
      <SignatureStyles />
      <BookingCTA />
      <AboutPreview />
      <BookingProcess />
      <Reviews />
    </div>
  );
}