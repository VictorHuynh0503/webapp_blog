import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import TemplateLibrary from './components/TemplateLibrary';
import EditorToolbar from './components/EditorToolbar';
import ContentEditor from './components/ContentEditor';
import SidebarPanel from './components/SidebarPanel';
import PublishModal from './components/PublishModal';

const CreatorStudio = () => {
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [content, setContent] = useState('');
  const [activeFormats, setActiveFormats] = useState([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState(new Date());

  // Mock user data
  const currentUser = {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@blogcraft.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    role: "Expert Creator",
    articlesPublished: 47,
    totalViews: 125000,
    followers: 2340
  };

  // Recent drafts mock data
  const recentDrafts = [
    {
      id: 1,
      title: "Advanced React Patterns for Scalable Applications",
      lastModified: new Date(Date.now() - 3600000), // 1 hour ago
      wordCount: 2847,
      category: "Engineering"
    },
    {
      id: 2,
      title: "Mathematical Foundations of Machine Learning",
      lastModified: new Date(Date.now() - 86400000), // 1 day ago
      wordCount: 1923,
      category: "Mathematics"
    },
    {
      id: 3,
      title: "Nutritional Genomics: The Future of Personalized Diet",
      lastModified: new Date(Date.now() - 172800000), // 2 days ago
      wordCount: 3156,
      category: "Nutrition"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-save functionality
  useEffect(() => {
    if (content) {
      const saveTimer = setTimeout(() => {
        setLastSaved(new Date());
        // Here you would typically save to backend
        console.log('Auto-saved content');
      }, 2000);

      return () => clearTimeout(saveTimer);
    }
  }, [content]);

  const handleTemplateSelect = (template) => {
    console.log('Selected template:', template);
    setShowTemplateLibrary(false);
    // Here you would load the template content
    setContent(`# ${template?.name}\n\n${template?.preview}\n\n## Getting Started\n\nStart writing your content here...`);
  };

  const handleEditorAction = (action, data) => {
    console.log('Editor action:', action, data);
    
    switch (action) {
      case 'save':
        setLastSaved(new Date());
        break;
      case 'publish':
        setShowPublishModal(true);
        break;
      case 'preview':
        // Handle preview mode
        break;
      case 'undo':
        setCanUndo(false);
        setCanRedo(true);
        break;
      case 'redo':
        setCanRedo(false);
        setCanUndo(true);
        break;
      default:
        // Handle formatting actions
        break;
    }
  };

  const handleSidebarAction = (action, data) => {
    console.log('Sidebar action:', action, data);
    
    switch (action) {
      case 'jumpToSection':
        // Scroll to section
        break;
      case 'uploadMedia':
        // Open media upload dialog
        break;
      case 'generateOutline':
        // Generate outline from content
        break;
      default:
        break;
    }
  };

  const handlePublish = (publishData) => {
    console.log('Publishing article:', publishData);
    // Here you would send the data to your backend
    alert('Article published successfully!');
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Creator Studio...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar Panel */}
        <SidebarPanel onAction={handleSidebarAction} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Welcome Section - Only show when no content */}
          {!content && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="PenTool" size={32} className="text-primary" />
                  </div>
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    Welcome to Creator Studio
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Your sophisticated authoring environment for technical and creative content. 
                    Choose a template to get started or begin with a blank document.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Button
                    variant="outline"
                    className="h-24 flex-col space-y-2"
                    onClick={() => setShowTemplateLibrary(true)}
                  >
                    <Icon name="FileTemplate" size={24} />
                    <span>Choose Template</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-24 flex-col space-y-2"
                    onClick={() => setContent('# New Article\n\nStart writing your content here...')}
                  >
                    <Icon name="Plus" size={24} />
                    <span>Blank Document</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-24 flex-col space-y-2"
                    onClick={() => console.log('Import document')}
                  >
                    <Icon name="Upload" size={24} />
                    <span>Import Document</span>
                  </Button>
                </div>

                {/* Recent Drafts */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-foreground">Recent Drafts</h2>
                    <Link to="/creator-profiles" className="text-primary hover:text-primary/80 text-sm font-medium">
                      View all drafts
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recentDrafts?.map((draft) => (
                      <div
                        key={draft?.id}
                        className="bg-card border border-border rounded-lg p-4 hover:shadow-intellectual transition-shadow cursor-pointer"
                        onClick={() => setContent(`# ${draft?.title}\n\nContinue writing your article...`)}
                      >
                        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">
                          {draft?.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{draft?.wordCount} words</span>
                          <span>{formatTimeAgo(draft?.lastModified)}</span>
                        </div>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {draft?.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Stats */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-center space-x-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentUser?.articlesPublished}</div>
                      <div className="text-sm text-muted-foreground">Articles Published</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">{currentUser?.totalViews?.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{currentUser?.followers?.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Editor Interface - Show when content exists */}
          {content && (
            <>
              <EditorToolbar
                onAction={handleEditorAction}
                activeFormats={activeFormats}
                canUndo={canUndo}
                canRedo={canRedo}
              />
              <ContentEditor
                content={content}
                onChange={setContent}
                onFormatChange={setActiveFormats}
                activeFormats={activeFormats}
              />
            </>
          )}
        </div>
      </div>
      {/* Modals */}
      <TemplateLibrary
        isVisible={showTemplateLibrary}
        onClose={() => setShowTemplateLibrary(false)}
        onSelectTemplate={handleTemplateSelect}
      />
      <PublishModal
        isVisible={showPublishModal}
        onClose={() => setShowPublishModal(false)}
        onPublish={handlePublish}
      />
      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span>Last saved: {formatTimeAgo(lastSaved)}</span>
            <span>•</span>
            <span>Connected</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>BlogCraft Creator Studio v2.1.0</span>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <Icon name="HelpCircle" size={12} className="mr-1" />
              Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorStudio;