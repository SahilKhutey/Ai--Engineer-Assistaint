import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antigravity Engineering Intelligence OS",
  description: "Sovereign AI-Native Workstation & CAD Simulation cockpit, Phase 55 Hardened Operations Interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
