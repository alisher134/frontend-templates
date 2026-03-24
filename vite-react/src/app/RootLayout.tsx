import type { ReactNode } from "react";

import { AppProviders } from "@/appLayer/providers";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <AppProviders>{children}</AppProviders>
    </div>
  );
}
