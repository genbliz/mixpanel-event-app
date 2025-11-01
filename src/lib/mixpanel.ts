import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;

let isMixpanelInitialized = false;

if (typeof window !== "undefined" && MIXPANEL_TOKEN) {
  try {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV !== "production",
      track_pageview: false,
    });

    mixpanel.register({
      app_version: "1.0.0",
      platform: "Web",
    });

    isMixpanelInitialized = true;
  } catch (error) {
    console.error(error);
  }
}

export { mixpanel, isMixpanelInitialized };
