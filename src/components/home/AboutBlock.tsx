import { Link } from "react-router-dom";
import about from "@/assets/about.jpg";

const AboutBlock = () => (
  <section className="section-y bg-background">
    <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <p className="eyebrow-accent">About Us</p>
        <h2 className="display-lg mt-6">
          Three decades of <em className="not-italic text-accent">considered</em> craftsmanship.
        </h2>
        <div className="mt-8 hairline" />
        <p className="mt-8 body-lead max-w-xl">
          Anant Estate Developers has spent thirty years shaping homes and skylines across
          India. Each address we build is an unhurried act of design — guided by light,
          proportion, and the materials of the land it stands on.
        </p>
        <p className="mt-6 body-lead max-w-xl">
          We do not chase trends. We pursue permanence.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-10">
          <Link to="/about" className="link-quiet text-foreground">
            Our Philosophy
          </Link>
          <Link to="/projects/serenity" className="link-quiet text-muted-foreground hover:text-foreground">
            Our Projects
          </Link>
        </div>
      </div>

      <div className="lg:col-span-6 order-1 lg:order-2">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={about}
            alt="Refined luxury interior"
            className="absolute inset-0 h-full w-full object-cover"
            width={1080}
            height={1350}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutBlock;
