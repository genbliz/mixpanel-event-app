"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import mixpanel from "@/lib/mixpanel";

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    mixpanel.track("Page Viewed", { path: url });
  }, [pathname, searchParams]);
}

export function trackEvent(name: string, props?: Record<string, unknown>) {
  mixpanel.track(name, props);
}

export function identifyUser(id: string, traits?: Record<string, unknown>) {
  mixpanel.identify(id);
  if (traits) mixpanel.people.set(traits);
}
