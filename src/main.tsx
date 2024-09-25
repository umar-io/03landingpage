import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { LandingLayout , Home }  from ".";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingLayout />} >
      <Route index element={<Home />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
