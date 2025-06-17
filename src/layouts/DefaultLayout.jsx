import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>
      {/* 
      <footer className="container m-2">footer</footer> */}
    </>
  );
}
