import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertAMA = ({ amas, onJoinAMA, onSetReminder }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const isToday = date?.toDateString() === now?.toDateString();
    const isTomorrow = date?.toDateString() === new Date(now.getTime() + 86400000)?.toDateString();
    
    if (isToday) return `Today at ${date?.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    if (isTomorrow) return `Tomorrow at ${date?.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit' 
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'upcoming': 'bg-blue-100 text-blue-800 border-blue-200',
      'live': 'bg-red-100 text-red-800 border-red-200',
      'ended': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors?.[status] || colors?.['upcoming'];
  };

  const getStatusIcon = (status) => {
    const icons = {
      'upcoming': 'Calendar',
      'live': 'Radio',
      'ended': 'CheckCircle'
    };
    return icons?.[status] || icons?.['upcoming'];
  };

  const getDomainColor = (domain) => {
    const colors = {
      'Engineering': 'bg-orange-100 text-orange-800',
      'Mathematics': 'bg-purple-100 text-purple-800',
      'Nutrition': 'bg-green-100 text-green-800',
      'Computer Science': 'bg-blue-100 text-blue-800',
      'Physics': 'bg-indigo-100 text-indigo-800'
    };
    return colors?.[domain] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Icon name="Crown" size={20} className="text-amber-600" />
          Expert AMAs
        </h2>
        <Button variant="ghost" size="sm">
          <span className="text-sm">View Schedule</span>
          <Icon name="ArrowRight" size={14} className="ml-1" />
        </Button>
      </div>
      <div className="space-y-4">
        {amas?.map((ama) => (
          <div
            key={ama?.id}
            className="border border-border rounded-lg p-4 hover:shadow-intellectual transition-all duration-200 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(ama?.status)}`}>
                  <Icon name={getStatusIcon(ama?.status)} size={12} className="mr-1" />
                  {ama?.status?.charAt(0)?.toUpperCase() + ama?.status?.slice(1)}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDomainColor(ama?.domain)}`}>
                  {ama?.domain}
                </span>
                {ama?.status === 'live' && (
                  <div className="flex items-center gap-1 text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">LIVE</span>
                  </div>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSetReminder(ama?.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <Icon name="Bell" size={14} />
              </Button>
            </div>

            {/* Expert Info */}
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={ama?.expert?.avatar}
                alt={ama?.expert?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <Link 
                  to={`/creator-profiles/${ama?.expert?.id}`}
                  className="font-medium text-card-foreground hover:text-primary transition-colors duration-200"
                >
                  {ama?.expert?.name}
                </Link>
                <p className="text-xs text-muted-foreground">{ama?.expert?.credentials}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-card-foreground">{formatDate(ama?.scheduledAt)}</div>
                <div className="text-xs text-muted-foreground">{ama?.duration} minutes</div>
              </div>
            </div>

            {/* AMA Details */}
            <div className="mb-4">
              <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                {ama?.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {ama?.description}
              </p>
            </div>

            {/* Topics */}
            {ama?.topics && ama?.topics?.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {ama?.topics?.slice(0, 3)?.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                  {ama?.topics?.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      +{ama?.topics?.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={12} />
                  <span>{ama?.registeredCount} registered</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="MessageCircle" size={12} />
                  <span>{ama?.questionsCount} questions</span>
                </div>
                {ama?.status === 'live' && (
                  <div className="flex items-center gap-1 text-green-600">
                    <Icon name="Eye" size={12} />
                    <span>{ama?.liveViewers} watching</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                {ama?.status === 'upcoming' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onSetReminder(ama?.id)}
                  >
                    <Icon name="Bell" size={14} className="mr-1" />
                    Remind Me
                  </Button>
                )}
                <Button
                  variant={ama?.status === 'live' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onJoinAMA(ama?.id)}
                >
                  {ama?.status === 'live' ? (
                    <>
                      <Icon name="Radio" size={14} className="mr-1" />
                      Join Live
                    </>
                  ) : ama?.status === 'upcoming' ? (
                    <>
                      <Icon name="Calendar" size={14} className="mr-1" />
                      Register
                    </>
                  ) : (
                    <>
                      <Icon name="Play" size={14} className="mr-1" />
                      Watch Replay
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Pre-submitted Questions Preview */}
            {ama?.status === 'upcoming' && ama?.topQuestions && ama?.topQuestions?.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Top Questions
                </h4>
                <div className="space-y-2">
                  {ama?.topQuestions?.slice(0, 2)?.map((question, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      <span className="font-medium">Q:</span> {question}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm">
            <Icon name="Calendar" size={14} className="mr-2" />
            Schedule Request
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="Archive" size={14} className="mr-2" />
            Past AMAs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertAMA;