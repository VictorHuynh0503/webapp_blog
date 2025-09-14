import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UniverseCard = ({ universe }) => {
  const {
    id,
    title,
    description,
    color,
    bgGradient,
    icon,
    image,
    stats,
    expertCount,
    articleCount,
    learnerCount,
    difficulty,
    trending
  } = universe;

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-intellectual transition-all duration-300 group ${bgGradient}`}>
      {trending && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="TrendingUp" size={12} />
            <span>Trending</span>
          </div>
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${title} universe`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3`}>
            <Icon name={icon} size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-card-foreground">{expertCount}</div>
            <div className="text-xs text-muted-foreground">Experts</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-card-foreground">{articleCount}</div>
            <div className="text-xs text-muted-foreground">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-card-foreground">{learnerCount}</div>
            <div className="text-xs text-muted-foreground">Learners</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Difficulty:</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5]?.map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= difficulty ? color : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {difficulty === 1 && 'Beginner'}
            {difficulty === 2 && 'Basic'}
            {difficulty === 3 && 'Intermediate'}
            {difficulty === 4 && 'Advanced'}
            {difficulty === 5 && 'Expert'}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Compass"
            iconPosition="left"
          >
            Explore Universe
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="BookOpen"
            iconPosition="left"
          >
            Learning Path
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniverseCard;