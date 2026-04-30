import chairman from "@/assets/chairman.jpg";

const stats = [
  { n: "150+", l: "Residences delivered" },
  { n: "95+", l: "Acres developed" },
  { n: "100+", l: "Design awards" },
  { n: "30+", l: "Years of practice" },
];

const Chairman = () => (
  <section className="section-y bg-secondary/40">
    <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-7">
        <p className="eyebrow-accent">Chairman’s Message</p>
        <h2 className="display-lg mt-6">
          “We do not sell square feet.<br />We compose <em className="not-italic text-accent">homes</em>.”
        </h2>
        <div className="mt-8 hairline" />
        <p className="mt-8 body-lead max-w-xl">
          For thirty years, our practice has been rooted in patience — in the conviction that a
          residence should age gracefully, that materials should reveal themselves slowly, and
          that the best architecture quietly disappears into life.
        </p>
        <p className="mt-8 text-sm tracking-[0.18em] uppercase text-muted-foreground">
          — Nandkishor Patil, Chairman
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-border pt-10">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-serif text-4xl md:text-5xl font-light text-foreground">
                {s.n}
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={chairman}
            alt="Chairman"
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

export default Chairman;
