import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PremiumFeatures = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const premiumFeatures = [
    {
      id: 'offline-reading',
      title: 'Offline Reading',
      description: 'Download articles for offline access',
      icon: 'Download',
      isActive: true,
      usage: '12 articles downloaded'
    },
    {
      id: 'exclusive-content',
      title: 'Exclusive Content',
      description: 'Access premium articles and research',
      icon: 'Lock',
      isActive: true,
      usage: '8 exclusive articles this month'
    },
    {
      id: 'creator-messaging',
      title: 'Direct Creator Messaging',
      description: 'Message authors directly',
      icon: 'MessageSquare',
      isActive: true,
      usage: '3 conversations active'
    },
    {
      id: 'advanced-analytics',
      title: 'Advanced Analytics',
      description: 'Detailed reading insights and progress',
      icon: 'BarChart3',
      isActive: true,
      usage: 'Full analytics enabled'
    },
    {
      id: 'priority-support',
      title: 'Priority Support',
      description: '24/7 premium customer support',
      icon: 'Headphones',
      isActive: true,
      usage: 'Available 24/7'
    },
    {
      id: 'early-access',
      title: 'Early Access',
      description: 'Preview new features before release',
      icon: 'Zap',
      isActive: true,
      usage: '2 beta features active'
    }
  ];

  const exclusiveContent = [
    {
      id: 1,
      title: "Advanced Quantum Machine Learning Algorithms",
      author: "Dr. Elena Vasquez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      readTime: "35 min read",
      publishedAt: "1 day ago",
      isPremium: true,
      excerpt: "Deep dive into cutting-edge quantum algorithms that are revolutionizing machine learning applications in scientific research.",
      tags: ["Quantum Computing", "Machine Learning", "Research"],
      difficulty: "Expert"
    },
    {
      id: 2,
      title: "Proprietary Nutrition Optimization Frameworks",
      author: "Prof. David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      readTime: "28 min read",
      publishedAt: "2 days ago",
      isPremium: true,
      excerpt: "Exclusive insights into proprietary algorithms used by leading nutrition companies for personalized dietary recommendations.",
      tags: ["Nutrition Science", "Algorithms", "Personalization"],
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Next-Generation Sustainable Engineering Materials",
      author: "Dr. Maria Santos",
      authorAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      readTime: "22 min read",
      publishedAt: "3 days ago",
      isPremium: true,
      excerpt: "Exclusive research on breakthrough materials that will define the future of sustainable construction and manufacturing.",
      tags: ["Materials Science", "Sustainability", "Innovation"],
      difficulty: "Advanced"
    }
  ];

  const creatorMessages = [
    {
      id: 1,
      creator: "Dr. Sarah Mitchell",
      creatorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      lastMessage: "Thanks for your insightful question about neural network architectures. I\'d be happy to discuss this further...",
      timestamp: "2 hours ago",
      isUnread: true,
      topic: "Machine Learning Discussion"
    },
    {
      id: 2,
      creator: "Prof. Michael Chen",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      lastMessage: "Your feedback on the biomechanics article was very valuable. I\'m working on a follow-up piece that addresses...",
      timestamp: "1 day ago",
      isUnread: false,
      topic: "Biomechanics Feedback"
    },
    {
      id: 3,
      creator: "Dr. Lisa Rodriguez",
      creatorAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      lastMessage: "I noticed you\'re interested in food engineering. I have some exclusive research data that might interest you...",
      timestamp: "2 days ago",
      isUnread: true,
      topic: "Food Engineering Research"
    }
  ];

  const subscriptionPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic article access',
        'Community discussions',
        'Basic reading progress',
        'Standard support'
      ],
      isCurrentPlan: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$12',
      period: 'month',
      features: [
        'All free features',
        'Offline reading',
        'Exclusive content',
        'Creator messaging',
        'Advanced analytics',
        'Priority support'
      ],
      isCurrentPlan: true,
      isPopular: true
    },
    {
      id: 'expert',
      name: 'Expert',
      price: '$29',
      period: 'month',
      features: [
        'All premium features',
        'Expert-only content',
        'Research collaboration',
        'Custom analytics',
        'White-label options',
        'Dedicated account manager'
      ],
      isCurrentPlan: false
    }
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Advanced': 'bg-yellow-100 text-yellow-800',
      'Expert': 'bg-red-100 text-red-800'
    };
    return colors?.[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const handleMessageCreator = (creatorId) => {
    console.log(`Opening message with creator ${creatorId}`);
  };

  const handleDownloadArticle = (articleId) => {
    console.log(`Downloading article ${articleId} for offline reading`);
  };

  const handleUpgradePlan = (planId) => {
    console.log(`Upgrading to plan: ${planId}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Premium Features</h2>
          <p className="text-sm text-gray-600 mt-1">Unlock advanced capabilities</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
            Premium Member
          </span>
          <Button variant="outline" size="sm">
            <Icon name="Settings" size={16} className="mr-2" />
            Manage
          </Button>
        </div>
      </div>
      {/* Premium Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {premiumFeatures?.map((feature) => (
          <div key={feature?.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                feature?.isActive ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                <Icon 
                  name={feature?.icon} 
                  size={20} 
                  className={feature?.isActive ? 'text-green-600' : 'text-gray-400'}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {feature?.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  {feature?.description}
                </p>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    feature?.isActive ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <span className="text-xs text-gray-500">
                    {feature?.usage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Exclusive Content */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Exclusive Content</h3>
          <Button variant="outline" size="sm">
            <Icon name="Eye" size={16} className="mr-2" />
            View All
          </Button>
        </div>
        
        <div className="space-y-4">
          {exclusiveContent?.map((article) => (
            <div key={article?.id} className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex space-x-4">
                <Image
                  src={article?.thumbnail}
                  alt={article?.title}
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Crown" size={16} className="text-yellow-600" />
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Premium Exclusive
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(article?.difficulty)}`}>
                        {article?.difficulty}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownloadArticle(article?.id)}
                      className="text-blue-600"
                    >
                      <Icon name="Download" size={16} />
                    </Button>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                    {article?.title}
                  </h4>

                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={article?.authorAvatar}
                      alt={article?.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">{article?.author}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{article?.readTime}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{article?.publishedAt}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {article?.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article?.tags?.slice(0, 2)?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Creator Messages */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Creator Messages</h3>
          <Button variant="outline" size="sm">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {creatorMessages?.map((message) => (
            <div key={message?.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Image
                    src={message?.creatorAvatar}
                    alt={message?.creator}
                    className="w-12 h-12 rounded-full"
                  />
                  {message?.isUnread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {message?.creator}
                    </h4>
                    <span className="text-xs text-gray-500">{message?.timestamp}</span>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-2">{message?.topic}</p>
                  
                  <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                    {message?.lastMessage}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMessageCreator(message?.id)}
                  >
                    <Icon name="Reply" size={14} className="mr-2" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Subscription Plans */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subscriptionPlans?.map((plan) => (
            <div key={plan?.id} className={`border rounded-lg p-4 relative ${
              plan?.isCurrentPlan ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            } ${plan?.isPopular ? 'ring-2 ring-blue-200' : ''}`}>
              {plan?.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan?.name}</h4>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {plan?.price}
                  <span className="text-sm font-normal text-gray-500">/{plan?.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan?.isCurrentPlan ? "outline" : "default"}
                fullWidth
                disabled={plan?.isCurrentPlan}
                onClick={() => handleUpgradePlan(plan?.id)}
              >
                {plan?.isCurrentPlan ? 'Current Plan' : `Upgrade to ${plan?.name}`}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;