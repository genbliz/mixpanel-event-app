"use client";

import mixpanel from "@/lib/mixpanel";

export default function useMixpanelEventTracking() {
  function trackEvent(name: string, props?: Record<string, unknown>) {
    mixpanel.track(name, props);
  }

  function identifyUser(id: string, traits?: Record<string, unknown>) {
    mixpanel.identify(id);
    if (traits) mixpanel.people.set(traits);
  }

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
  }

  return { trackEvent, identifyUser, identifyUserAddTrackEvent };
}
