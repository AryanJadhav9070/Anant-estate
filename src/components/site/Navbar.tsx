import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects/serenity", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ overlay = true }: { overlay?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = !overlay || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link
          to="/"
          className={`font-serif text-xl tracking-[0.18em] uppercase transition-colors ${
            solid ? "text-foreground" : "text-background"
          }`}
        >
          Anant
          <span className="ml-2 text-[10px] tracking-[0.4em] opacity-70 align-middle">ESTATE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.28em] transition-colors ${
                  solid
                    ? isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                    : isActive ? "text-accent" : "text-background/80 hover:text-background"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex link-quiet ${solid ? "text-foreground" : "text-background"}`}
        >
          Enquire
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-foreground" : "text-background"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-editorial py-8 flex flex-col gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="text-sm uppercase tracking-[0.28em] text-foreground/80"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
