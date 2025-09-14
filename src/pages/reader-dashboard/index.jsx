import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all dashboard components
import PersonalizedFeed from './components/PersonalizedFeed';
import ReadingProgress from './components/ReadingProgress';
import CrossConnections from './components/CrossConnections';
import SubscriptionManager from './components/SubscriptionManager';
import KnowledgeGraph from './components/KnowledgeGraph';
import CommunityEngagement from './components/CommunityEngagement';
import PremiumFeatures from './components/PremiumFeatures';

const ReaderDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('overview');

  const dashboardViews = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'feed', label: 'My Feed', icon: 'Rss' },
    { id: 'progress', label: 'Progress', icon: 'TrendingUp' },
    { id: 'connections', label: 'Cross-Connections', icon: 'GitBranch' },
    { id: 'subscriptions', label: 'Subscriptions', icon: 'Bell' },
    { id: 'knowledge', label: 'Knowledge Graph', icon: 'Network' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'premium', label: 'Premium', icon: 'Crown' }
  ];

  const quickStats = [
    {
      label: 'Articles Read',
      value: '127',
      change: '+12 this week',
      icon: 'BookOpen',
      color: 'bg-blue-500'
    },
    {
      label: 'Reading Streak',
      value: '23 days',
      change: 'Personal best!',
      icon: 'Flame',
      color: 'bg-orange-500'
    },
    {
      label: 'Topics Explored',
      value: '8',
      change: '+2 new topics',
      icon: 'Compass',
      color: 'bg-green-500'
    },
    {
      label: 'Community Points',
      value: '1,247',
      change: '+89 this week',
      icon: 'Award',
      color: 'bg-purple-500'
    }
  ];

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, Expert Reader!</h1>
            <p className="text-blue-100 mb-4">
              You've made incredible progress in your learning journey. Here's what's new today.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={16} />
                <span>Today: {new Date()?.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>15 min reading goal today</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats?.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${stat?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={stat?.icon} size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat?.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat?.value}</p>
                <p className="text-xs text-green-600">{stat?.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity Preview */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Button variant="outline" size="sm" onClick={() => setActiveView('progress')}>
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Check" size={16} className="text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Completed: Neural Networks Fundamentals</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="BookOpen" size={16} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Started: Quantum Computing Applications</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={16} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Joined discussion: ML in Nutrition</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended for You */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recommended for You</h2>
            <Button variant="outline" size="sm" onClick={() => setActiveView('feed')}>
              View Feed
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-3">
              <div className="w-16 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  Advanced Calculus for Machine Learning Engineers
                </h3>
                <p className="text-xs text-gray-500 mt-1">Dr. Sarah Mitchell • 25 min read</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-16 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  Sustainable Materials in Modern Architecture
                </h3>
                <p className="text-xs text-gray-500 mt-1">Marcus Johnson • 18 min read</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  Precision Nutrition: The Future of Health
                </h3>
                <p className="text-xs text-gray-500 mt-1">Dr. Lisa Rodriguez • 22 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Goals */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Learning Goals</h2>
          <Button variant="outline" size="sm">
            <Icon name="Target" size={16} className="mr-2" />
            Set Goals
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-blue-900">Weekly Reading</h3>
              <span className="text-xs text-blue-700">80%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }} />
            </div>
            <p className="text-xs text-blue-700">12 of 15 articles</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-green-900">New Topics</h3>
              <span className="text-xs text-green-700">100%</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-xs text-green-700">2 of 2 topics explored</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-purple-900">Community</h3>
              <span className="text-xs text-purple-700">60%</span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }} />
            </div>
            <p className="text-xs text-purple-700">3 of 5 discussions joined</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return renderOverview();
      case 'feed':
        return <PersonalizedFeed />;
      case 'progress':
        return <ReadingProgress />;
      case 'connections':
        return <CrossConnections />;
      case 'subscriptions':
        return <SubscriptionManager />;
      case 'knowledge':
        return <KnowledgeGraph />;
      case 'community':
        return <CommunityEngagement />;
      case 'premium':
        return <PremiumFeatures />;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          onToggleCollapse={toggleSidebar}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        } lg:ml-64`}>
          <div className="p-6">
            {/* Dashboard Navigation */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Reader Dashboard</h1>
                  <p className="text-gray-600">Your personalized learning command center</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Search" size={16} className="mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* View Navigation */}
              <div className="flex space-x-1 bg-white border border-gray-200 rounded-lg p-1 overflow-x-auto">
                {dashboardViews?.map((view) => (
                  <button
                    key={view?.id}
                    onClick={() => setActiveView(view?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeView === view?.id
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon name={view?.icon} size={16} />
                    <span>{view?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active View Content */}
            <div className="min-h-[calc(100vh-200px)]">
              {renderActiveView()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReaderDashboard;