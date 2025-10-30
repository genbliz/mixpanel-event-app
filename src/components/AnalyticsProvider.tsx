"use client";

import { ReactNode } from "react";
import useMixpanelPageTracking from "@/hooks/useMixpanelPageTracking";

export default function AnalyticsProvider({ children }: { children: ReactNode }) {
  useMixpanelPageTracking();
  return <>{children}</>;
}
