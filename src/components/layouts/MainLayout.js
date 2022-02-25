import React from "react";
import { Email, Head, SocialLinks } from "..";
// import Footer from "../sections/Footer";

export default function MainLayout({ children, location }) {
  const isHome = location.pathname === "/";

  return (
    <div className="mx-auto px-7 sm:px-10 md:px-28 lg:px-40 max-w-screen-2xl min-h-screen">
      <Head />
      <div id="root">
        <SocialLinks isHome={isHome} />
        <Email isHome={isHome} />
        <div className="flex flex-col min-h-screen">
          <main className="mx-auto w-full max-w-screen-2xl">{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
