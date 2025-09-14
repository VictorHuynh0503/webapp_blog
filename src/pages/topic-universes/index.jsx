import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import UniverseCard from './components/UniverseCard';
import ExpertSpotlight from './components/ExpertSpotlight';
import LearningPathway from './components/LearningPathway';
import TrendingDiscussion from './components/TrendingDiscussion';
import FilterPanel from './components/FilterPanel';
import UniverseStats from './components/UniverseStats';

const TopicUniverses = () => {
  const [filters, setFilters] = useState({
    search: '',
    universes: [],
    difficulty: [],
    contentTypes: [],
    sortBy: 'trending',
    crossDisciplinary: false
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeView, setActiveView] = useState('universes');

  // Mock data for universes
  const universes = [
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Software, Hardware & Systems Design',
      color: 'bg-orange-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
      icon: 'Cpu',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      expertCount: 1247,
      articleCount: 3892,
      learnerCount: 15643,
      difficulty: 4,
      trending: true
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      description: 'Pure & Applied Mathematical Sciences',
      color: 'bg-purple-500',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
      icon: 'Calculator',
      image: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?w=800&h=400&fit=crop',
      expertCount: 892,
      articleCount: 2156,
      learnerCount: 9834,
      difficulty: 5,
      trending: false
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      description: 'Evidence-Based Nutritional Science',
      color: 'bg-green-500',
      bgGradient: 'bg-gradient-to-br from-green-50 to-green-100',
      icon: 'Apple',
      image: 'https://images.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg?w=800&h=400&fit=crop',
      expertCount: 634,
      articleCount: 1789,
      learnerCount: 12456,
      difficulty: 3,
      trending: true
    }
  ];

  // Mock data for experts
  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior Software Architect',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      expertise: ['Distributed Systems', 'Cloud Architecture'],
      bio: `Leading expert in distributed systems with 15+ years of experience building scalable cloud infrastructure. Currently architecting next-generation microservices platforms.`,
      stats: { articles: 127, followers: 8934, likes: 23456 },
      recentArticle: {
        title: 'Building Resilient Microservices: Lessons from Production',
        readTime: 12,
        likes: 456
      },
      verified: true,
      universes: [{ name: 'Engineering', color: 'bg-orange-500' }]
    },
    {
      id: 2,
      name: 'Prof. Michael Rodriguez',
      title: 'Applied Mathematics Professor',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      expertise: ['Differential Equations', 'Mathematical Modeling'],
      bio: `Professor of Applied Mathematics specializing in differential equations and their applications in engineering and physics. Published author of 200+ research papers.`,
      stats: { articles: 89, followers: 5672, likes: 18923 },
      recentArticle: {
        title: 'Solving Complex PDEs: A Practical Approach',
        readTime: 18,
        likes: 234
      },
      verified: true,
      universes: [
        { name: 'Mathematics', color: 'bg-purple-500' },
        { name: 'Engineering', color: 'bg-orange-500' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      title: 'Clinical Nutritionist',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      expertise: ['Sports Nutrition', 'Metabolic Health'],
      bio: `Board-certified nutritionist with expertise in sports performance and metabolic optimization. Consultant for professional athletes and wellness programs.`,
      stats: { articles: 156, followers: 12345, likes: 34567 },
      recentArticle: {
        title: 'Optimizing Athletic Performance Through Precision Nutrition',
        readTime: 8,
        likes: 789
      },
      verified: true,
      universes: [{ name: 'Nutrition', color: 'bg-green-500' }]
    }
  ];

  // Mock data for learning pathways
  const learningPathways = [
    {
      id: 1,
      title: 'Full-Stack Development Mastery',
      description: 'Complete journey from frontend to backend development',
      difficulty: 3,
      duration: '12 weeks',
      color: 'bg-orange-500',
      icon: 'Code',
      completedSteps: 3,
      steps: [
        { id: 1, title: 'HTML & CSS Fundamentals', duration: '1 week', readTime: 45 },
        { id: 2, title: 'JavaScript ES6+ Deep Dive', duration: '2 weeks', readTime: 120 },
        { id: 3, title: 'React.js Component Architecture', duration: '2 weeks', readTime: 90 },
        { id: 4, title: 'Node.js & Express Backend', duration: '2 weeks', readTime: 100 },
        { id: 5, title: 'Database Design & Integration', duration: '2 weeks', readTime: 80 },
        { id: 6, title: 'Deployment & DevOps Basics', duration: '1 week', readTime: 60 },
        { id: 7, title: 'Full-Stack Project Build', duration: '2 weeks', readTime: 150 }
      ],
      prerequisites: ['Basic programming knowledge'],
      outcomes: ['Build complete web applications', 'Deploy to production', 'Understand modern development workflow']
    },
    {
      id: 2,
      title: 'Advanced Calculus Applications',
      description: 'Real-world applications of calculus in engineering and physics',
      difficulty: 4,
      duration: '8 weeks',
      color: 'bg-purple-500',
      icon: 'Calculator',
      completedSteps: 0,
      steps: [
        { id: 1, title: 'Multivariable Calculus Review', duration: '1 week', readTime: 60 },
        { id: 2, title: 'Vector Calculus Fundamentals', duration: '1 week', readTime: 75 },
        { id: 3, title: 'Differential Equations in Engineering', duration: '2 weeks', readTime: 120 },
        { id: 4, title: 'Optimization Problems', duration: '2 weeks', readTime: 90 },
        { id: 5, title: 'Physics Applications', duration: '1 week', readTime: 80 },
        { id: 6, title: 'Capstone Project', duration: '1 week', readTime: 100 }
      ],
      prerequisites: ['Calculus I & II', 'Linear Algebra'],
      outcomes: ['Solve complex engineering problems', 'Apply calculus to real scenarios']
    },
    {
      id: 3,
      title: 'Evidence-Based Nutrition Planning',
      description: 'Scientific approach to nutrition and meal planning',
      difficulty: 2,
      duration: '6 weeks',
      color: 'bg-green-500',
      icon: 'Apple',
      completedSteps: 1,
      steps: [
        { id: 1, title: 'Nutritional Science Basics', duration: '1 week', readTime: 40 },
        { id: 2, title: 'Macronutrient Balance', duration: '1 week', readTime: 50 },
        { id: 3, title: 'Micronutrient Essentials', duration: '1 week', readTime: 45 },
        { id: 4, title: 'Meal Planning Strategies', duration: '1 week', readTime: 35 },
        { id: 5, title: 'Special Dietary Considerations', duration: '1 week', readTime: 55 },
        { id: 6, title: 'Practical Implementation', duration: '1 week', readTime: 30 }
      ],
      prerequisites: [],
      outcomes: ['Create balanced meal plans', 'Understand nutritional science', 'Apply evidence-based principles']
    }
  ];

  // Mock data for trending discussions
  const trendingDiscussions = [
    {
      id: 1,
      title: 'The Future of Quantum Computing: Breaking RSA Encryption',
      excerpt: `Recent advances in quantum computing are bringing us closer to breaking current encryption standards. What are the implications for cybersecurity?`,
      author: {
        name: 'Dr. Alex Kumar',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        verified: true
      },
      universe: { name: 'Engineering', color: 'bg-orange-500' },
      stats: { replies: 47, likes: 234, views: 1892 },
      tags: ['quantum-computing', 'cryptography', 'security'],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isHot: true,
      difficulty: 4
    },
    {
      id: 2,
      title: 'Proving the Riemann Hypothesis: Latest Developments',
      excerpt: `New mathematical approaches to one of the millennium problems. Discussion of recent papers and potential breakthrough methods.`,
      author: {
        name: 'Prof. Maria Gonzalez',
        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
        verified: true
      },
      universe: { name: 'Mathematics', color: 'bg-purple-500' },
      stats: { replies: 23, likes: 156, views: 892 },
      tags: ['number-theory', 'millennium-problems', 'research'],
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      isHot: false,
      difficulty: 5
    },
    {
      id: 3,
      title: 'Intermittent Fasting: Separating Science from Hype',
      excerpt: `Comprehensive review of current research on intermittent fasting protocols and their metabolic effects. What does the evidence really show?`,
      author: {
        name: 'Dr. James Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        verified: true
      },
      universe: { name: 'Nutrition', color: 'bg-green-500' },
      stats: { replies: 89, likes: 567, views: 3421 },
      tags: ['intermittent-fasting', 'metabolism', 'research-review'],
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      isHot: true,
      difficulty: 2
    },
    {
      id: 4,
      title: 'Machine Learning in Drug Discovery: Cross-Disciplinary Breakthrough',
      excerpt: `How AI algorithms are revolutionizing pharmaceutical research by combining computational chemistry with nutritional biochemistry.`,
      author: {
        name: 'Dr. Lisa Chang',
        avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
        verified: true
      },
      universe: { name: 'Engineering', color: 'bg-orange-500' },
      stats: { replies: 34, likes: 298, views: 1567 },
      tags: ['machine-learning', 'drug-discovery', 'cross-disciplinary'],
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      isHot: false,
      difficulty: 4
    }
  ];

  // Mock statistics
  const universeStats = {
    totalExperts: 2773,
    totalArticles: 7837,
    totalLearners: 37933,
    activeDiscussions: 1247,
    newThisWeek: 156,
    crossDisciplinaryContent: 423
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const viewOptions = [
    { value: 'universes', label: 'Universes', icon: 'Globe' },
    { value: 'experts', label: 'Experts', icon: 'Users' },
    { value: 'pathways', label: 'Learning Paths', icon: 'Map' },
    { value: 'discussions', label: 'Discussions', icon: 'MessageCircle' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Topic Universes - BlogCraft</title>
        <meta name="description" content="Explore immersive knowledge domains in Engineering, Mathematics, and Nutrition. Discover expert-curated content, learning pathways, and cross-disciplinary insights." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Explore Knowledge Universes</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Where Expertise Meets
            <span className="text-primary"> Exploration</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Dive deep into immersive knowledge domains crafted by world-class experts. 
            Discover curated learning pathways, engage with cutting-edge research, and 
            connect ideas across disciplines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="Compass"
              iconPosition="left"
            >
              Start Exploring
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
            >
              Browse Learning Paths
            </Button>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="mb-12">
          <UniverseStats stats={universeStats} />
        </div>

        {/* View Toggle & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2 bg-muted p-1 rounded-lg">
            {viewOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setActiveView(option?.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeView === option?.value
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span>{option?.label}</span>
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            iconName="Filter"
            iconPosition="left"
          >
            Filters
            {Object.values(filters)?.some(value => 
              Array.isArray(value) ? value?.length > 0 : 
              typeof value === 'boolean' ? value : 
              value !== '' && value !== 'trending'
            ) && (
              <div className="ml-2 w-2 h-2 bg-primary rounded-full" />
            )}
          </Button>
        </div>

        {/* Filter Panel */}
        <div className="mb-8">
          <FilterPanel
            filters={filters}
            onFiltersChange={handleFiltersChange}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />
        </div>

        {/* Content Based on Active View */}
        {activeView === 'universes' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {universes?.map((universe) => (
              <UniverseCard key={universe?.id} universe={universe} />
            ))}
          </div>
        )}

        {activeView === 'experts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {experts?.map((expert) => (
              <ExpertSpotlight key={expert?.id} expert={expert} />
            ))}
          </div>
        )}

        {activeView === 'pathways' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningPathways?.map((pathway) => (
              <LearningPathway key={pathway?.id} pathway={pathway} />
            ))}
          </div>
        )}

        {activeView === 'discussions' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trendingDiscussions?.map((discussion) => (
              <TrendingDiscussion key={discussion?.id} discussion={discussion} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Share Your Expertise?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of experts and help shape the future of knowledge sharing. 
            Create your own universe of content and connect with curious minds worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="PenTool"
              iconPosition="left"
            >
              Become a Creator
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
            >
              Join Community
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopicUniverses;