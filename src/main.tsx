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

/**
 * Setting the clerk publishable key in .env is ideal but having trouble with netlify deployments and since the variables are
 * statically replaced anyways, I will hardcode the key in here. Clerk explicity states that the publishable key can be safely
 * used in frontend code and shared without being kep secret.
 * */
// if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerkPubKey = "pk_test_c2Vuc2libGUtZ3J1Yi04OS5jbGVyay5hY2NvdW50cy5kZXYk";

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
