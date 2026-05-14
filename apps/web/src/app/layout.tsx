import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import EngineeringOSShell from "../components/EngineeringOSShell";
import { EngineeringRuntimeOrchestrator } from "../services/EngineeringRuntimeOrchestrator";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antigravity | Engineering OS",
  description: "Sovereign Engineering Intelligence Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <EngineeringRuntimeOrchestrator />
          <EngineeringOSShell>
            {children}
          </EngineeringOSShell>
        </Providers>
      </body>
    </html>
  );
}
