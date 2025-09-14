import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertCard = ({ expert, onFollow, onScheduleAMA }) => {
  const getDomainColors = (domains) => {
    const colorMap = {
      'Engineering': 'bg-orange-100 text-orange-800',
      'Mathematics': 'bg-purple-100 text-purple-800',
      'Nutrition': 'bg-green-100 text-green-800',
      'Computer Science': 'bg-blue-100 text-blue-800',
      'Physics': 'bg-indigo-100 text-indigo-800'
    };
    return domains?.map(domain => colorMap?.[domain] || 'bg-gray-100 text-gray-800');
  };

  const getStatusColor = (status) => {
    const colors = {
      'online': 'bg-green-500',
      'away': 'bg-yellow-500',
      'offline': 'bg-gray-400'
    };
    return colors?.[status] || colors?.['offline'];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-intellectual transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <Image
            src={expert?.avatar}
            alt={expert?.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(expert?.status)} rounded-full border-2 border-card`}></div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Link 
              to={`/creator-profiles/${expert?.id}`}
              className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors duration-200"
            >
              {expert?.name}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFollow(expert?.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Icon 
                name={expert?.isFollowing ? "UserCheck" : "UserPlus"} 
                size={16}
                className={expert?.isFollowing ? "text-primary" : ""}
              />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{expert?.title}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-amber-600">
              <Icon name="Crown" size={14} />
              <span className="text-xs font-medium">Expert</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Icon name="Users" size={14} />
              <span className="text-xs">{expert?.followers} followers</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Icon name="Star" size={14} />
              <span className="text-xs">{expert?.rating}/5.0</span>
            </div>
          </div>
        </div>
      </div>
      {/* Expertise Domains */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {expert?.domains?.map((domain, index) => (
            <span
              key={domain}
              className={`px-2 py-1 text-xs font-medium rounded-full ${getDomainColors(expert?.domains)?.[index]}`}
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {expert?.bio}
      </p>
      {/* Recent Activity */}
      <div className="mb-4">
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Recent Activity
        </h4>
        <div className="space-y-2">
          {expert?.recentActivity?.slice(0, 2)?.map((activity, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <Icon name={activity?.type === 'discussion' ? 'MessageCircle' : 'FileText'} size={12} className="text-muted-foreground" />
              <span className="text-muted-foreground truncate">
                {activity?.action} in <span className="text-card-foreground font-medium">{activity?.topic}</span>
              </span>
              <span className="text-muted-foreground ml-auto">{activity?.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{expert?.stats?.discussions}</div>
          <div className="text-xs text-muted-foreground">Discussions</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{expert?.stats?.answers}</div>
          <div className="text-xs text-muted-foreground">Answers</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{expert?.stats?.upvotes}</div>
          <div className="text-xs text-muted-foreground">Upvotes</div>
        </div>
      </div>
      {/* AMA Schedule */}
      {expert?.nextAMA && (
        <div className="bg-muted rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Calendar" size={14} className="text-primary" />
            <span className="text-xs font-medium text-card-foreground">Upcoming AMA</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{expert?.nextAMA?.topic}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{expert?.nextAMA?.date}</span>
            <Button
              variant="outline"
              size="xs"
              onClick={() => onScheduleAMA(expert?.id, expert?.nextAMA?.id)}
            >
              <Icon name="Bell" size={12} className="mr-1" />
              Remind Me
            </Button>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          onClick={() => onFollow(expert?.id)}
        >
          <Icon name={expert?.isFollowing ? "UserCheck" : "UserPlus"} size={14} className="mr-2" />
          {expert?.isFollowing ? 'Following' : 'Follow'}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(`/messages/${expert?.id}`, '_blank')}
        >
          <Icon name="MessageCircle" size={14} />
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;