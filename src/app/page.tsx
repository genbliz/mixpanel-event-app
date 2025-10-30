"use client";

import useMixpanelEventTracking from "@/hooks/useMixpanelEventTracking";
import { DefinedEventNames } from "../helpers/defined-events";

export default function HomePage() {
  const { identifyUserAddTrackEvent } = useMixpanelEventTracking();

  const handleSignup = () => {
    identifyUserAddTrackEvent({
      user: {
        id: `user_id_${Date.now()}` /** This should be real user Id */,
        basicInfo: {
          $email: "chrisa@example.com",
          $name: "Chris Uzoh",
        },
        otherInfo: { subscription: "Premium" },
      },
      event: {
        name: DefinedEventNames.SIGNUP_BUTTON_CLICKED,
      },
    });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Event App</h1>
      <button onClick={handleSignup} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Sign Up Track
      </button>
    </main>
  );
}
