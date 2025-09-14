import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CrossConnections = () => {
  const [selectedConnection, setSelectedConnection] = useState(null);

  const crossDisciplinaryArticles = [
    {
      id: 1,
      title: "Machine Learning Applications in Nutritional Science",
      primaryTopic: "Mathematics",
      secondaryTopic: "Nutrition",
      author: "Dr. Sarah Mitchell",
      authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      readTime: "15 min read",
      publishedAt: "3 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      excerpt: "Exploring how machine learning algorithms are revolutionizing personalized nutrition recommendations and dietary analysis.",
      connections: ["Algorithm Design", "Data Analysis", "Health Optimization"],
      difficulty: "Intermediate",
      isBookmarked: false,
      engagement: {
        likes: 234,
        comments: 18,
        shares: 45
      }
    },
    {
      id: 2,
      title: "Biomechanical Engineering: The Mathematics of Human Movement",
      primaryTopic: "Engineering",
      secondaryTopic: "Mathematics",
      author: "Prof. Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      readTime: "22 min read",
      publishedAt: "1 day ago",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      excerpt: "Understanding how mathematical models and engineering principles combine to analyze and optimize human biomechanics.",
      connections: ["Calculus", "Physics", "Robotics", "Sports Science"],
      difficulty: "Advanced",
      isBookmarked: true,
      engagement: {
        likes: 189,
        comments: 24,
        shares: 32
      }
    },
    {
      id: 3,
      title: "Food Engineering: Optimizing Nutritional Value Through Technology",
      primaryTopic: "Engineering",
      secondaryTopic: "Nutrition",
      author: "Dr. Lisa Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      readTime: "18 min read",
      publishedAt: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=250&fit=crop",
      excerpt: "How food processing technologies are being engineered to maximize nutritional retention and bioavailability.",
      connections: ["Process Engineering", "Biochemistry", "Food Science"],
      difficulty: "Intermediate",
      isBookmarked: false,
      engagement: {
        likes: 156,
        comments: 12,
        shares: 28
      }
    },
    {
      id: 4,
      title: "Statistical Analysis of Dietary Patterns and Health Outcomes",
      primaryTopic: "Mathematics",
      secondaryTopic: "Nutrition",
      author: "Dr. James Wilson",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      readTime: "20 min read",
      publishedAt: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      excerpt: "Using advanced statistical methods to understand the complex relationships between diet, lifestyle, and health outcomes.",
      connections: ["Statistics", "Epidemiology", "Data Visualization"],
      difficulty: "Advanced",
      isBookmarked: true,
      engagement: {
        likes: 278,
        comments: 31,
        shares: 52
      }
    }
  ];

  const connectionTypes = [
    {
      id: 'math-nutrition',
      label: 'Math × Nutrition',
      color: 'bg-gradient-to-r from-purple-500 to-green-500',
      count: 12
    },
    {
      id: 'engineering-math',
      label: 'Engineering × Math',
      color: 'bg-gradient-to-r from-orange-500 to-purple-500',
      count: 18
    },
    {
      id: 'engineering-nutrition',
      label: 'Engineering × Nutrition',
      color: 'bg-gradient-to-r from-orange-500 to-green-500',
      count: 8
    },
    {
      id: 'all-three',
      label: 'All Disciplines',
      color: 'bg-gradient-to-r from-orange-500 via-purple-500 to-green-500',
      count: 5
    }
  ];

  const getTopicColors = (primary, secondary) => {
    const colors = {
      'Engineering': 'bg-orange-100 text-orange-800 border-orange-200',
      'Mathematics': 'bg-purple-100 text-purple-800 border-purple-200',
      'Nutrition': 'bg-green-100 text-green-800 border-green-200'
    };
    return {
      primary: colors?.[primary] || 'bg-gray-100 text-gray-800 border-gray-200',
      secondary: colors?.[secondary] || 'bg-gray-100 text-gray-800 border-gray-200'
    };
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors?.[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const handleBookmark = (articleId) => {
    console.log(`Bookmarking cross-connection article ${articleId}`);
  };

  const handleExploreConnection = (connectionId) => {
    console.log(`Exploring connection type: ${connectionId}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Cross-Connections</h2>
          <p className="text-sm text-gray-600 mt-1">Discover interdisciplinary insights</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Shuffle" size={16} className="mr-2" />
          Explore More
        </Button>
      </div>
      {/* Connection Types */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {connectionTypes?.map((type) => (
          <button
            key={type?.id}
            onClick={() => handleExploreConnection(type?.id)}
            className="relative overflow-hidden rounded-lg p-4 text-white hover:scale-105 transition-transform duration-200"
          >
            <div className={`absolute inset-0 ${type?.color}`} />
            <div className="relative z-10">
              <div className="text-lg font-bold">{type?.count}</div>
              <div className="text-sm opacity-90">{type?.label}</div>
            </div>
          </button>
        ))}
      </div>
      {/* Cross-Disciplinary Articles */}
      <div className="space-y-6">
        {crossDisciplinaryArticles?.map((article) => {
          const topicColors = getTopicColors(article?.primaryTopic, article?.secondaryTopic);
          
          return (
            <div key={article?.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={article?.thumbnail}
                    alt={article?.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${topicColors?.primary}`}>
                        {article?.primaryTopic}
                      </span>
                      <Icon name="ArrowRight" size={14} className="text-gray-400" />
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${topicColors?.secondary}`}>
                        {article?.secondaryTopic}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(article?.difficulty)}`}>
                        {article?.difficulty}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBookmark(article?.id)}
                      className="text-gray-400 hover:text-primary"
                    >
                      <Icon 
                        name={article?.isBookmarked ? "Bookmark" : "BookmarkPlus"} 
                        size={16}
                        className={article?.isBookmarked ? "fill-current" : ""}
                      />
                    </Button>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article?.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article?.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={article?.authorAvatar}
                        alt={article?.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900">{article?.author}</span>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{article?.readTime}</span>
                          <span>•</span>
                          <span>{article?.publishedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{article?.engagement?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{article?.engagement?.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={14} />
                        <span>{article?.engagement?.shares}</span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article?.connections?.map((connection, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-200"
                      >
                        <Icon name="Link" size={10} className="inline mr-1" />
                        {connection}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <Icon name="GitBranch" size={14} className="mr-1" />
                      View Connections
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Connection Insights */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Icon name="Lightbulb" size={20} className="text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Discover New Perspectives
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Cross-disciplinary articles help you see familiar concepts through new lenses and discover unexpected applications of your expertise.
            </p>
            <Button variant="outline" size="sm">
              <Icon name="Compass" size={14} className="mr-2" />
              Explore Connection Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossConnections;