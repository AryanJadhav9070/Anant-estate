import SiteLayout from "@/components/site/SiteLayout";
import contactHero from "@/assets/contact-hero.jpg";
import { useState } from "react";
import { toast } from "sonner";

const offices = [
  { city: "Mumbai", addr: "Anant House, 14 Marine Drive, Mumbai 400020", tel: "+91 22 4000 1200" },
  { city: "Bangalore", addr: "Anant Studio, UB City, Vittal Mallya Road, Bangalore 560001", tel: "+91 80 4500 9000" },
  { city: "Goa", addr: "Anant Atelier, Cavelossim Beach Road, South Goa 403731", tel: "+91 832 660 4400" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you. A member of our private client team will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", project: "", message: "" });
  };

  return (
    <SiteLayout transparentNav>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src={contactHero}
          alt="Anant Estate offices"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-28 text-background">
          <p className="eyebrow text-background/70">Contact</p>
          <h1 className="display-xl mt-6 max-w-3xl text-background">
            A conversation, in confidence.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/80">
            Share a few details. We will respond personally — never with a script.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="section-y">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <p className="eyebrow-accent">Make an enquiry</p>
            <h2 className="display-md mt-6">Tell us about the home you imagine.</h2>
            <div className="mt-8 hairline" />

            <form onSubmit={submit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { k: "name", label: "Full Name", type: "text", req: true },
                { k: "email", label: "Email", type: "email", req: true },
                { k: "phone", label: "Phone", type: "tel", req: false },
                { k: "project", label: "Project of Interest", type: "text", req: false },
              ].map((f) => (
                <label key={f.k} className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    {f.label}
                  </span>
                  <input
                    required={f.req}
                    type={f.type}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base font-light focus:border-accent focus:outline-none transition-colors"
                  />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base font-light resize-none focus:border-accent focus:outline-none transition-colors"
                />
              </label>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="link-quiet text-foreground"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-border lg:pl-16 space-y-12">
            <div>
              <p className="eyebrow-accent">Private Client Desk</p>
              <p className="mt-6 font-serif text-2xl">+91 22 4000 1200</p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                enquiries@anantestate.com
              </p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Monday – Saturday, 10:00 – 19:00 IST
              </p>
            </div>

            <div className="space-y-10">
              {offices.map((o) => (
                <div key={o.city} className="border-t border-border pt-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-accent">{o.city}</p>
                  <p className="mt-3 font-light text-foreground leading-relaxed">{o.addr}</p>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{o.tel}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
