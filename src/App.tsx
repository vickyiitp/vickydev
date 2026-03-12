/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalBackground from './components/GlobalBackground';

// Lazy load components below the fold for better performance
const AuthoritySnapshot = React.lazy(() => import('./components/AuthoritySnapshot'));
const GamingTools = React.lazy(() => import('./components/GamingTools'));
const SystemArchitecture = React.lazy(() => import('./components/SystemArchitecture'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const LiveRatings = React.lazy(() => import('./components/LiveRatings'));
const Contact = React.lazy(() => import('./components/Contact'));

// Loading fallback for Suspense
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary-royal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="bg-transparent text-text-silver font-sans selection:bg-primary-royal/30 selection:text-white relative z-0">
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <AuthoritySnapshot />
          <GamingTools />
          <SystemArchitecture />
          <Portfolio />
          <LiveRatings />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
