import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ReadingProgress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' }
  ];

  const readingStats = {
    week: {
      articlesRead: 12,
      totalReadTime: 180, // minutes
      streak: 5,
      goal: 15
    },
    month: {
      articlesRead: 48,
      totalReadTime: 720,
      streak: 23,
      goal: 60
    },
    year: {
      articlesRead: 324,
      totalReadTime: 4860,
      streak: 89,
      goal: 400
    }
  };

  const currentInProgress = [
    {
      id: 1,
      title: "Deep Learning Fundamentals: Neural Networks Explained",
      author: "Dr. Amanda Foster",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      progress: 65,
      totalTime: "45 min read",
      remainingTime: "16 min left",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      lastRead: "2 hours ago",
      topic: "Mathematics"
    },
    {
      id: 2,
      title: "Sustainable Architecture: Building for the Future",
      author: "Marcus Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      progress: 30,
      totalTime: "22 min read",
      remainingTime: "15 min left",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
      lastRead: "1 day ago",
      topic: "Engineering"
    },
    {
      id: 3,
      title: "The Science of Intermittent Fasting",
      author: "Dr. Rachel Kim",
      authorAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      progress: 85,
      totalTime: "15 min read",
      remainingTime: "3 min left",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop",
      lastRead: "3 hours ago",
      topic: "Nutrition"
    }
  ];

  const recentlyCompleted = [
    {
      id: 4,
      title: "Quantum Algorithms and Their Applications",
      author: "Prof. David Chen",
      completedAt: "Yesterday",
      rating: 5,
      readTime: "28 min",
      topic: "Mathematics"
    },
    {
      id: 5,
      title: "Microservices Architecture Patterns",
      author: "Elena Rodriguez",
      completedAt: "2 days ago",
      rating: 4,
      readTime: "35 min",
      topic: "Engineering"
    },
    {
      id: 6,
      title: "Plant-Based Protein Sources",
      author: "Dr. James Wilson",
      completedAt: "3 days ago",
      rating: 5,
      readTime: "12 min",
      topic: "Nutrition"
    }
  ];

  const currentStats = readingStats?.[selectedPeriod];
  const progressPercentage = (currentStats?.articlesRead / currentStats?.goal) * 100;

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getTopicColor = (topic) => {
    const colors = {
      'Engineering': 'bg-orange-500',
      'Mathematics': 'bg-purple-500',
      'Nutrition': 'bg-green-500'
    };
    return colors?.[topic] || 'bg-gray-500';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Reading Progress</h2>
          <p className="text-sm text-gray-600 mt-1">Track your learning journey</p>
        </div>
        
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {periods?.map((period) => (
            <button
              key={period?.id}
              onClick={() => setSelectedPeriod(period?.id)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                selectedPeriod === period?.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {period?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Reading Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="BookOpen" size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Articles Read</span>
          </div>
          <div className="text-2xl font-bold text-blue-900">{currentStats?.articlesRead}</div>
          <div className="text-xs text-blue-700">of {currentStats?.goal} goal</div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={20} className="text-green-600" />
            <span className="text-sm font-medium text-green-900">Reading Time</span>
          </div>
          <div className="text-2xl font-bold text-green-900">{formatTime(currentStats?.totalReadTime)}</div>
          <div className="text-xs text-green-700">total time</div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Flame" size={20} className="text-orange-600" />
            <span className="text-sm font-medium text-orange-900">Streak</span>
          </div>
          <div className="text-2xl font-bold text-orange-900">{currentStats?.streak}</div>
          <div className="text-xs text-orange-700">days</div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={20} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Progress</span>
          </div>
          <div className="text-2xl font-bold text-purple-900">{Math.round(progressPercentage)}%</div>
          <div className="text-xs text-purple-700">of goal</div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Goal Progress</span>
          <span className="text-sm text-gray-500">{currentStats?.articlesRead} / {currentStats?.goal}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>
      {/* Currently Reading */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Currently Reading</h3>
        <div className="space-y-4">
          {currentInProgress?.map((article) => (
            <div key={article?.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex space-x-4">
                <Image
                  src={article?.thumbnail}
                  alt={article?.title}
                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {article?.title}
                    </h4>
                    <div className={`w-2 h-2 rounded-full ${getTopicColor(article?.topic)} flex-shrink-0 ml-2 mt-1`} />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={article?.authorAvatar}
                      alt={article?.author}
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-xs text-gray-600">{article?.author}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{article?.lastRead}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-1 bg-gray-200 rounded-full">
                        <div 
                          className="h-1 bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${article?.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{article?.progress}%</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{article?.remainingTime}</span>
                      <Button variant="outline" size="sm">
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recently Completed */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Completed</h3>
        <div className="space-y-3">
          {recentlyCompleted?.map((article) => (
            <div key={article?.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {article?.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-600">{article?.author}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{article?.completedAt}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{article?.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <div className="flex space-x-1">
                  {renderStars(article?.rating)}
                </div>
                <div className={`w-2 h-2 rounded-full ${getTopicColor(article?.topic)}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingProgress;