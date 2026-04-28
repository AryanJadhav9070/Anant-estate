import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-walkthrough.mp4.asset.json";
import heroPoster from "@/assets/hero-1.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Anant Estate luxury residence walkthrough"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl text-background animate-fade-up">
          <p className="eyebrow text-background/70">Anant Estate</p>
          <h1 className="display-xl mt-6 text-background whitespace-pre-line">
            {"Crafted living,\nbeyond the ordinary."}
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/80 leading-relaxed">
            A new chapter in residential architecture — where stone, light and silence converge.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-10">
            <Link to="/projects/serenity" className="link-quiet text-background">
              Discover Residences
            </Link>
            <Link to="/contact" className="link-quiet text-background/70 hover:text-background">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
