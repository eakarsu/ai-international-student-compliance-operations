import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "International Student Compliance Operations",
  description: "Coordinate enrollment events, document expirations, employment evidence, student requests and authorized SEVIS reporting queues.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
<script src="/feature-pack/feature-pack.js" defer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
