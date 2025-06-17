import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";

import MoviePage from "./pages/MoviePage";

import DefaultLayout from "./layouts/DefaultLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>

            <Route path="/movies">
              <Route path=":id" element={<MoviePage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
