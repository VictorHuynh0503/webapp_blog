import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SidebarPanel = ({ onAction }) => {
  const [activeTab, setActiveTab] = useState('outline');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tabs = [
    { id: 'outline', name: 'Outline', icon: 'List' },
    { id: 'media', name: 'Media', icon: 'Image' },
    { id: 'settings', name: 'Settings', icon: 'Settings' },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3' }
  ];

  const outlineItems = [
    { id: 1, level: 1, title: 'Introduction', type: 'heading' },
    { id: 2, level: 2, title: 'Key Performance Concepts', type: 'heading' },
    { id: 3, level: 3, title: 'Virtual DOM Optimization', type: 'heading' },
    { id: 4, level: 3, title: 'Memoization Strategies', type: 'heading' },
    { id: 5, level: 3, title: 'Code Splitting', type: 'heading' },
    { id: 6, level: 2, title: 'Mathematical Analysis', type: 'heading' },
    { id: 7, level: 2, title: 'Best Practices Checklist', type: 'heading' },
    { id: 8, level: 1, title: 'Conclusion', type: 'heading' }
  ];

  const mediaItems = [
    {
      id: 1,
      name: 'react-performance-chart.png',
      type: 'image',
      size: '245 KB',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      used: true
    },
    {
      id: 2,
      name: 'optimization-diagram.svg',
      type: 'image',
      size: '89 KB',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      used: false
    },
    {
      id: 3,
      name: 'code-example.js',
      type: 'code',
      size: '12 KB',
      used: true
    }
  ];

  const analyticsData = {
    views: 1247,
    engagement: 8.4,
    readTime: 6.2,
    shares: 23,
    comments: 12,
    bookmarks: 45
  };

  const renderOutlineTab = () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-card-foreground">Document Outline</h3>
        <Button variant="ghost" size="sm" onClick={() => onAction('generateOutline')}>
          <Icon name="Sparkles" size={14} />
        </Button>
      </div>
      
      <div className="space-y-1">
        {outlineItems?.map((item) => (
          <div
            key={item?.id}
            className={`flex items-center space-x-2 p-2 rounded-md hover:bg-muted cursor-pointer transition-colors ${
              item?.level === 1 ? 'font-medium' : item?.level === 2 ? 'ml-4' : 'ml-8'
            }`}
            onClick={() => onAction('jumpToSection', item?.id)}
          >
            <Icon 
              name={item?.level === 1 ? 'Hash' : item?.level === 2 ? 'Minus' : 'Dot'} 
              size={12} 
              className="text-muted-foreground" 
            />
            <span className="text-sm text-card-foreground truncate">{item?.title}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <Button variant="outline" size="sm" fullWidth onClick={() => onAction('exportOutline')}>
          <Icon name="Download" size={14} className="mr-2" />
          Export Outline
        </Button>
      </div>
    </div>
  );

  const renderMediaTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-card-foreground">Media Library</h3>
        <Button variant="ghost" size="sm" onClick={() => onAction('uploadMedia')}>
          <Icon name="Plus" size={14} />
        </Button>
      </div>

      <div className="space-y-3">
        {mediaItems?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center space-x-3 p-3 border border-border rounded-md hover:bg-muted/50 transition-colors"
          >
            <div className="flex-shrink-0">
              {item?.type === 'image' ? (
                <div className="w-10 h-10 bg-muted rounded overflow-hidden">
                  <img 
                    src={item?.url} 
                    alt={item?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Icon name="FileCode" size={16} className="text-primary" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">{item?.name}</p>
              <p className="text-xs text-muted-foreground">{item?.size}</p>
            </div>
            
            <div className="flex items-center space-x-1">
              {item?.used && (
                <div className="w-2 h-2 bg-success rounded-full" title="Used in document" />
              )}
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Icon name="MoreVertical" size={12} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" size="sm" fullWidth onClick={() => onAction('manageMedia')}>
        <Icon name="FolderOpen" size={14} className="mr-2" />
        Manage All Media
      </Button>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-card-foreground mb-3">Publishing Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-card-foreground">Auto-save</span>
            <div className="w-8 h-4 bg-primary rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-card-foreground">Comments</span>
            <div className="w-8 h-4 bg-primary rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-card-foreground">SEO optimization</span>
            <div className="w-8 h-4 bg-muted rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-card-foreground mb-3">Content Settings</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-card-foreground block mb-1">Category</label>
            <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground text-sm">
              <option>Engineering</option>
              <option>Mathematics</option>
              <option>Nutrition</option>
              <option>Research</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm text-card-foreground block mb-1">Tags</label>
            <input
              type="text"
              placeholder="react, performance, optimization"
              className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-card-foreground mb-3">Collaboration</h3>
        <Button variant="outline" size="sm" fullWidth>
          <Icon name="UserPlus" size={14} className="mr-2" />
          Invite Collaborators
        </Button>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-card-foreground mb-3">Performance Metrics</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-2xl font-bold text-primary">{analyticsData?.views}</div>
            <div className="text-xs text-muted-foreground">Views</div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-2xl font-bold text-success">{analyticsData?.engagement}%</div>
            <div className="text-xs text-muted-foreground">Engagement</div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-2xl font-bold text-warning">{analyticsData?.readTime}m</div>
            <div className="text-xs text-muted-foreground">Avg. Read</div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-2xl font-bold text-accent">{analyticsData?.shares}</div>
            <div className="text-xs text-muted-foreground">Shares</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-card-foreground mb-3">Engagement</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-card-foreground">Comments</span>
            <span className="text-sm font-medium text-primary">{analyticsData?.comments}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-card-foreground">Bookmarks</span>
            <span className="text-sm font-medium text-success">{analyticsData?.bookmarks}</span>
          </div>
        </div>
      </div>

      <Button variant="outline" size="sm" fullWidth>
        <Icon name="TrendingUp" size={14} className="mr-2" />
        View Full Analytics
      </Button>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'outline': return renderOutlineTab();
      case 'media': return renderMediaTab();
      case 'settings': return renderSettingsTab();
      case 'analytics': return renderAnalyticsTab();
      default: return renderOutlineTab();
    }
  };

  if (isCollapsed) {
    return (
      <div className="w-12 bg-card border-r border-border flex flex-col items-center py-4 space-y-4">
        {tabs?.map((tab) => (
          <Button
            key={tab?.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              setActiveTab(tab?.id);
              setIsCollapsed(false);
            }}
            title={tab?.name}
            className="h-8 w-8 p-0"
          >
            <Icon name={tab?.icon} size={16} />
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          title="Expand sidebar"
          className="h-8 w-8 p-0 mt-auto"
        >
          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex space-x-1">
          {tabs?.map((tab) => (
            <Button
              key={tab?.id}
              variant={activeTab === tab?.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab?.id)}
              className="h-8 px-2"
            >
              <Icon name={tab?.icon} size={14} className="mr-1" />
              <span className="text-xs">{tab?.name}</span>
            </Button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(true)}
          title="Collapse sidebar"
          className="h-8 w-8 p-0"
        >
          <Icon name="ChevronLeft" size={16} />
        </Button>
      </div>
      {/* Tab Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SidebarPanel;