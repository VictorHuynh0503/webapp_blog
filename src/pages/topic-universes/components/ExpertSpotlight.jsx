import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertSpotlight = ({ expert }) => {
  const {
    id,
    name,
    title,
    avatar,
    expertise,
    bio,
    stats,
    recentArticle,
    verified,
    universes
  } = expert;

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-intellectual transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <Image
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-primary-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-semibold text-card-foreground truncate">{name}</h3>
            {verified && (
              <Icon name="BadgeCheck" size={16} className="text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <div className="flex flex-wrap gap-1">
            {universes?.map((universe, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-xs font-medium ${universe?.color} text-white`}
              >
                {universe?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-card-foreground mb-4 line-clamp-3">{bio}</p>
      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-card-foreground">{stats?.articles}</div>
          <div className="text-xs text-muted-foreground">Articles</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-card-foreground">{stats?.followers}</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-card-foreground">{stats?.likes}</div>
          <div className="text-xs text-muted-foreground">Likes</div>
        </div>
      </div>
      {recentArticle && (
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="FileText" size={14} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Latest Article</span>
          </div>
          <h4 className="text-sm font-medium text-card-foreground mb-1 line-clamp-2">
            {recentArticle?.title}
          </h4>
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <span>{recentArticle?.readTime} min read</span>
            <span>•</span>
            <span>{recentArticle?.likes} likes</span>
          </div>
        </div>
      )}
      <div className="flex space-x-2">
        <Button
          variant="default"
          size="sm"
          fullWidth
          iconName="UserPlus"
          iconPosition="left"
        >
          Follow
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Message
        </Button>
      </div>
    </div>
  );
};

export default ExpertSpotlight;