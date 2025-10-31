"use client";

import { ReactNode } from "react";
import useMixpanelPageTracking from "@/hooks/useMixpanelPageTracking";

export default function MixpanelAnalyticsProvider({ children }: { children: ReactNode }) {
  useMixpanelPageTracking();
  return <>{children}</>;
}
