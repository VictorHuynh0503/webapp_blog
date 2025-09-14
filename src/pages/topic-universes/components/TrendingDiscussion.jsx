import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrendingDiscussion = ({ discussion }) => {
  const {
    id,
    title,
    excerpt,
    author,
    universe,
    stats,
    tags,
    timestamp,
    isHot,
    difficulty
  } = discussion;

  const timeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-intellectual transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${universe?.color}`} />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {universe?.name}
          </span>
          {isHot && (
            <div className="flex items-center space-x-1 bg-error/10 text-error px-2 py-0.5 rounded-full">
              <Icon name="Flame" size={10} />
              <span className="text-xs font-medium">Hot</span>
            </div>
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          {timeAgo(timestamp)}
        </div>
      </div>
      <h3 className="text-sm font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {excerpt}
      </p>
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex items-center space-x-2">
          <Image
            src={author?.avatar}
            alt={author?.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-card-foreground">
            {author?.name}
          </span>
          {author?.verified && (
            <Icon name="BadgeCheck" size={12} className="text-primary" />
          )}
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-0.5">
            {[1, 2, 3]?.map((level) => (
              <div
                key={level}
                className={`w-1.5 h-1.5 rounded-full ${
                  level <= difficulty ? universe?.color : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mb-3">
        {tags?.slice(0, 2)?.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
        {tags?.length > 2 && (
          <span className="text-xs text-muted-foreground">
            +{tags?.length - 2}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="MessageCircle" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{stats?.replies}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{stats?.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{stats?.views}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="ArrowRight" size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default TrendingDiscussion;