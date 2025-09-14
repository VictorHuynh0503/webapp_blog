import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ filters, onFiltersChange, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const difficultyLevels = [
    { value: 1, label: 'Beginner', color: 'bg-green-500' },
    { value: 2, label: 'Basic', color: 'bg-blue-500' },
    { value: 3, label: 'Intermediate', color: 'bg-yellow-500' },
    { value: 4, label: 'Advanced', color: 'bg-orange-500' },
    { value: 5, label: 'Expert', color: 'bg-red-500' }
  ];

  const contentTypes = [
    { value: 'article', label: 'Articles', icon: 'FileText' },
    { value: 'tutorial', label: 'Tutorials', icon: 'BookOpen' },
    { value: 'research', label: 'Research', icon: 'Microscope' },
    { value: 'discussion', label: 'Discussions', icon: 'MessageCircle' },
    { value: 'code', label: 'Code Examples', icon: 'Code' },
    { value: 'video', label: 'Videos', icon: 'Play' }
  ];

  const universes = [
    { value: 'engineering', label: 'Engineering', color: 'bg-orange-500' },
    { value: 'mathematics', label: 'Mathematics', color: 'bg-purple-500' },
    { value: 'nutrition', label: 'Nutrition', color: 'bg-green-500' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleArrayFilterChange = (key, value, checked) => {
    const currentArray = localFilters?.[key] || [];
    const newArray = checked
      ? [...currentArray, value]
      : currentArray?.filter(item => item !== value);
    
    handleFilterChange(key, newArray);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      search: '',
      universes: [],
      difficulty: [],
      contentTypes: [],
      sortBy: 'trending',
      crossDisciplinary: false
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const activeFilterCount = Object.values(localFilters)?.reduce((count, value) => {
    if (Array.isArray(value)) return count + value?.length;
    if (typeof value === 'boolean') return count + (value ? 1 : 0);
    if (typeof value === 'string' && value !== '' && value !== 'trending') return count + 1;
    return count;
  }, 0);

  return (
    <div className={`bg-card border border-border rounded-xl transition-all duration-300 ${
      isOpen ? 'shadow-intellectual' : ''
    }`}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={18} className="text-muted-foreground" />
            <h3 className="font-semibold text-card-foreground">Filters</h3>
            {activeFilterCount > 0 && (
              <div className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                {activeFilterCount}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                iconName="X"
                iconPosition="left"
              >
                Clear
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              iconName={isOpen ? "ChevronUp" : "ChevronDown"}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 space-y-6">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Search topics, authors, or content..."
              value={localFilters?.search || ''}
              onChange={(e) => handleFilterChange('search', e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Universes */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Knowledge Universes</h4>
            <div className="space-y-2">
              {universes?.map((universe) => (
                <Checkbox
                  key={universe?.value}
                  label={
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${universe?.color}`} />
                      <span>{universe?.label}</span>
                    </div>
                  }
                  checked={(localFilters?.universes || [])?.includes(universe?.value)}
                  onChange={(e) => handleArrayFilterChange('universes', universe?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Difficulty Level</h4>
            <div className="space-y-2">
              {difficultyLevels?.map((level) => (
                <Checkbox
                  key={level?.value}
                  label={
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5]?.map((dot) => (
                          <div
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                              dot <= level?.value ? level?.color : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span>{level?.label}</span>
                    </div>
                  }
                  checked={(localFilters?.difficulty || [])?.includes(level?.value)}
                  onChange={(e) => handleArrayFilterChange('difficulty', level?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Content Types */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Content Type</h4>
            <div className="space-y-2">
              {contentTypes?.map((type) => (
                <Checkbox
                  key={type?.value}
                  label={
                    <div className="flex items-center space-x-2">
                      <Icon name={type?.icon} size={14} className="text-muted-foreground" />
                      <span>{type?.label}</span>
                    </div>
                  }
                  checked={(localFilters?.contentTypes || [])?.includes(type?.value)}
                  onChange={(e) => handleArrayFilterChange('contentTypes', type?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Cross-Disciplinary */}
          <div>
            <Checkbox
              label="Cross-Disciplinary Content Only"
              description="Show content that bridges multiple knowledge domains"
              checked={localFilters?.crossDisciplinary || false}
              onChange={(e) => handleFilterChange('crossDisciplinary', e?.target?.checked)}
            />
          </div>

          {/* Sort Options */}
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-3">Sort By</h4>
            <div className="space-y-2">
              {[
                { value: 'trending', label: 'Trending Now' },
                { value: 'newest', label: 'Newest First' },
                { value: 'popular', label: 'Most Popular' },
                { value: 'difficulty', label: 'Difficulty Level' },
                { value: 'alphabetical', label: 'Alphabetical' }
              ]?.map((option) => (
                <Checkbox
                  key={option?.value}
                  label={option?.label}
                  checked={localFilters?.sortBy === option?.value}
                  onChange={(e) => {
                    if (e?.target?.checked) {
                      handleFilterChange('sortBy', option?.value);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;