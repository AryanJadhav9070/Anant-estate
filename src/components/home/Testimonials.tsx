import { useState } from "react";

const items = [
  {
    quote:
      "Anant approached our home as a piece of architecture, not a transaction. The result is a house that grows quieter, and more beautiful, with time.",
    name: "Adam Smith",
    role: "Resident, Anant Sereno",
  },
  {
    quote:
      "Their craftsmanship is uncommon in this market. Every detail — the door pulls, the joinery, the way light falls in the morning — was considered.",
    name: "Clara Martin",
    role: "Resident, Heritage Tower",
  },
  {
    quote:
      "We have collected art for thirty years. Our Anant residence is the first home that has felt worthy of holding it.",
    name: "Edward James",
    role: "Resident, Anant Maraya",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  return (
    <section className="section-y bg-background">
      <div className="container-editorial max-w-4xl text-center">
        <p className="eyebrow-accent">In Their Words</p>
        <h2 className="display-md mt-6">Voices from within.</h2>
        <div className="mt-8 mx-auto hairline" />

        <blockquote className="mt-16">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-foreground/90">
            “{items[i].quote}”
          </p>
          <footer className="mt-12">
            <p className="font-serif text-xl">{items[i].name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {items[i].role}
            </p>
          </footer>
        </blockquote>

        <div className="mt-16 flex justify-center gap-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                i === idx ? "w-16 bg-foreground" : "w-8 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
