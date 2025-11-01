"use client";

import { mixpanel, isMixpanelInitialized } from "@/lib/mixpanel";

export default function useMixpanelEventTracking() {
  function identifyUserAddTrackEvent({
    user,
    event,
  }: {
    user: {
      id: string;
      basicInfo?: {
        $email: string;
        $name: string;
      };
      otherInfo?: Record<string, unknown>;
    } | null;
    event: { name: string; data?: Record<string, unknown> };
  }) {
    if (!isMixpanelInitialized) return;

    try {
      if (user?.id) {
        mixpanel.identify(user.id);

        let infoData: Record<string, unknown> = {};

        if (user.otherInfo) {
          infoData = { ...infoData, ...user.otherInfo };
        }

        if (user.basicInfo) {
          infoData = { ...infoData, ...user.basicInfo };
        }

        if (Object.keys(infoData)) {
          mixpanel.people.set(infoData);
        }
      }
      if (event?.name) {
        mixpanel.track(event.name, event.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { identifyUserAddTrackEvent };
}
