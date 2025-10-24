/**
 * Google Analytics 4 Setup Instructions
 *
 * 1. Install Google Analytics Library (if not already installed):
 *    npm install react-ga4
 *
 * 2. Add this code to your public/index.html before closing </head> tag:
 *
 * <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *   gtag('js', new Date());
 *   gtag('config', 'G-YOUR_MEASUREMENT_ID');
 * </script>
 *
 * 3. In src/App.js or index.js, initialize GA4:
 *
 * import ReactGA from "react-ga4";
 *
 * ReactGA.initialize("G-YOUR_MEASUREMENT_ID");
 *
 * 4. Track page views in Router setup or after navigation:
 *
 * useEffect(() => {
 *   ReactGA.send(pageview);
 * }, [location]);
 *
 * 5. Track custom events:
 *
 * ReactGA.event({
 *   category: "engagement",
 *   action: "subscribe_newsletter",
 *   label: "email_signup"
 * });
 */

export const gaConfig = {
  measurementId: process.env.REACT_APP_GA_ID || "G-YOUR_MEASUREMENT_ID",

  // Event tracking examples
  events: {
    subscribe: () => {
      if (window.gtag) {
        window.gtag("event", "newsletter_subscribe", {
          event_category: "engagement",
          event_label: "email_subscription",
        });
      }
    },

    startMining: (cryptoType) => {
      if (window.gtag) {
        window.gtag("event", "start_mining", {
          event_category: "user_action",
          event_label: cryptoType,
        });
      }
    },

    calculateProfit: (hashRate, unit) => {
      if (window.gtag) {
        window.gtag("event", "calculate_profit", {
          event_category: "calculator",
          hash_rate: hashRate,
          unit: unit,
        });
      }
    },

    clickCTA: (location) => {
      if (window.gtag) {
        window.gtag("event", "cta_click", {
          event_category: "conversion",
          event_label: location,
        });
      }
    },
  },

  // Custom conversion tracking
  setUserId: (userId) => {
    if (window.gtag) {
      window.gtag("config", {
        user_id: userId,
      });
    }
  },
};

export default gaConfig;
