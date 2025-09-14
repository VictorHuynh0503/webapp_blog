import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PublicationHistory = ({ publications }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filters = [
    { id: 'all', label: 'All Articles', count: publications?.length },
    { id: 'engineering', label: 'Engineering', count: publications?.filter(p => p?.category === 'engineering')?.length },
    { id: 'mathematics', label: 'Mathematics', count: publications?.filter(p => p?.category === 'mathematics')?.length },
    { id: 'nutrition', label: 'Nutrition', count: publications?.filter(p => p?.category === 'nutrition')?.length },
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'engagement', label: 'Highest Engagement' },
  ];

  const filteredPublications = publications?.filter(pub => 
    selectedFilter === 'all' || pub?.category === selectedFilter
  );

  const getCategoryColor = (category) => {
    const colors = {
      engineering: 'bg-orange-100 text-orange-800 border-orange-200',
      mathematics: 'bg-purple-100 text-purple-800 border-purple-200',
      nutrition: 'bg-green-100 text-green-800 border-green-200',
    };
    return colors?.[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getEngagementIcon = (type) => {
    const icons = {
      high: 'TrendingUp',
      medium: 'Minus',
      low: 'TrendingDown',
    };
    return icons?.[type] || 'Minus';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-4 lg:mb-0">
          Publication History
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filters?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => setSelectedFilter(filter?.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors duration-200 ${
                  selectedFilter === filter?.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:bg-muted'
                }`}
              >
                {filter?.label} ({filter?.count})
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="px-3 py-1.5 text-sm border border-border rounded-md bg-background text-foreground"
          >
            {sortOptions?.map((option) => (
              <option key={option?.id} value={option?.id}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-6">
        {filteredPublications?.map((publication) => (
          <div
            key={publication?.id}
            className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow duration-200"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Article Image */}
              <div className="lg:w-48 flex-shrink-0">
                <Image
                  src={publication?.image}
                  alt={publication?.title}
                  className="w-full h-32 lg:h-24 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(publication?.category)}`}>
                        {publication?.category?.charAt(0)?.toUpperCase() + publication?.category?.slice(1)}
                      </span>
                      <span className="text-sm text-muted-foreground">{publication?.publishDate}</span>
                      <div className="flex items-center space-x-1">
                        <Icon 
                          name={getEngagementIcon(publication?.engagement)} 
                          size={14} 
                          className={`${
                            publication?.engagement === 'high' ? 'text-success' :
                            publication?.engagement === 'medium'? 'text-warning' : 'text-muted-foreground'
                          }`}
                        />
                        <span className="text-xs text-muted-foreground capitalize">
                          {publication?.engagement} engagement
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2">
                      {publication?.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                      {publication?.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {publication?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Article Stats */}
                  <div className="flex flex-col items-end space-y-2 text-sm">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{publication?.stats?.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{publication?.stats?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{publication?.stats?.comments}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{publication?.readTime} min read</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        {publication?.ratings?.slice(0, 3)?.map((rating, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                          >
                            <Icon name="Star" size={10} className="text-warning fill-current" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-card-foreground">
                        {publication?.averageRating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reader Testimonials */}
                {publication?.testimonial && (
                  <div className="bg-muted/50 rounded-lg p-3 mb-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="Quote" size={16} className="text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground italic mb-1">
                          "{publication?.testimonial?.text}"
                        </p>
                        <p className="text-xs text-muted-foreground">
                          — {publication?.testimonial?.author}, {publication?.testimonial?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                      Read Article
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Bookmark">
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Share2">
                      Share
                    </Button>
                  </div>

                  {publication?.isPremium && (
                    <div className="flex items-center space-x-1 text-accent">
                      <Icon name="Crown" size={14} />
                      <span className="text-xs font-medium">Premium</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" iconName="ChevronDown" iconPosition="right">
          Load More Articles
        </Button>
      </div>
    </div>
  );
};

export default PublicationHistory;