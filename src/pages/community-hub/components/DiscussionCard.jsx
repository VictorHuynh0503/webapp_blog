import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DiscussionCard = ({ discussion, onJoinDiscussion, onBookmark }) => {
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getDomainColor = (domain) => {
    const colors = {
      'Engineering': 'bg-orange-100 text-orange-800 border-orange-200',
      'Mathematics': 'bg-purple-100 text-purple-800 border-purple-200',
      'Nutrition': 'bg-green-100 text-green-800 border-green-200',
      'Computer Science': 'bg-blue-100 text-blue-800 border-blue-200',
      'Physics': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'General': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors?.[domain] || colors?.['General'];
  };

  const getExpertiseLevel = (level) => {
    const levels = {
      'Expert': { color: 'text-amber-600', icon: 'Crown' },
      'Advanced': { color: 'text-blue-600', icon: 'Award' },
      'Intermediate': { color: 'text-green-600', icon: 'CheckCircle' },
      'Beginner': { color: 'text-gray-600', icon: 'User' }
    };
    return levels?.[level] || levels?.['Beginner'];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-intellectual transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDomainColor(discussion?.domain)}`}>
              {discussion?.domain}
            </span>
            {discussion?.isPinned && (
              <Icon name="Pin" size={14} className="text-primary" />
            )}
            {discussion?.isExpertLed && (
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200 rounded-full flex items-center gap-1">
                <Icon name="Crown" size={12} />
                Expert Led
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {discussion?.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {discussion?.preview}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onBookmark(discussion?.id)}
          className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Icon 
            name={discussion?.isBookmarked ? "Bookmark" : "BookmarkPlus"} 
            size={16}
            className={discussion?.isBookmarked ? "text-primary" : ""}
          />
        </Button>
      </div>
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={discussion?.author?.avatar}
          alt={discussion?.author?.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Link 
              to={`/creator-profiles/${discussion?.author?.id}`}
              className="text-sm font-medium text-card-foreground hover:text-primary transition-colors duration-200"
            >
              {discussion?.author?.name}
            </Link>
            <div className={`flex items-center gap-1 ${getExpertiseLevel(discussion?.author?.expertiseLevel)?.color}`}>
              <Icon name={getExpertiseLevel(discussion?.author?.expertiseLevel)?.icon} size={12} />
              <span className="text-xs font-medium">{discussion?.author?.expertiseLevel}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{discussion?.author?.credentials}</p>
        </div>
        <span className="text-xs text-muted-foreground">
          {formatTimeAgo(discussion?.createdAt)}
        </span>
      </div>
      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="MessageCircle" size={14} />
            <span className="text-sm">{discussion?.replies}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Users" size={14} />
            <span className="text-sm">{discussion?.participants}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Eye" size={14} />
            <span className="text-sm">{discussion?.views}</span>
          </div>
          {discussion?.hasCode && (
            <div className="flex items-center gap-1 text-blue-600">
              <Icon name="Code" size={14} />
              <span className="text-xs">Code</span>
            </div>
          )}
          {discussion?.hasMath && (
            <div className="flex items-center gap-1 text-purple-600">
              <Icon name="Calculator" size={14} />
              <span className="text-xs">Math</span>
            </div>
          )}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onJoinDiscussion(discussion?.id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          Join Discussion
        </Button>
      </div>
      {/* Recent Activity Indicator */}
      {discussion?.lastActivity && new Date() - new Date(discussion.lastActivity) < 3600000 && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Active discussion - {discussion?.recentReplies} new replies</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionCard;