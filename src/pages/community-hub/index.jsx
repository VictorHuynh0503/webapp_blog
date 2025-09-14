import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import DiscussionCard from './components/DiscussionCard';
import ExpertCard from './components/ExpertCard';
import TrendingTopics from './components/TrendingTopics';
import ActivityFeed from './components/ActivityFeed';
import DomainFilter from './components/DomainFilter';
import ExpertAMA from './components/ExpertAMA';

const CommunityHub = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState(['All']);
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for discussions
  const mockDiscussions = [
    {
      id: 1,
      title: "Quantum Computing Applications in Cryptography: Breaking RSA Encryption",
      preview: "Recent advances in quantum computing pose significant challenges to current cryptographic methods. Let's discuss the implications and potential solutions for post-quantum cryptography.",
      domain: "Computer Science",
      author: {
        id: "expert-1",
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        expertiseLevel: "Expert",
        credentials: "PhD Quantum Computing, MIT"
      },
      replies: 47,
      participants: 23,
      views: 1247,
      createdAt: new Date(Date.now() - 3600000),
      lastActivity: new Date(Date.now() - 900000),
      recentReplies: 3,
      isPinned: true,
      isExpertLed: true,
      hasCode: true,
      hasMath: true,
      isBookmarked: false
    },
    {
      id: 2,
      title: "Sustainable Engineering: Biomimetic Materials for Green Construction",
      preview: "Exploring how nature-inspired materials can revolutionize sustainable construction practices. From self-healing concrete to adaptive building skins.",
      domain: "Engineering",
      author: {
        id: "expert-2",
        name: "Prof. Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        expertiseLevel: "Expert",
        credentials: "Professor of Materials Science, Stanford"
      },
      replies: 32,
      participants: 18,
      views: 892,
      createdAt: new Date(Date.now() - 7200000),
      lastActivity: new Date(Date.now() - 1800000),
      recentReplies: 2,
      isPinned: false,
      isExpertLed: true,
      hasCode: false,
      hasMath: false,
      isBookmarked: true
    },
    {
      id: 3,
      title: "Nutritional Genomics: Personalized Diet Based on Genetic Markers",
      preview: "How genetic variations affect nutrient metabolism and the future of personalized nutrition recommendations.",
      domain: "Nutrition",
      author: {
        id: "expert-3",
        name: "Dr. Emily Watson",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150",
        expertiseLevel: "Expert",
        credentials: "PhD Nutritional Biochemistry, Harvard"
      },
      replies: 28,
      participants: 15,
      views: 634,
      createdAt: new Date(Date.now() - 10800000),
      lastActivity: new Date(Date.now() - 3600000),
      recentReplies: 1,
      isPinned: false,
      isExpertLed: false,
      hasCode: false,
      hasMath: true,
      isBookmarked: false
    }
  ];

  // Mock data for experts
  const mockExperts = [
    {
      id: "expert-1",
      name: "Dr. Sarah Chen",
      title: "Quantum Computing Researcher",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      bio: "Leading researcher in quantum algorithms and cryptography with 15+ years of experience in quantum computing applications.",
      domains: ["Computer Science", "Mathematics", "Physics"],
      followers: 2847,
      rating: 4.9,
      status: "online",
      isFollowing: false,
      stats: {
        discussions: 156,
        answers: 423,
        upvotes: 1847
      },
      recentActivity: [
        { type: "discussion", action: "Answered", topic: "Quantum Supremacy", timeAgo: "2h ago" },
        { type: "article", action: "Published", topic: "Post-Quantum Cryptography", timeAgo: "1d ago" }
      ],
      nextAMA: {
        id: "ama-1",
        topic: "Future of Quantum Computing",
        date: "Dec 18, 2024 at 3:00 PM EST"
      }
    },
    {
      id: "expert-2",
      name: "Prof. Michael Rodriguez",
      title: "Materials Science Professor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      bio: "Expert in biomimetic materials and sustainable engineering solutions with focus on green construction technologies.",
      domains: ["Engineering", "Physics"],
      followers: 1923,
      rating: 4.8,
      status: "away",
      isFollowing: true,
      stats: {
        discussions: 89,
        answers: 267,
        upvotes: 1234
      },
      recentActivity: [
        { type: "discussion", action: "Started", topic: "Biomimetic Materials", timeAgo: "4h ago" },
        { type: "discussion", action: "Replied to", topic: "Sustainable Construction", timeAgo: "6h ago" }
      ],
      nextAMA: null
    }
  ];

  // Mock data for trending topics
  const mockTrendingTopics = [
    {
      id: 1,
      title: "AI Ethics in Healthcare",
      domain: "Computer Science",
      discussions: 34,
      participants: 127,
      trend: 15,
      timeframe: "This week"
    },
    {
      id: 2,
      title: "Quantum Machine Learning",
      domain: "Mathematics",
      discussions: 28,
      participants: 89,
      trend: 23,
      timeframe: "Last 3 days"
    },
    {
      id: 3,
      title: "Microbiome and Mental Health",
      domain: "Nutrition",
      discussions: 22,
      participants: 76,
      trend: 8,
      timeframe: "This week"
    },
    {
      id: 4,
      title: "Renewable Energy Storage",
      domain: "Engineering",
      discussions: 19,
      participants: 65,
      trend: -3,
      timeframe: "Last week"
    }
  ];

  // Mock data for activity feed
  const mockActivities = [
    {
      id: 1,
      type: "expert_answer",
      user: {
        id: "expert-1",
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
      },
      discussionId: 1,
      preview: "The key challenge in post-quantum cryptography is maintaining security while ensuring computational efficiency...",
      timestamp: new Date(Date.now() - 1800000),
      upvotes: 23,
      replies: 5
    },
    {
      id: 2,
      type: "new_discussion",
      user: {
        id: "user-1",
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
      },
      domain: "Engineering",
      discussionId: 4,
      title: "Carbon Capture Technologies: Scaling Up for Industrial Applications",
      timestamp: new Date(Date.now() - 3600000),
      replies: 8,
      participants: 12
    },
    {
      id: 3,
      type: "ama_scheduled",
      user: {
        id: "expert-2",
        name: "Prof. Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      },
      amaTitle: "Sustainable Materials: From Lab to Market",
      amaDate: "December 20, 2024",
      amaDuration: "90 minutes",
      timestamp: new Date(Date.now() - 7200000)
    }
  ];

  // Mock data for domains
  const mockDomains = [
    { name: "All", count: 156, activeToday: 23 },
    { name: "Engineering", count: 45, activeToday: 8 },
    { name: "Mathematics", count: 38, activeToday: 6 },
    { name: "Computer Science", count: 42, activeToday: 7 },
    { name: "Nutrition", count: 31, activeToday: 2 }
  ];

  // Mock data for AMAs
  const mockAMAs = [
    {
      id: "ama-1",
      title: "The Future of Quantum Computing: From Theory to Practical Applications",
      description: "Join Dr. Sarah Chen as she discusses the latest breakthroughs in quantum computing and their real-world implications.",
      expert: {
        id: "expert-1",
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        credentials: "PhD Quantum Computing, MIT"
      },
      domain: "Computer Science",
      scheduledAt: "2024-12-18T20:00:00Z",
      duration: 90,
      status: "upcoming",
      registeredCount: 234,
      questionsCount: 47,
      topics: ["Quantum Algorithms", "Cryptography", "Hardware Challenges", "Industry Applications"],
      topQuestions: [
        "When will quantum computers become commercially viable?",
        "How will quantum computing affect current encryption methods?"
      ]
    },
    {
      id: "ama-2",
      title: "Biomimetic Engineering: Learning from Nature\'s Designs",
      description: "Explore how nature-inspired solutions are revolutionizing engineering and materials science.",
      expert: {
        id: "expert-2",
        name: "Prof. Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        credentials: "Professor of Materials Science, Stanford"
      },
      domain: "Engineering",
      scheduledAt: "2024-12-16T19:00:00Z",
      duration: 60,
      status: "live",
      registeredCount: 189,
      questionsCount: 32,
      liveViewers: 156,
      topics: ["Biomimetic Materials", "Sustainable Design", "Self-Healing Materials"]
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'expert', label: 'Expert Led' }
  ];

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: 'MessageCircle', count: 156 },
    { id: 'experts', label: 'Experts', icon: 'Crown', count: 47 },
    { id: 'amas', label: 'AMAs', icon: 'Calendar', count: 8 },
    { id: 'activity', label: 'Activity', icon: 'Activity', count: null }
  ];

  // Event handlers
  const handleJoinDiscussion = (discussionId) => {
    navigate(`/community-hub/discussion/${discussionId}`);
  };

  const handleBookmark = (discussionId) => {
    console.log('Bookmark discussion:', discussionId);
  };

  const handleFollowExpert = (expertId) => {
    console.log('Follow expert:', expertId);
  };

  const handleScheduleAMA = (expertId, amaId) => {
    console.log('Schedule AMA reminder:', expertId, amaId);
  };

  const handleTopicClick = (topicId) => {
    navigate(`/topic-universes/${topicId}`);
  };

  const handleDomainToggle = (domain) => {
    if (domain === 'All') {
      setSelectedDomains(['All']);
    } else {
      const newDomains = selectedDomains?.includes('All') 
        ? [domain]
        : selectedDomains?.includes(domain)
          ? selectedDomains?.filter(d => d !== domain)
          : [...selectedDomains?.filter(d => d !== 'All'), domain];
      
      setSelectedDomains(newDomains?.length === 0 ? ['All'] : newDomains);
    }
  };

  const handleClearDomains = () => {
    setSelectedDomains(['All']);
  };

  const handleJoinAMA = (amaId) => {
    navigate(`/community-hub/ama/${amaId}`);
  };

  const handleSetReminder = (amaId) => {
    console.log('Set AMA reminder:', amaId);
  };

  const handleLoadMoreActivity = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'discussions':
        return (
          <div className="space-y-6">
            {mockDiscussions?.map((discussion) => (
              <DiscussionCard
                key={discussion?.id}
                discussion={discussion}
                onJoinDiscussion={handleJoinDiscussion}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        );
      
      case 'experts':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockExperts?.map((expert) => (
              <ExpertCard
                key={expert?.id}
                expert={expert}
                onFollow={handleFollowExpert}
                onScheduleAMA={handleScheduleAMA}
              />
            ))}
          </div>
        );
      
      case 'amas':
        return (
          <ExpertAMA
            amas={mockAMAs}
            onJoinAMA={handleJoinAMA}
            onSetReminder={handleSetReminder}
          />
        );
      
      case 'activity':
        return (
          <ActivityFeed
            activities={mockActivities}
            onLoadMore={handleLoadMoreActivity}
            isLoading={isLoading}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <div className="container mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Community Hub</h1>
                  <p className="text-muted-foreground">
                    Connect with experts, join discussions, and expand your knowledge across disciplines
                  </p>
                </div>
                <Button variant="default">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Start Discussion
                </Button>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                <div className="flex-1 max-w-md">
                  <Input
                    type="search"
                    placeholder="Search discussions, experts, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <Select
                    options={sortOptions}
                    value={sortBy}
                    onChange={setSortBy}
                    placeholder="Sort by"
                    className="w-40"
                  />
                  <Button variant="outline" size="sm">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="xl:col-span-1 space-y-6">
                <DomainFilter
                  domains={mockDomains}
                  selectedDomains={selectedDomains}
                  onDomainToggle={handleDomainToggle}
                  onClearAll={handleClearDomains}
                />
                
                <TrendingTopics
                  topics={mockTrendingTopics}
                  onTopicClick={handleTopicClick}
                  onViewAll={() => navigate('/topic-universes')}
                />
              </div>

              {/* Main Content */}
              <div className="xl:col-span-3">
                {/* Tabs */}
                <div className="mb-6">
                  <div className="border-b border-border">
                    <nav className="flex space-x-8">
                      {tabs?.map((tab) => (
                        <button
                          key={tab?.id}
                          onClick={() => setActiveTab(tab?.id)}
                          className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                            activeTab === tab?.id
                              ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                          }`}
                        >
                          <Icon name={tab?.icon} size={16} />
                          <span>{tab?.label}</span>
                          {tab?.count && (
                            <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs">
                              {tab?.count}
                            </span>
                          )}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommunityHub;