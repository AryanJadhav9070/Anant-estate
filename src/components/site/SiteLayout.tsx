import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = ({ children, transparentNav = true }: { children: ReactNode; transparentNav?: boolean }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar overlay={transparentNav} />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default SiteLayout;
