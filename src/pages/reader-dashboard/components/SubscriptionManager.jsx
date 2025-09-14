import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SubscriptionManager = () => {
  const [activeTab, setActiveTab] = useState('creators');
  const [notificationSettings, setNotificationSettings] = useState({});

  const tabs = [
    { id: 'creators', label: 'Creators', icon: 'Users', count: 12 },
    { id: 'topics', label: 'Topics', icon: 'Tag', count: 8 },
    { id: 'series', label: 'Series', icon: 'BookOpen', count: 5 }
  ];

  const subscribedCreators = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Machine Learning", "Data Science", "Nutrition"],
      followers: "15.2K",
      articlesCount: 47,
      lastPublished: "2 days ago",
      subscriptionType: "free",
      notificationEnabled: true,
      isVerified: true,
      recentArticle: "Advanced Neural Networks in Health Analytics"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Biomechanics", "Engineering", "Mathematics"],
      followers: "23.8K",
      articlesCount: 62,
      lastPublished: "1 day ago",
      subscriptionType: "premium",
      notificationEnabled: true,
      isVerified: true,
      recentArticle: "Quantum Mechanics in Biological Systems"
    },
    {
      id: 3,
      name: "Dr. Lisa Rodriguez",
      avatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      expertise: ["Food Engineering", "Nutrition", "Biochemistry"],
      followers: "9.7K",
      articlesCount: 34,
      lastPublished: "5 hours ago",
      subscriptionType: "free",
      notificationEnabled: false,
      isVerified: true,
      recentArticle: "Molecular Gastronomy: Science Meets Cuisine"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Sustainable Architecture", "Engineering", "Design"],
      followers: "18.4K",
      articlesCount: 41,
      lastPublished: "3 days ago",
      subscriptionType: "premium",
      notificationEnabled: true,
      isVerified: false,
      recentArticle: "Green Building Technologies of the Future"
    }
  ];

  const subscribedTopics = [
    {
      id: 1,
      name: "Machine Learning",
      description: "AI, algorithms, and data science",
      subscriberCount: "45.2K",
      articlesPerWeek: 12,
      lastUpdate: "2 hours ago",
      notificationEnabled: true,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Quantum Computing",
      description: "Quantum mechanics and computing",
      subscriberCount: "28.7K",
      articlesPerWeek: 6,
      lastUpdate: "1 day ago",
      notificationEnabled: true,
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Sustainable Engineering",
      description: "Green technology and eco-design",
      subscriberCount: "32.1K",
      articlesPerWeek: 8,
      lastUpdate: "3 hours ago",
      notificationEnabled: false,
      color: "bg-green-500"
    },
    {
      id: 4,
      name: "Sports Nutrition",
      description: "Performance nutrition and health",
      subscriberCount: "19.8K",
      articlesPerWeek: 5,
      lastUpdate: "6 hours ago",
      notificationEnabled: true,
      color: "bg-orange-500"
    }
  ];

  const subscribedSeries = [
    {
      id: 1,
      title: "Deep Learning Fundamentals",
      creator: "Dr. Sarah Mitchell",
      creatorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      totalParts: 12,
      completedParts: 7,
      nextRelease: "Tomorrow",
      description: "A comprehensive guide to neural networks and deep learning",
      notificationEnabled: true,
      isCompleted: false
    },
    {
      id: 2,
      title: "Quantum Algorithms Explained",
      creator: "Prof. Michael Chen",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      totalParts: 8,
      completedParts: 8,
      nextRelease: null,
      description: "Understanding quantum computing algorithms and applications",
      notificationEnabled: false,
      isCompleted: true
    },
    {
      id: 3,
      title: "Sustainable Architecture Series",
      creator: "Marcus Johnson",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      totalParts: 10,
      completedParts: 4,
      nextRelease: "Next week",
      description: "Building for the future with sustainable design principles",
      notificationEnabled: true,
      isCompleted: false
    }
  ];

  const handleUnsubscribe = (type, id) => {
    console.log(`Unsubscribing from ${type} with id: ${id}`);
  };

  const handleNotificationToggle = (type, id) => {
    console.log(`Toggling notifications for ${type} with id: ${id}`);
  };

  const getSubscriptionBadge = (type) => {
    return type === 'premium' ? (
      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
        Premium
      </span>
    ) : (
      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
        Free
      </span>
    );
  };

  const renderCreators = () => (
    <div className="space-y-4">
      {subscribedCreators?.map((creator) => (
        <div key={creator?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <Image
                src={creator?.avatar}
                alt={creator?.name}
                className="w-16 h-16 rounded-full"
              />
              {creator?.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold text-gray-900">{creator?.name}</h3>
                  {getSubscriptionBadge(creator?.subscriptionType)}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNotificationToggle('creator', creator?.id)}
                    className={creator?.notificationEnabled ? 'text-blue-600' : 'text-gray-400'}
                  >
                    <Icon name={creator?.notificationEnabled ? "Bell" : "BellOff"} size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUnsubscribe('creator', creator?.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Icon name="UserMinus" size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {creator?.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{creator?.followers} followers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="FileText" size={14} />
                  <span>{creator?.articlesCount} articles</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>Last published {creator?.lastPublished}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Latest: </span>
                  {creator?.recentArticle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTopics = () => (
    <div className="space-y-4">
      {subscribedTopics?.map((topic) => (
        <div key={topic?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 ${topic?.color} rounded-lg flex items-center justify-center`}>
              <Icon name="Tag" size={20} className="text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{topic?.name}</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNotificationToggle('topic', topic?.id)}
                    className={topic?.notificationEnabled ? 'text-blue-600' : 'text-gray-400'}
                  >
                    <Icon name={topic?.notificationEnabled ? "Bell" : "BellOff"} size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUnsubscribe('topic', topic?.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">{topic?.description}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{topic?.subscriberCount} subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} />
                  <span>{topic?.articlesPerWeek} articles/week</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>Updated {topic?.lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSeries = () => (
    <div className="space-y-4">
      {subscribedSeries?.map((series) => (
        <div key={series?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <Image
              src={series?.creatorAvatar}
              alt={series?.creator}
              className="w-12 h-12 rounded-full"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{series?.title}</h3>
                  <p className="text-sm text-gray-600">by {series?.creator}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {series?.isCompleted && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      Completed
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNotificationToggle('series', series?.id)}
                    className={series?.notificationEnabled ? 'text-blue-600' : 'text-gray-400'}
                  >
                    <Icon name={series?.notificationEnabled ? "Bell" : "BellOff"} size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUnsubscribe('series', series?.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">{series?.description}</p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{series?.completedParts} of {series?.totalParts} parts</span>
                  {series?.nextRelease && (
                    <>
                      <span>•</span>
                      <span>Next: {series?.nextRelease}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    series?.isCompleted ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${(series?.completedParts / series?.totalParts) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Subscriptions</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your content subscriptions</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Plus" size={16} className="mr-2" />
          Find More
        </Button>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
            <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs">
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div>
        {activeTab === 'creators' && renderCreators()}
        {activeTab === 'topics' && renderTopics()}
        {activeTab === 'series' && renderSeries()}
      </div>
      {/* Global Notification Settings */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Notification Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-700">Email Notifications</span>
              <p className="text-xs text-gray-500">Receive updates via email</p>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">
              <Icon name="Bell" size={16} />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-700">Push Notifications</span>
              <p className="text-xs text-gray-500">Browser and mobile notifications</p>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">
              <Icon name="Smartphone" size={16} />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-700">Weekly Digest</span>
              <p className="text-xs text-gray-500">Summary of your subscriptions</p>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600">
              <Icon name="Mail" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManager;