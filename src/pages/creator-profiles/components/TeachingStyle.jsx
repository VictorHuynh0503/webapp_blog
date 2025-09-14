import React from 'react';
import Icon from '../../../components/AppIcon';

const TeachingStyle = ({ teachingData }) => {
  const getApproachIcon = (approach) => {
    const icons = {
      'Visual Learning': 'Eye',
      'Step-by-Step': 'List',
      'Real-world Examples': 'Globe',
      'Interactive': 'MousePointer',
      'Conceptual': 'Lightbulb',
      'Practical': 'Tool',
    };
    return icons?.[approach] || 'BookOpen';
  };

  const getDifficultyColor = (level) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Advanced': 'bg-red-100 text-red-800 border-red-200',
      'Expert': 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors?.[level] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="GraduationCap" size={24} className="text-primary" />
        <h2 className="text-xl font-semibold text-card-foreground">Teaching Style & Approach</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Teaching Philosophy */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Teaching Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              {teachingData?.philosophy}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Learning Approaches</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {teachingData?.approaches?.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                >
                  <Icon 
                    name={getApproachIcon(approach?.name)} 
                    size={18} 
                    className="text-primary" 
                  />
                  <div>
                    <div className="font-medium text-card-foreground text-sm">
                      {approach?.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {approach?.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Content Difficulty Levels</h3>
            <div className="space-y-3">
              {teachingData?.difficultyLevels?.map((level, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getDifficultyColor(level?.name)}`}>
                    {level?.name}
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${level?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {level?.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Metrics & Feedback */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Teaching Effectiveness</h3>
            <div className="grid grid-cols-2 gap-4">
              {teachingData?.metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-muted/30 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {metric?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Reader Feedback</h3>
            <div className="space-y-4">
              {teachingData?.feedback?.map((feedback, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-sm font-medium">
                          {feedback?.author?.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-card-foreground text-sm">
                          {feedback?.author}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={12}
                              className={`${
                                i < feedback?.rating
                                  ? 'text-warning fill-current' :'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        "{feedback?.comment}"
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span>{feedback?.date}</span>
                        <span>{feedback?.article}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-3">Learning Outcomes</h3>
            <div className="space-y-3">
              {teachingData?.outcomes?.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
                >
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                  <div>
                    <div className="font-medium text-card-foreground text-sm mb-1">
                      {outcome?.title}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {outcome?.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Teaching Sample */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-medium text-card-foreground mb-4">Sample Teaching Excerpt</h3>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Play" size={16} className="text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-card-foreground mb-2">
                {teachingData?.sample?.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {teachingData?.sample?.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{teachingData?.sample?.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{teachingData?.sample?.difficulty}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="BookOpen" size={12} />
                  <span>{teachingData?.sample?.topic}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingStyle;