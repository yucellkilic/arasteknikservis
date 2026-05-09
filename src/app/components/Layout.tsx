import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Marquee } from "./Marquee";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Marquee />
      <Navbar />
      <main className="flex-1 pt-[116px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
