import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;

if (typeof window !== "undefined") {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV !== "production",
    track_pageview: false, // We'll handle this manually
  });

  mixpanel.register({
    app_version: "1.0.0",
    platform: "Web",
  });
}

export default mixpanel;
