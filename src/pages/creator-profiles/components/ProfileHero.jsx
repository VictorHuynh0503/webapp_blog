import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProfileHero = ({ creator }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image & Basic Info */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Image
                    src={creator?.avatar}
                    alt={creator?.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-intellectual"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-success text-success-foreground rounded-full p-2">
                    <Icon name="CheckCircle" size={16} />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-foreground mb-2">{creator?.name}</h1>
                <p className="text-lg text-primary font-medium mb-4">{creator?.title}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {creator?.institutions?.map((institution, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {institution}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{creator?.stats?.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{creator?.stats?.articles}</div>
                    <div className="text-sm text-muted-foreground">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{creator?.stats?.domains}</div>
                    <div className="text-sm text-muted-foreground">Domains</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button variant="default" iconName="UserPlus" iconPosition="left">
                    Follow
                  </Button>
                  <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                    Message
                  </Button>
                  <Button variant="ghost" iconName="Share2" iconPosition="left">
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio & Expertise */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {creator?.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Expertise Areas</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {creator?.expertiseAreas?.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg hover:shadow-sm transition-shadow duration-200"
                      >
                        <div className={`w-3 h-3 rounded-full ${area?.color}`}></div>
                        <div>
                          <div className="font-medium text-card-foreground">{area?.name}</div>
                          <div className="text-sm text-muted-foreground">{area?.level}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Credentials & Achievements</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {creator?.credentials?.map((credential, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-card border border-border rounded-lg"
                      >
                        <Icon name="Award" size={20} className="text-accent mt-0.5" />
                        <div>
                          <div className="font-medium text-card-foreground">{credential?.title}</div>
                          <div className="text-sm text-muted-foreground">{credential?.organization}</div>
                          <div className="text-xs text-muted-foreground">{credential?.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;