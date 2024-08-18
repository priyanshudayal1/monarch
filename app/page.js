import AboutUs from "@/components/AboutUs";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import Intro from "@/components/Intro";
import LetsCatchUp from "@/components/LetsCatchUp";
import OurValue from "@/components/OurValue";
import SectionDivider from "@/components/SectionDivider";
import SectionDividerRight from "@/components/SectionDividerRight";


export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <SectionDivider />
      <OurValue />
      <Connect />
      <Intro />
      <SectionDividerRight />
      <HowWeWork />
      <SectionDivider />
      <LetsCatchUp />
      <Footer />

    </div>
  );
}
