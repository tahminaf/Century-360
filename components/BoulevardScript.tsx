"use client";

import Script from "next/script";

const BLVD_BUSINESS_ID = "1b2ebb6a-8464-4101-b777-6e5630c95e37";

declare global {
  interface Window {
    blvd?: {
      init: (config: { businessId: string }) => void;
      openBookingWidget: (options?: Record<string, unknown>) => void;
    };
  }
}

export default function BoulevardScript() {
  return (
    <Script
      id="blvd-injector"
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.blvd?.init({ businessId: BLVD_BUSINESS_ID });
      }}
    />
  );
}