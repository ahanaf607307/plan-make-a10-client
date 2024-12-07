

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="md:w-[800px] lg:w-[1024px] h-screen mx-auto flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div>
            <p className="text-2xl font-semibold text-gray-700 animate-pulse text-center">
              Loading...
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section>
            <Navbar />
          </section>
          <section className="flex-1">
            <Outlet />
          </section>
          <section>
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}

export default MainLayout;
