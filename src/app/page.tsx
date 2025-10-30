"use client";

import { trackEvent, identifyUser } from "@/hooks/useAnalytics";

export default function HomePage() {
  const handleSignup = () => {
    identifyUser(`user-${Date.now()}`, {
      $email: "user@example.com",
      $name: "Chris Uzoh",
      plan: "Premium",
    });

    trackEvent("Signup Button Clicked", { plan: "Premium" });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome to My App</h1>
      <button onClick={handleSignup} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Sign Up
      </button>
    </main>
  );
}
