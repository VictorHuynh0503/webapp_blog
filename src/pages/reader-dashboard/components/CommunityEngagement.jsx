import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityEngagement = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: 'MessageCircle', count: 8 },
    { id: 'qa', label: 'Q&A', icon: 'HelpCircle', count: 5 },
    { id: 'recommendations', label: 'Recommendations', icon: 'ThumbsUp', count: 12 }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Best practices for implementing neural networks in nutrition analysis?",
      author: "Alex Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      topic: "Machine Learning × Nutrition",
      replies: 23,
      lastActivity: "2 hours ago",
      isParticipating: true,
      excerpt: "I\'m working on a project that uses ML to analyze nutritional content from food images. What are the key considerations for model architecture?",
      tags: ["Machine Learning", "Computer Vision", "Nutrition"],
      upvotes: 45
    },
    {
      id: 2,
      title: "Quantum computing applications in structural engineering",
      author: "Dr. Sarah Kim",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      topic: "Engineering × Mathematics",
      replies: 15,
      lastActivity: "5 hours ago",
      isParticipating: false,
      excerpt: "Exploring how quantum algorithms could revolutionize structural analysis and optimization in civil engineering projects.",
      tags: ["Quantum Computing", "Structural Engineering", "Optimization"],
      upvotes: 32
    },
    {
      id: 3,
      title: "Biomechanical modeling for sports performance optimization",
      author: "Marcus Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      topic: "Engineering × Nutrition",
      replies: 18,
      lastActivity: "1 day ago",
      isParticipating: true,
      excerpt: "How can we combine biomechanical analysis with nutritional science to create personalized training programs?",
      tags: ["Biomechanics", "Sports Science", "Performance"],
      upvotes: 28
    }
  ];

  const expertQA = [
    {
      id: 1,
      question: "What\'s the mathematical foundation behind gradient descent optimization?",
      expert: "Prof. Michael Torres",
      expertAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: "Mathematics",
      answered: true,
      answeredAt: "3 hours ago",
      upvotes: 67,
      isBookmarked: true,
      preview: "Gradient descent is fundamentally based on the concept of finding the minimum of a function by iteratively moving in the direction of steepest descent..."
    },
    {
      id: 2,
      question: "How do micronutrients affect cognitive performance in athletes?",
      expert: "Dr. Lisa Rodriguez",
      expertAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      expertise: "Nutrition",
      answered: true,
      answeredAt: "1 day ago",
      upvotes: 43,
      isBookmarked: false,
      preview: "The relationship between micronutrients and cognitive function is complex, involving multiple pathways including neurotransmitter synthesis..."
    },
    {
      id: 3,
      question: "Best practices for designing fault-tolerant distributed systems?",
      expert: "Elena Martinez",
      expertAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: "Engineering",
      answered: false,
      answeredAt: null,
      upvotes: 29,
      isBookmarked: true,
      preview: "Question pending expert response..."
    }
  ];

  const peerRecommendations = [
    {
      id: 1,
      title: "Advanced Calculus for Machine Learning Engineers",
      recommender: "Sarah Chen",
      recommenderAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      author: "Dr. James Wilson",
      readTime: "25 min read",
      reason: "Perfect for understanding the mathematical foundations behind ML algorithms",
      likes: 34,
      isLiked: false,
      topic: "Mathematics",
      publishedAt: "2 days ago"
    },
    {
      id: 2,
      title: "Sustainable Materials in Modern Architecture",
      recommender: "Marcus Johnson",
      recommenderAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      author: "Prof. Anna Davis",
      readTime: "18 min read",
      reason: "Excellent overview of eco-friendly building materials and their applications",
      likes: 28,
      isLiked: true,
      topic: "Engineering",
      publishedAt: "1 day ago"
    },
    {
      id: 3,
      title: "Precision Nutrition: The Future of Personalized Health",
      recommender: "Dr. Lisa Rodriguez",
      recommenderAvatar: "https://images.unsplash.com/photo-1594824388853-2c5d8c5e7e3f?w=150&h=150&fit=crop&crop=face",
      author: "Dr. Michael Chen",
      readTime: "22 min read",
      reason: "Fascinating insights into how AI is revolutionizing personalized nutrition",
      likes: 41,
      isLiked: false,
      topic: "Nutrition",
      publishedAt: "3 days ago"
    }
  ];

  const getTopicColor = (topic) => {
    if (topic?.includes('Mathematics')) return 'bg-purple-100 text-purple-800';
    if (topic?.includes('Engineering')) return 'bg-orange-100 text-orange-800';
    if (topic?.includes('Nutrition')) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  const handleJoinDiscussion = (discussionId) => {
    console.log(`Joining discussion ${discussionId}`);
  };

  const handleBookmarkQA = (qaId) => {
    console.log(`Bookmarking Q&A ${qaId}`);
  };

  const handleLikeRecommendation = (recId) => {
    console.log(`Liking recommendation ${recId}`);
  };

  const renderDiscussions = () => (
    <div className="space-y-4">
      {recentDiscussions?.map((discussion) => (
        <div key={discussion?.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start space-x-4">
            <Image
              src={discussion?.authorAvatar}
              alt={discussion?.author}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {discussion?.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">{discussion?.author}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTopicColor(discussion?.topic)}`}>
                      {discussion?.topic}
                    </span>
                    {discussion?.isParticipating && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Participating
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="ArrowUp" size={14} />
                    <span>{discussion?.upvotes}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {discussion?.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {discussion?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageCircle" size={14} />
                    <span>{discussion?.replies} replies</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{discussion?.lastActivity}</span>
                  </div>
                </div>
                
                <Button
                  variant={discussion?.isParticipating ? "outline" : "default"}
                  size="sm"
                  onClick={() => handleJoinDiscussion(discussion?.id)}
                >
                  {discussion?.isParticipating ? 'View Discussion' : 'Join Discussion'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQA = () => (
    <div className="space-y-4">
      {expertQA?.map((qa) => (
        <div key={qa?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <Image
              src={qa?.expertAvatar}
              alt={qa?.expert}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {qa?.question}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">{qa?.expert}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTopicColor(qa?.expertise)}`}>
                      {qa?.expertise} Expert
                    </span>
                    {qa?.answered ? (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Answered
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleBookmarkQA(qa?.id)}
                    className={qa?.isBookmarked ? 'text-blue-600' : 'text-gray-400'}
                  >
                    <Icon name={qa?.isBookmarked ? "Bookmark" : "BookmarkPlus"} size={16} />
                  </Button>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="ArrowUp" size={14} />
                    <span>{qa?.upvotes}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                {qa?.preview}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {qa?.answered ? `Answered ${qa?.answeredAt}` : 'Awaiting expert response'}
                </div>
                
                <Button variant="outline" size="sm">
                  {qa?.answered ? 'Read Answer' : 'Follow Question'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-4">
      {peerRecommendations?.map((rec) => (
        <div key={rec?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-4">
            <Image
              src={rec?.recommenderAvatar}
              alt={rec?.recommender}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-700">{rec?.recommender}</span>
                    <span className="text-sm text-gray-500">recommends</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTopicColor(rec?.topic)}`}>
                      {rec?.topic}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {rec?.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <span>by {rec?.author}</span>
                    <span>•</span>
                    <span>{rec?.readTime}</span>
                    <span>•</span>
                    <span>{rec?.publishedAt}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLikeRecommendation(rec?.id)}
                    className={rec?.isLiked ? 'text-red-600' : 'text-gray-400'}
                  >
                    <Icon name={rec?.isLiked ? "Heart" : "Heart"} size={16} className={rec?.isLiked ? "fill-current" : ""} />
                  </Button>
                  <span className="text-sm text-gray-500">{rec?.likes}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-sm text-blue-900">
                  <Icon name="Quote" size={14} className="inline mr-1" />
                  {rec?.reason}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Icon name="ThumbsUp" size={14} />
                  <span>{rec?.likes} people found this helpful</span>
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
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Community Engagement</h2>
          <p className="text-sm text-gray-600 mt-1">Connect with experts and peers</p>
        </div>
        <Button variant="outline" size="sm">
          <Icon name="Plus" size={16} className="mr-2" />
          Start Discussion
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
        {activeTab === 'discussions' && renderDiscussions()}
        {activeTab === 'qa' && renderQA()}
        {activeTab === 'recommendations' && renderRecommendations()}
      </div>
      {/* Community Stats */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Your Community Impact</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={14} />
                <span>23 discussions joined</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="HelpCircle" size={14} />
                <span>8 questions answered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="ThumbsUp" size={14} />
                <span>156 helpful votes</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Award" size={14} className="mr-2" />
            View Achievements
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;