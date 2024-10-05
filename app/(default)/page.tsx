export const metadata = {
  title: "Arthur | Personal Virtual Buddy",
  description:
    "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Meteors from "@/components/ui/meteor";
import Particles from "@/components/ui/particle";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 sm:opacity-100 opacity-70 ">
        <Meteors number={15} />
      </div>

      <div className="fixed w-full h-full justify-center items-center sm:opacity-100 opacity-70 ">
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
