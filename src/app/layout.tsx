import type { Metadata } from "next";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Example with Mixpanel integration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
