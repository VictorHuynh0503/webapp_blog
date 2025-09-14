import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggleCollapse }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      section: 'Main',
      items: [
        { path: '/homepage', label: 'Home', icon: 'Home', description: 'Dashboard overview' },
        { path: '/creator-studio', label: 'Create', icon: 'PenTool', description: 'Write & publish' },
        { path: '/topic-universes', label: 'Explore', icon: 'Compass', description: 'Discover content' },
        { path: '/reader-dashboard', label: 'Dashboard', icon: 'BarChart3', description: 'Analytics & insights' },
      ]
    },
    {
      section: 'Community',
      items: [
        { path: '/community-hub', label: 'Community', icon: 'Users', description: 'Connect with experts' },
        { path: '/creator-profiles', label: 'Profiles', icon: 'User', description: 'Expert profiles' },
      ]
    }
  ];

  const quickActions = [
    { label: 'New Article', icon: 'Plus', action: 'create-article' },
    { label: 'Bookmarks', icon: 'Bookmark', action: 'bookmarks' },
    { label: 'Drafts', icon: 'FileText', action: 'drafts' },
  ];

  const isActiveRoute = (path) => location?.pathname === path;
  const showExpanded = !isCollapsed || isHovered;

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border z-40 transition-all duration-300 ease-smooth ${
          isCollapsed ? 'w-16' : 'w-64'
        } lg:translate-x-0`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              {showExpanded && (
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Navigation
                </h2>
              )}
              {onToggleCollapse && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggleCollapse}
                  className="ml-auto"
                >
                  <Icon 
                    name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                    size={16} 
                  />
                </Button>
              )}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationItems?.map((section) => (
              <div key={section?.section} className="mb-6">
                {showExpanded && (
                  <h3 className="px-4 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {section?.section}
                  </h3>
                )}
                <nav className="space-y-1 px-2">
                  {section?.items?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        isActiveRoute(item?.path)
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-card-foreground hover:bg-muted hover:text-primary'
                      }`}
                      title={!showExpanded ? item?.label : ''}
                    >
                      <Icon 
                        name={item?.icon} 
                        size={18} 
                        className={`flex-shrink-0 ${
                          isActiveRoute(item?.path) ? 'text-primary-foreground' : ''
                        }`}
                      />
                      {showExpanded && (
                        <div className="ml-3 flex-1 min-w-0">
                          <div className="truncate">{item?.label}</div>
                          {item?.description && (
                            <div className="text-xs text-muted-foreground truncate">
                              {item?.description}
                            </div>
                          )}
                        </div>
                      )}
                      {showExpanded && isActiveRoute(item?.path) && (
                        <div className="w-1 h-1 bg-primary-foreground rounded-full ml-2" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="mt-8">
              {showExpanded && (
                <h3 className="px-4 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Quick Actions
                </h3>
              )}
              <div className="space-y-1 px-2">
                {quickActions?.map((action) => (
                  <button
                    key={action?.action}
                    onClick={() => handleQuickAction(action?.action)}
                    className="group w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-card-foreground hover:bg-muted hover:text-primary transition-all duration-200"
                    title={!showExpanded ? action?.label : ''}
                  >
                    <Icon name={action?.icon} size={18} className="flex-shrink-0" />
                    {showExpanded && (
                      <span className="ml-3 truncate">{action?.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border">
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className={`w-full ${showExpanded ? 'justify-start' : 'justify-center'}`}
                title={!showExpanded ? 'Settings' : ''}
              >
                <Icon name="Settings" size={16} />
                {showExpanded && <span className="ml-2">Settings</span>}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className={`w-full ${showExpanded ? 'justify-start' : 'justify-center'}`}
                title={!showExpanded ? 'Help' : ''}
              >
                <Icon name="HelpCircle" size={16} />
                {showExpanded && <span className="ml-2">Help</span>}
              </Button>
            </div>

            {showExpanded && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground truncate">
                      Expert User
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      Premium Member
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
      {/* Backdrop for mobile */}
      <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30" />
    </>
  );
};

export default Sidebar;