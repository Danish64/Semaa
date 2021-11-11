import React from 'react';
import * as Sentry from '@sentry/react-native';
import { LandingScreen } from 'screens/LandingScreen';

const App = () => {
  Sentry.init({
    dsn: 'https://98b293cd21f84ab59e1974d7b86f2de3@o1066794.ingest.sentry.io/6059836',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
  });
  return <LandingScreen />;
};

export default Sentry.wrap(App);
