import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ReaderDashboard from './pages/reader-dashboard';
import CreatorProfiles from './pages/creator-profiles';
import TopicUniverses from './pages/topic-universes';
import CreatorStudio from './pages/creator-studio';
import Homepage from './pages/homepage';
import CommunityHub from './pages/community-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CommunityHub />} />
        <Route path="/reader-dashboard" element={<ReaderDashboard />} />
        <Route path="/creator-profiles" element={<CreatorProfiles />} />
        <Route path="/topic-universes" element={<TopicUniverses />} />
        <Route path="/creator-studio" element={<CreatorStudio />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/community-hub" element={<CommunityHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
