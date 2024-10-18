import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutBase = () => {
  return (
    <>
      <header className="flex gap-2 bg-amber-200 py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">React Router DOM</h1>

          <nav className="flex gap-4">
            <Link to="/">Inicio</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto ">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutBase;
