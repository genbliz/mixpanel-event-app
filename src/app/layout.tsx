import type { Metadata } from "next";
import MixpanelAnalyticsProvider from "@/components/MixpanelAnalyticsProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Example with Mixpanel integration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MixpanelAnalyticsProvider>{children}</MixpanelAnalyticsProvider>
      </body>
    </html>
  );
}
