import Hero from "../components/sections/Hero";
import TrustMetrics from "../components/sections/TrustMetrics";
import Services from "../components/sections/Services";
import DoctorProfile from "../components/sections/DoctorProfile";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HealthPackages from "../components/sections/HealthPackages";
import Reveal from "../components/ui/Reveal";


export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <TrustMetrics />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <DoctorProfile />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <HealthPackages />
      </Reveal>
    </>
  );
}
