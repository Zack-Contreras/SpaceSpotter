import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import NavbarPage from "./components/NavbarPage.tsx";
import Astronauts from "./routes/Astronauts.tsx";
import Profile from "./routes/Profile.tsx";
import SpaceStation from "./routes/SpaceStation.tsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

// Create react-query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavbarPage>
        <App />
      </NavbarPage>
    ),
  },
  {
    path: "/spacestation",
    element: (
      <NavbarPage>
        <SpaceStation />
      </NavbarPage>
    ),
  },
  {
    path: "/astronauts",
    element: (
      <NavbarPage>
        <Astronauts />
      </NavbarPage>
    ),
  },
  {
    path: "/profile",
    element: (
      <NavbarPage>
        <Profile />
      </NavbarPage>
    ),
  },
  {
    path: "/astronauts",
    element: (
      <NavbarPage>
        <Astronauts />
      </NavbarPage>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
