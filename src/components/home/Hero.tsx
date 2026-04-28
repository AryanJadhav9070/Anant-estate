import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import heroAerial from "@/assets/project-hero.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Anant Heritage Tower",
    title: "Crafted living,\nbeyond the ordinary.",
    sub: "A new chapter in residential architecture — where stone, light and silence converge.",
  },
  {
    image: hero2,
    eyebrow: "Anant Sereno Villas",
    title: "Designed with\nquiet precision.",
    sub: "Private residences shaped by Indian craftsmanship and a measured, modern restraint.",
  },
  {
    image: heroAerial,
    eyebrow: "Anant Estate",
    title: "Timeless spaces,\nbuilt to endure.",
    sub: "Three decades of building homes that outlive trends and grow into landmarks.",
  },
];

const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.eyebrow}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
        </div>
      ))}

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32">
        <div key={i} className="max-w-3xl text-background animate-fade-up">
          <p className="eyebrow text-background/70">{slides[i].eyebrow}</p>
          <h1 className="display-xl mt-6 text-background whitespace-pre-line">
            {slides[i].title}
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/80 leading-relaxed">
            {slides[i].sub}
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

        <div className="mt-16 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-700 ${
                i === idx ? "w-16 bg-background" : "w-8 bg-background/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
