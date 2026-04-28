import { Link } from "react-router-dom";

type Project = {
  image: string;
  name: string;
  location: string;
  meta: string;
};

const ProjectGrid = ({
  eyebrow,
  title,
  description,
  projects,
}: {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}) => (
  <section className="section-y bg-background">
    <div className="container-editorial">
      <div className="max-w-2xl mx-auto text-center">
        <p className="eyebrow-accent">{eyebrow}</p>
        <h2 className="display-lg mt-6">{title}</h2>
        <div className="mt-8 mx-auto hairline" />
        <p className="mt-8 body-lead">{description}</p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {projects.map((p) => (
          <Link
            to="/projects/serenity"
            key={p.name}
            className="group block"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover img-hover"
                width={1080}
                height={1440}
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.location}
                </p>
                <h3 className="font-serif text-2xl mt-2 leading-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light">{p.meta}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-foreground group-hover:text-accent transition-colors mt-1">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectGrid;
