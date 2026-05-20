import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Linux Process Health Monitor",
  description: "A lightweight Bash and Python hybrid CLI that continuously monitors critical system processes, logs anomalies, and sends a local desktop or webhook alert when a process goes down or spikes CPU/memory.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
