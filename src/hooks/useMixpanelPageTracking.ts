"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import mixpanel from "@/lib/mixpanel";
import { DefinedEventNames } from "../helpers/defined-events";

export default function useMixpanelPageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    mixpanel.track(DefinedEventNames.PAGE_VIEWED, { path: url });
  }, [pathname, searchParams]);
}
