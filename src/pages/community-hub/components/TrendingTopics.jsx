import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingTopics = ({ topics, onTopicClick, onViewAll }) => {
  const getTrendIcon = (trend) => {
    if (trend > 0) return { icon: 'TrendingUp', color: 'text-green-600' };
    if (trend < 0) return { icon: 'TrendingDown', color: 'text-red-600' };
    return { icon: 'Minus', color: 'text-gray-600' };
  };

  const getDomainColor = (domain) => {
    const colors = {
      'Engineering': 'bg-orange-50 border-orange-200 text-orange-800',
      'Mathematics': 'bg-purple-50 border-purple-200 text-purple-800',
      'Nutrition': 'bg-green-50 border-green-200 text-green-800',
      'Computer Science': 'bg-blue-50 border-blue-200 text-blue-800',
      'Physics': 'bg-indigo-50 border-indigo-200 text-indigo-800',
      'General': 'bg-gray-50 border-gray-200 text-gray-800'
    };
    return colors?.[domain] || colors?.['General'];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Icon name="TrendingUp" size={20} className="text-primary" />
          Trending Topics
        </h2>
        <Button variant="ghost" size="sm" onClick={onViewAll}>
          <span className="text-sm">View All</span>
          <Icon name="ArrowRight" size={14} className="ml-1" />
        </Button>
      </div>
      <div className="space-y-4">
        {topics?.map((topic, index) => (
          <div
            key={topic?.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors duration-200 cursor-pointer group"
            onClick={() => onTopicClick(topic?.id)}
          >
            {/* Rank */}
            <div className="flex-shrink-0 w-6 text-center">
              <span className={`text-sm font-bold ${
                index === 0 ? 'text-amber-600' :
                index === 1 ? 'text-gray-600' :
                index === 2 ? 'text-orange-600': 'text-muted-foreground'
              }`}>
                #{index + 1}
              </span>
            </div>

            {/* Topic Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-200 truncate">
                  {topic?.title}
                </h3>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getDomainColor(topic?.domain)}`}>
                  {topic?.domain}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="MessageCircle" size={12} />
                  <span>{topic?.discussions} discussions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={12} />
                  <span>{topic?.participants} participants</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  <span>{topic?.timeframe}</span>
                </div>
              </div>
            </div>

            {/* Trend Indicator */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className={`flex items-center gap-1 ${getTrendIcon(topic?.trend)?.color}`}>
                <Icon name={getTrendIcon(topic?.trend)?.icon} size={14} />
                <span className="text-xs font-medium">
                  {Math.abs(topic?.trend)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => onTopicClick('ai-ml')}>
            <Icon name="Brain" size={14} className="mr-2" />
            AI & ML
          </Button>
          <Button variant="outline" size="sm" onClick={() => onTopicClick('quantum')}>
            <Icon name="Atom" size={14} className="mr-2" />
            Quantum Computing
          </Button>
          <Button variant="outline" size="sm" onClick={() => onTopicClick('sustainability')}>
            <Icon name="Leaf" size={14} className="mr-2" />
            Sustainability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;