import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathway = ({ pathway }) => {
  const {
    id,
    title,
    description,
    difficulty,
    duration,
    steps,
    completedSteps,
    color,
    icon,
    prerequisites,
    outcomes
  } = pathway;

  const progressPercentage = (completedSteps / steps?.length) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-intellectual transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
            <Icon name={icon} size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-card-foreground">{duration}</div>
          <div className="text-xs text-muted-foreground">Duration</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-card-foreground">
            {completedSteps}/{steps?.length} steps
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${color}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div className="space-y-3 mb-4">
        {steps?.slice(0, 3)?.map((step, index) => (
          <div key={step?.id} className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              index < completedSteps 
                ? `${color} text-white` 
                : 'bg-muted text-muted-foreground'
            }`}>
              {index < completedSteps ? (
                <Icon name="Check" size={12} />
              ) : (
                <span className="text-xs font-medium">{index + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${
                index < completedSteps ? 'text-muted-foreground line-through' : 'text-card-foreground'
              }`}>
                {step?.title}
              </div>
              <div className="text-xs text-muted-foreground">{step?.duration}</div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{step?.readTime}m</span>
            </div>
          </div>
        ))}
        {steps?.length > 3 && (
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              +{steps?.length - 3} more steps
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-muted-foreground mb-1">Difficulty</div>
          <div className="flex items-center space-x-1">
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
        <div>
          <div className="text-xs text-muted-foreground mb-1">Prerequisites</div>
          <div className="text-sm text-card-foreground">
            {prerequisites?.length > 0 ? `${prerequisites?.length} required` : 'None'}
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="default"
          size="sm"
          fullWidth
          iconName={completedSteps > 0 ? "Play" : "BookOpen"}
          iconPosition="left"
        >
          {completedSteps > 0 ? 'Continue Learning' : 'Start Pathway'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="Info"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default LearningPathway;