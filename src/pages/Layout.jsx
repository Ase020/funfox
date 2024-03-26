import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "../components";

const Layout = () => {
  return (
    <main className="m-auto border my-20 max-w-6xl bg-bgCover h-[834px] w-full flex flex-col pb-3 relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
