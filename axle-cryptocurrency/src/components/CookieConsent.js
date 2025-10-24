import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());

    // Enable analytics
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }

    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className='fixed bottom-0 left-0 right-0 z-50 bg-darkblue-secondary border-t border-white/10 shadow-2xl'
      role='region'
      aria-label='Cookie consent'
      aria-live='polite'
    >
      <div className='container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        {/* Message */}
        <div className='flex-1'>
          <p className='text-sm text-white mb-2'>
            <strong>We use cookies</strong> to enhance your experience and
            analyze our traffic.
          </p>
          <p className='text-xs text-gray-400'>
            By clicking "Accept All", you agree to our use of cookies.{" "}
            <a
              href='/privacy'
              className='text-blue hover:text-blue-hover transition underline'
            >
              Learn more
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className='flex gap-3 flex-shrink-0'>
          <button
            onClick={handleReject}
            className='px-6 py-2 rounded-full border border-gray hover:bg-white/5 text-white text-sm font-medium transition'
            aria-label='Reject cookies'
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className='px-6 py-2 rounded-full bg-blue hover:bg-blue-hover text-white text-sm font-medium transition'
            aria-label='Accept all cookies'
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
