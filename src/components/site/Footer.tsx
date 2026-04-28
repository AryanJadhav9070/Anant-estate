import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em] uppercase">
              Anant <span className="text-[10px] tracking-[0.4em] opacity-70">ESTATE</span>
            </Link>
            <p className="mt-6 max-w-sm body-lead text-sm">
              Crafted living, designed with precision. We build timeless spaces for those
              who value restraint, light, and lasting craftsmanship.
            </p>
            <div className="mt-10">
              <p className="eyebrow">Newsletter</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex max-w-sm items-center border-b border-foreground/30"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent py-3 text-sm font-light placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.28em] text-foreground hover:text-accent transition-colors py-3"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3 text-sm font-light">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/projects/serenity" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Legacy</p>
            <ul className="mt-6 space-y-3 text-sm font-light">
              <li><a className="hover:text-accent transition-colors" href="#">Craftsmanship</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Sustainability</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Press</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Visit</p>
            <address className="mt-6 not-italic text-sm font-light leading-relaxed text-muted-foreground">
              Anant House, 14 Marine Drive<br />
              Mumbai 400020, India
            </address>
            <p className="mt-4 text-sm font-light">+91 22 4000 1200</p>
            <p className="text-sm font-light">enquiries@anantestate.com</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <p>© {new Date().getFullYear()} Anant Estate Developers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
