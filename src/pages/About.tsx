import SiteLayout from "@/components/site/SiteLayout";
import aboutHero from "@/assets/about-hero.jpg";
import founder from "@/assets/founder.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

const stats = [
  { n: "150+", l: "Residences" },
  { n: "95+", l: "Acres" },
  { n: "100+", l: "Awards" },
  { n: "30+", l: "Years" },
];

const features = [
  {
    t: "Architectural integrity",
    d: "Every project begins with a master architect, not a marketer. Form follows life, not floorplate efficiency.",
  },
  {
    t: "Considered materials",
    d: "Indian stone, hardwoods, lime plaster, brass — chosen to age with grace, not to impress on day one.",
  },
  {
    t: "Resident-first planning",
    d: "We build communities at human scale, with light, air and quiet as non-negotiable design principles.",
  },
  {
    t: "Delivered, on time",
    d: "A three-decade record of handing over completed homes when promised, finished as drawn.",
  },
];

const leaders = [
  { img: leader1, name: "Vikram Anant", role: "Managing Director" },
  { img: leader2, name: "Anjali Mehra", role: "Chief Architect" },
  { img: leader3, name: "Rohan Kapoor", role: "Head of Design" },
];

const About = () => (
  <SiteLayout transparentNav>
    {/* Hero */}
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <img
        src={aboutHero}
        alt="Anant Estate masterplan"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-28 text-background">
        <p className="eyebrow text-background/70">About Anant</p>
        <h1 className="display-xl mt-6 max-w-3xl text-background">
          A practice rooted in restraint.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/80 leading-relaxed">
          Three decades of building homes that prefer silence over spectacle.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="section-y">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <p className="eyebrow-accent">Our Mission</p>
          <h2 className="display-lg mt-6">
            To build residences that <em className="not-italic text-accent">outlive</em> their era.
          </h2>
          <div className="mt-8 hairline" />
          <p className="mt-8 body-lead">
            Anant exists to author addresses of quiet consequence — homes that are honest in
            material, generous in proportion, and resolute in craft. We measure success not in
            launches, but in residences still admired thirty years on.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 border-t border-border pt-10">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-5xl md:text-6xl font-light">{s.n}</div>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="section-y bg-secondary/40">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={founder}
              alt="Founder"
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1350}
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow-accent">Our Founder</p>
          <h2 className="display-lg mt-6">A quiet conviction, patiently kept.</h2>
          <div className="mt-8 hairline" />
          <p className="mt-8 body-lead">
            Founded in 1995 by Rajesh Anant, the practice began with a single conviction —
            that real estate could be approached with the discipline of architecture, and the
            patience of a craftsman.
          </p>
          <p className="mt-6 body-lead">
            That conviction still guides every drawing, every site, every handover.
          </p>
        </div>
      </div>
    </section>

    {/* Why us */}
    <section className="section-y">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="eyebrow-accent">Why Anant</p>
          <h2 className="display-lg mt-6">The qualities we refuse to compromise.</h2>
          <div className="mt-8 hairline" />
          <p className="mt-8 body-lead">
            Four principles that separate an Anant address from the rest of the market.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((f, idx) => (
            <div key={f.t} className="border-t border-border pt-8">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-3xl text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{f.t}</h3>
                  <p className="mt-4 body-lead text-base">{f.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-y bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="eyebrow-accent">Our Leadership</p>
          <h2 className="display-lg mt-6">The hands behind the practice.</h2>
          <div className="mt-8 hairline" />
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((l) => (
            <div key={l.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={l.img}
                  alt={l.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl mt-6">{l.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default About;
