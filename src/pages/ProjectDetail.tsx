import SiteLayout from "@/components/site/SiteLayout";
import projectHero from "@/assets/project-hero.jpg";
import p1 from "@/assets/project-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import c1 from "@/assets/construction-1.jpg";
import c2 from "@/assets/construction-2.jpg";
import c3 from "@/assets/construction-3.jpg";
import { Download } from "lucide-react";

const downloads = [
  { t: "Floor Plan", d: "Layouts and dimensions across all residence typologies." },
  { t: "Brochure", d: "The full editorial story of Anant Serenity, in print." },
  { t: "Master Plan", d: "Site planning, landscape and amenity overview." },
];

const places = [
  { t: "International Schools", d: "Three schools within a quiet six-minute drive." },
  { t: "Healthcare", d: "Tier-one hospitals accessible within the neighbourhood." },
  { t: "Commerce", d: "The city’s primary business districts, fifteen minutes away." },
  { t: "Leisure", d: "Promenades, galleries and dining quietly woven nearby." },
];

const galleries = [g1, g2, g3, g4, g5, g6];
const construction = [c1, c2, c3];

const ProjectDetail = () => (
  <SiteLayout transparentNav>
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={projectHero}
        alt="Anant Serenity"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/45" />
      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32 text-background">
        <p className="eyebrow text-background/70">Anant Serenity · Bandra, Mumbai</p>
        <h1 className="display-xl mt-6 max-w-3xl text-background">
          A residence composed in light and stone.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/80 leading-relaxed">
          3 &amp; 4 bedroom homes designed for those who measure luxury in silence.
        </p>
        <div className="mt-12 flex flex-wrap gap-10">
          <a href="#overview" className="link-quiet text-background">Project Overview</a>
          <a href="#gallery" className="link-quiet text-background/70 hover:text-background">View Gallery</a>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section id="overview" className="section-y">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow-accent">Project Overview</p>
          <h2 className="display-lg mt-6">An address shaped by quiet ambition.</h2>
          <div className="mt-8 hairline" />
          <p className="mt-8 body-lead">
            Anant Serenity rises along Bandra’s most considered avenue, a three-tower
            composition wrapped in Indian limestone and full-height glass. Inside, residences
            are arranged around generous central voids, drawing daylight through the heart of
            every home.
          </p>
          <p className="mt-6 body-lead">
            Twelve curated amenities, two acres of landscape, and a single, unhurried promise
            of craftsmanship.
          </p>
          <a
            href="/contact"
            className="mt-12 inline-flex link-quiet text-foreground"
          >
            Schedule a Private Visit
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={p1}
              alt="Project facade"
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1350}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Downloads */}
    <section className="section-y-sm bg-secondary/40">
      <div className="container-editorial grid grid-cols-1 md:grid-cols-3 gap-8">
        {downloads.map((d) => (
          <div
            key={d.t}
            className="bg-background border border-border p-8 md:p-10 flex flex-col"
          >
            <h3 className="font-serif text-2xl">{d.t}</h3>
            <p className="mt-4 text-sm font-light text-muted-foreground leading-relaxed flex-1">
              {d.d}
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground hover:text-accent transition-colors"
            >
              <Download size={14} /> Download
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* Gallery */}
    <section id="gallery" className="section-y">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow-accent">Gallery</p>
          <h2 className="display-lg mt-6">A walk through Serenity.</h2>
          <div className="mt-8 mx-auto hairline" />
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleries.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-muted">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover img-hover"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Nearby places */}
    <section className="section-y bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow-accent">Nearby</p>
          <h2 className="display-lg mt-6">A neighbourhood, not a postcode.</h2>
          <div className="mt-8 mx-auto hairline" />
          <p className="mt-8 body-lead">
            Surrounded by the quiet conveniences that make a city feel like home.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
            {places.slice(0, 2).map((p) => (
              <div key={p.t} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] bg-background border border-border flex items-center justify-center">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Map View</p>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
            {places.slice(2, 4).map((p) => (
              <div key={p.t} className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-[11px] uppercase tracking-[0.28em] text-accent">
          MahaRERA Registration · A51800012345
        </p>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-y">
      <div className="container-editorial max-w-3xl text-center">
        <p className="eyebrow-accent">In Their Words</p>
        <h2 className="display-md mt-6">Voices from Serenity.</h2>
        <div className="mt-8 mx-auto hairline" />
        <blockquote className="mt-16">
          <p className="font-serif text-2xl md:text-3xl font-light leading-[1.4] text-foreground/90">
            “The first home where the architecture meets you halfway. Everything is exactly as
            it should be — no more, no less.”
          </p>
          <footer className="mt-12">
            <p className="font-serif text-xl">Adam Smith</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Resident, Tower B
            </p>
          </footer>
        </blockquote>
      </div>
    </section>

    {/* Construction Update */}
    <section className="section-y bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow-accent">Construction Update</p>
          <h2 className="display-lg mt-6">Built before your eyes.</h2>
          <div className="mt-8 mx-auto hairline" />
          <p className="mt-8 body-lead">Quarterly progress, transparently shared.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {construction.map((src, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={src}
                  alt={`Construction ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover img-hover"
                  width={1280}
                  height={960}
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Q{i + 1} 2026 · Tower {String.fromCharCode(65 + i)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="section-y-sm">
      <div className="container-editorial max-w-3xl text-center">
        <p className="eyebrow">Disclaimer</p>
        <p className="mt-6 text-sm font-light text-muted-foreground leading-[1.8]">
          The images, plans, specifications and other details herein are indicative only,
          intended to convey design intent and the spirit of the development. The promoter
          reserves the right to make modifications, additions, deletions or alterations as may
          be required by statutory authorities. The dimensions, finishes, fittings and other
          particulars are subject to change without notice. Nothing on this page constitutes
          an offer or contract.
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default ProjectDetail;
