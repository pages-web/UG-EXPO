"use client";

import AboutQuestions from "@/components/about/AboutQuestions";
import AboutRandom from "@/components/about/AboutRandom";
import AboutTeamwork from "@/components/about/AboutTeamwork";
import AboutUs from "@/components/about/AboutUs";
import Images from "@/components/Images";

const About = () => {
  return (
    <div className="flex flex-col gap-[30px] py-[5%]">
      <AboutUs />
      <AboutRandom />
      <Images />
      <AboutTeamwork />
      <AboutQuestions />
    </div>
  );
};
export default About;
