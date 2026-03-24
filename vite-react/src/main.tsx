import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Page } from "@/app/Page";
import { RootLayout } from "@/app/RootLayout";

import "@/app/styles/globals.css";

import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <Page />
    </RootLayout>
  </StrictMode>,
);
