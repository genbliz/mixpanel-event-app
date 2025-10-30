"use client";

import { ReactNode } from "react";
import { usePageTracking } from "@/hooks/useAnalytics";

export default function AnalyticsProvider({ children }: { children: ReactNode }) {
  usePageTracking();
  return <>{children}</>;
}
