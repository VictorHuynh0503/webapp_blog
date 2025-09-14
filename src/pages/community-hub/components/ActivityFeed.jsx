import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ActivityFeed = ({ activities, onLoadMore, isLoading }) => {
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

  const getActivityIcon = (type) => {
    const icons = {
      'new_discussion': 'MessageCircle',
      'reply': 'Reply',
      'upvote': 'ArrowUp',
      'expert_answer': 'Crown',
      'ama_scheduled': 'Calendar',
      'peer_review': 'CheckCircle',
      'collaboration': 'Users',
      'code_share': 'Code',
      'research_cite': 'BookOpen'
    };
    return icons?.[type] || 'Activity';
  };

  const getActivityColor = (type) => {
    const colors = {
      'new_discussion': 'text-blue-600 bg-blue-50',
      'reply': 'text-green-600 bg-green-50',
      'upvote': 'text-orange-600 bg-orange-50',
      'expert_answer': 'text-amber-600 bg-amber-50',
      'ama_scheduled': 'text-purple-600 bg-purple-50',
      'peer_review': 'text-emerald-600 bg-emerald-50',
      'collaboration': 'text-indigo-600 bg-indigo-50',
      'code_share': 'text-slate-600 bg-slate-50',
      'research_cite': 'text-teal-600 bg-teal-50'
    };
    return colors?.[type] || 'text-gray-600 bg-gray-50';
  };

  const renderActivityContent = (activity) => {
    switch (activity?.type) {
      case 'new_discussion':
        return (
          <div>
            <p className="text-sm text-card-foreground">
              <Link to={`/creator-profiles/${activity?.user?.id}`} className="font-medium hover:text-primary">
                {activity?.user?.name}
              </Link>
              {` started a new discussion in `}
              <span className="font-medium text-primary">{activity?.domain}</span>
            </p>
            <Link 
              to={`/community-hub/discussion/${activity?.discussionId}`}
              className="text-sm font-medium text-card-foreground hover:text-primary mt-1 block line-clamp-2"
            >
              {activity?.title}
            </Link>
          </div>
        );
      
      case 'expert_answer':
        return (
          <div>
            <p className="text-sm text-card-foreground">
              <Link to={`/creator-profiles/${activity?.user?.id}`} className="font-medium hover:text-primary">
                {activity?.user?.name}
              </Link>
              {` provided an expert answer`}
            </p>
            <Link 
              to={`/community-hub/discussion/${activity?.discussionId}`}
              className="text-sm text-muted-foreground mt-1 block line-clamp-2"
            >
              "{activity?.preview}"
            </Link>
          </div>
        );
      
      case 'ama_scheduled':
        return (
          <div>
            <p className="text-sm text-card-foreground">
              <Link to={`/creator-profiles/${activity?.user?.id}`} className="font-medium hover:text-primary">
                {activity?.user?.name}
              </Link>
              {` scheduled an AMA session`}
            </p>
            <p className="text-sm font-medium text-card-foreground mt-1">
              {activity?.amaTitle}
            </p>
            <p className="text-xs text-muted-foreground">
              {activity?.amaDate} • {activity?.amaDuration}
            </p>
          </div>
        );
      
      case 'collaboration':
        return (
          <div>
            <p className="text-sm text-card-foreground">
              <Link to={`/creator-profiles/${activity?.user?.id}`} className="font-medium hover:text-primary">
                {activity?.user?.name}
              </Link>
              {` started a cross-disciplinary collaboration`}
            </p>
            <p className="text-sm font-medium text-card-foreground mt-1">
              {activity?.projectTitle}
            </p>
            <div className="flex gap-1 mt-1">
              {activity?.domains?.map(domain => (
                <span key={domain} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                  {domain}
                </span>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div>
            <p className="text-sm text-card-foreground">
              <Link to={`/creator-profiles/${activity?.user?.id}`} className="font-medium hover:text-primary">
                {activity?.user?.name}
              </Link>
              {` ${activity?.action}`}
            </p>
            {activity?.content && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {activity?.content}
              </p>
            )}
          </div>
        );
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Icon name="Activity" size={20} className="text-primary" />
          Community Activity
        </h2>
        <Button variant="ghost" size="sm">
          <Icon name="Filter" size={14} className="mr-2" />
          Filter
        </Button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex gap-4 p-3 rounded-lg hover:bg-muted transition-colors duration-200">
            {/* Activity Icon */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>

            {/* User Avatar */}
            <div className="flex-shrink-0">
              <Image
                src={activity?.user?.avatar}
                alt={activity?.user?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>

            {/* Activity Content */}
            <div className="flex-1 min-w-0">
              {renderActivityContent(activity)}
              
              {/* Activity Stats */}
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>{formatTimeAgo(activity?.timestamp)}</span>
                {activity?.replies && (
                  <div className="flex items-center gap-1">
                    <Icon name="MessageCircle" size={12} />
                    <span>{activity?.replies} replies</span>
                  </div>
                )}
                {activity?.upvotes && (
                  <div className="flex items-center gap-1">
                    <Icon name="ArrowUp" size={12} />
                    <span>{activity?.upvotes} upvotes</span>
                  </div>
                )}
                {activity?.participants && (
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={12} />
                    <span>{activity?.participants} participants</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={14} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Share" size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          onClick={onLoadMore}
          loading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More Activity'}
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;