import FeaturedSection from "@/components/FeaturedSection";
import { Musically } from "@/components/Musically";
import WhyChooseUs from "@/components/WhyChooseUs";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Testimonials } from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { Instructors } from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <TracingBeam className="px-6  flex flex-col gap-16 ">
        <Musically />
        <FeaturedSection />
        <WhyChooseUs />
        <Testimonials />
        <UpcomingWebinars />
        <Instructors />
        <Footer/>
      </TracingBeam>
    </div>
  );
}
