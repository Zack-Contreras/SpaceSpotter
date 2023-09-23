import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NavbarPage from "./components/NavbarPage.tsx";
import Astronauts from "./routes/Astronauts/Astronauts.tsx";
import Profile from "./routes/Profile.tsx";
import SpaceStation from "./routes/SpaceStation.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { AnimatePresence } from "framer-motion";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Create react-query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavbarPage>
        <Profile />
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <QueryClientProvider client={queryClient}>
          <AnimatePresence mode="wait">
            <RouterProvider router={router} />
          </AnimatePresence>
        </QueryClientProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>
);
