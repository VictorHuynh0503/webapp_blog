import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = ({ socialProofData }) => {
  const getAchievementIcon = (type) => {
    const icons = {
      'Speaking': 'Mic',
      'Research': 'FileText',
      'Media': 'Tv',
      'Award': 'Award',
      'Publication': 'BookOpen',
      'Certification': 'Shield',
    };
    return icons?.[type] || 'Star';
  };

  const getAchievementColor = (type) => {
    const colors = {
      'Speaking': 'bg-blue-100 text-blue-800 border-blue-200',
      'Research': 'bg-green-100 text-green-800 border-green-200',
      'Media': 'bg-purple-100 text-purple-800 border-purple-200',
      'Award': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Publication': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Certification': 'bg-red-100 text-red-800 border-red-200',
    };
    return colors?.[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Trophy" size={24} className="text-accent" />
        <h2 className="text-xl font-semibold text-card-foreground">
          Recognition & Social Proof
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Achievements & Awards */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {socialProofData?.achievements?.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getAchievementColor(achievement?.type)}`}>
                      <Icon name={getAchievementIcon(achievement?.type)} size={18} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-card-foreground">
                        {achievement?.title}
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        {achievement?.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {achievement?.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">
                        {achievement?.organization}
                      </span>
                      {achievement?.verified && (
                        <Icon name="CheckCircle" size={14} className="text-success" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              Media Appearances
            </h3>
            <div className="space-y-3">
              {socialProofData?.mediaAppearances?.map((appearance, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                >
                  <Image
                    src={appearance?.logo}
                    alt={appearance?.outlet}
                    className="w-12 h-12 object-contain rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-card-foreground text-sm">
                      {appearance?.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{appearance?.outlet}</span>
                      <span>•</span>
                      <span>{appearance?.date}</span>
                      <span>•</span>
                      <span className="capitalize">{appearance?.type}</span>
                    </div>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Endorsements & Testimonials */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              Expert Endorsements
            </h3>
            <div className="space-y-4">
              {socialProofData?.endorsements?.map((endorsement, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg"
                >
                  <div className="flex items-start space-x-4">
                    <Image
                      src={endorsement?.avatar}
                      alt={endorsement?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-card-foreground">
                            {endorsement?.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {endorsement?.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {endorsement?.organization}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={12}
                              className={`${
                                i < endorsement?.rating
                                  ? 'text-warning fill-current' :'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        "{endorsement?.comment}"
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs text-muted-foreground">
                          {endorsement?.date}
                        </span>
                        {endorsement?.verified && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <div className="flex items-center space-x-1">
                              <Icon name="CheckCircle" size={12} className="text-success" />
                              <span className="text-xs text-success">Verified</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              Professional Network
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialProofData?.networkStats?.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-muted/30 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              Speaking Engagements
            </h3>
            <div className="space-y-3">
              {socialProofData?.speakingEngagements?.map((engagement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-card-foreground text-sm">
                      {engagement?.event}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={12} />
                      <span>{engagement?.location}</span>
                      <span>•</span>
                      <span>{engagement?.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {engagement?.attendees}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Impact Metrics */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-medium text-card-foreground mb-4">
          Global Impact Metrics
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialProofData?.impactMetrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-card-foreground mb-1">
                {metric?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric?.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {metric?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;