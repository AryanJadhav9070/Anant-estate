import SiteLayout from "@/components/site/SiteLayout";
import Hero from "@/components/home/Hero";
import AboutBlock from "@/components/home/AboutBlock";
import ProjectGrid from "@/components/home/ProjectGrid";
import Chairman from "@/components/home/Chairman";
import Testimonials from "@/components/home/Testimonials";

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const ongoing = [
  { image: p1, name: "Anant Serenity", location: "Bandra, Mumbai", meta: "3 & 4 BHK Residences" },
  { image: p2, name: "Anant Maraya", location: "Whitefield, Bangalore", meta: "Garden Residences" },
  { image: p3, name: "Anant Skyline", location: "Worli, Mumbai", meta: "Sky Penthouses" },
];

const completed = [
  { image: p4, name: "Heritage Tower", location: "Lower Parel, Mumbai", meta: "Delivered 2022" },
  { image: p5, name: "Anant Courtyards", location: "Koregaon Park, Pune", meta: "Delivered 2021" },
  { image: p6, name: "Sereno Bay", location: "Cavelossim, Goa", meta: "Delivered 2019" },
];

const Index = () => {
  return (
    <SiteLayout transparentNav>
      <Hero />
      <AboutBlock />
      <ProjectGrid
        eyebrow="Ongoing Projects"
        title="Quietly underway."
        description="A measured collection of residences taking shape across India — each one composed for permanence."
        projects={ongoing}
      />
      <ProjectGrid
        eyebrow="Completed Projects"
        title="Standing the test of time."
        description="Addresses delivered with intent, now lived in and loved by their residents."
        projects={completed}
      />
      <Chairman />
      <Testimonials />
    </SiteLayout>
  );
};

export default Index;
