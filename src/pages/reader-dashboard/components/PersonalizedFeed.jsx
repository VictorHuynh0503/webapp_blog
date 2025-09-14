import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedFeed = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const feedFilters = [
    { id: 'all', label: 'All Content', icon: 'Grid3X3' },
    { id: 'engineering', label: 'Engineering', icon: 'Cog' },
    { id: 'mathematics', label: 'Mathematics', icon: 'Calculator' },
    { id: 'nutrition', label: 'Nutrition', icon: 'Apple' },
    { id: 'following', label: 'Following', icon: 'Users' }
  ];

  const recommendedArticles = [
    {
      id: 1,
      title: "Advanced React Patterns for Scalable Applications",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      topic: "Engineering",
      readTime: "12 min read",
      publishedAt: "2 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      excerpt: "Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable applications.",
      isBookmarked: false,
      readProgress: 0,
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "The Mathematics Behind Machine Learning Algorithms",
      author: "Dr. Michael Torres",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      topic: "Mathematics",
      readTime: "18 min read",
      publishedAt: "5 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      excerpt: "Deep dive into linear algebra, calculus, and statistics that power modern ML algorithms.",
      isBookmarked: true,
      readProgress: 45,
      tags: ["Machine Learning", "Linear Algebra", "Statistics"]
    },
    {
      id: 3,
      title: "Micronutrient Timing for Athletic Performance",
      author: "Dr. Lisa Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      topic: "Nutrition",
      readTime: "8 min read",
      publishedAt: "1 day ago",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      excerpt: "Understanding when and how to optimize vitamin and mineral intake for peak athletic performance.",
      isBookmarked: false,
      readProgress: 100,
      tags: ["Sports Nutrition", "Vitamins", "Performance"]
    },
    {
      id: 4,
      title: "Quantum Computing: From Theory to Implementation",
      author: "Prof. James Wilson",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      topic: "Engineering",
      readTime: "25 min read",
      publishedAt: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1635070041409-e63e783d0fdc?w=400&h=250&fit=crop",
      excerpt: "A comprehensive guide to quantum computing principles and their practical applications in modern technology.",
      isBookmarked: true,
      readProgress: 20,
      tags: ["Quantum Computing", "Physics", "Technology"]
    }
  ];

  const filteredArticles = selectedFilter === 'all' 
    ? recommendedArticles 
    : recommendedArticles?.filter(article => 
        article?.topic?.toLowerCase() === selectedFilter || 
        (selectedFilter === 'following' && article?.isBookmarked)
      );

  const handleBookmark = (articleId) => {
    console.log(`Bookmarking article ${articleId}`);
  };

  const getTopicColor = (topic) => {
    const colors = {
      'Engineering': 'bg-orange-100 text-orange-800',
      'Mathematics': 'bg-purple-100 text-purple-800',
      'Nutrition': 'bg-green-100 text-green-800'
    };
    return colors?.[topic] || 'bg-gray-100 text-gray-800';
  };

  const getProgressColor = (progress) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress === 100) return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Personalized Feed</h2>
          <p className="text-sm text-gray-600 mt-1">Curated content based on your interests</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Settings" size={16} className="mr-2" />
          Customize
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {feedFilters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setSelectedFilter(filter?.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedFilter === filter?.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Articles Grid */}
      <div className="space-y-6">
        {filteredArticles?.map((article) => (
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
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTopicColor(article?.topic)}`}>
                      {article?.topic}
                    </span>
                    <span className="text-sm text-gray-500">{article?.readTime}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{article?.publishedAt}</span>
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={article?.authorAvatar}
                      alt={article?.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">{article?.author}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Reading Progress */}
                    {article?.readProgress > 0 && (
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getProgressColor(article?.readProgress)} transition-all duration-300`}
                            style={{ width: `${article?.readProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">
                          {article?.readProgress === 100 ? 'Complete' : `${article?.readProgress}%`}
                        </span>
                      </div>
                    )}

                    <Button variant="outline" size="sm">
                      {article?.readProgress === 100 ? 'Read Again' : 
                       article?.readProgress > 0 ? 'Continue' : 'Read'}
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {article?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline">
          <Icon name="RefreshCw" size={16} className="mr-2" />
          Load More Articles
        </Button>
      </div>
    </div>
  );
};

export default PersonalizedFeed;