import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      {/* 
      <footer className="container m-2">footer</footer> */}
    </>
  );
}
