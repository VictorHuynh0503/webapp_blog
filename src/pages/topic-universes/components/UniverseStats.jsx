import React from 'react';
import Icon from '../../../components/AppIcon';

const UniverseStats = ({ stats }) => {
  const {
    totalExperts,
    totalArticles,
    totalLearners,
    activeDiscussions,
    newThisWeek,
    crossDisciplinaryContent
  } = stats;

  const statItems = [
    {
      label: 'Expert Contributors',
      value: totalExperts,
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Published Articles',
      value: totalArticles,
      icon: 'FileText',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      label: 'Active Learners',
      value: totalLearners,
      icon: 'GraduationCap',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Live Discussions',
      value: activeDiscussions,
      icon: 'MessageCircle',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      label: 'New This Week',
      value: newThisWeek,
      icon: 'TrendingUp',
      color: 'text-error',
      bgColor: 'bg-error/10'
    },
    {
      label: 'Cross-Disciplinary',
      value: crossDisciplinaryContent,
      icon: 'Shuffle',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BarChart3" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-card-foreground">Universe Statistics</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {statItems?.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 rounded-lg ${item?.bgColor} flex items-center justify-center mx-auto mb-2`}>
              <Icon name={item?.icon} size={20} className={item?.color} />
            </div>
            <div className="text-2xl font-bold text-card-foreground mb-1">
              {typeof item?.value === 'number' ? item?.value?.toLocaleString() : item?.value}
            </div>
            <div className="text-xs text-muted-foreground">{item?.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last updated:</span>
          <span className="text-card-foreground font-medium">
            {new Date()?.toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniverseStats;