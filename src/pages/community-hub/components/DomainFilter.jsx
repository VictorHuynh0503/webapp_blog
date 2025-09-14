import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DomainFilter = ({ domains, selectedDomains, onDomainToggle, onClearAll }) => {
  const getDomainConfig = (domain) => {
    const configs = {
      'All': { icon: 'Globe', color: 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200' },
      'Engineering': { icon: 'Wrench', color: 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200' },
      'Mathematics': { icon: 'Calculator', color: 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200' },
      'Nutrition': { icon: 'Apple', color: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200' },
      'Computer Science': { icon: 'Code', color: 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200' },
      'Physics': { icon: 'Atom', color: 'bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200' },
      'Biology': { icon: 'Microscope', color: 'bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200' },
      'Chemistry': { icon: 'FlaskConical', color: 'bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200' }
    };
    return configs?.[domain] || configs?.['All'];
  };

  const isSelected = (domain) => selectedDomains?.includes(domain);
  const hasSelections = selectedDomains?.length > 0 && !selectedDomains?.includes('All');

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <Icon name="Filter" size={18} className="text-primary" />
          Knowledge Domains
        </h3>
        {hasSelections && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-card-foreground"
          >
            <Icon name="X" size={14} className="mr-1" />
            Clear All
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
        {domains?.map((domain) => {
          const config = getDomainConfig(domain?.name);
          const selected = isSelected(domain?.name);
          
          return (
            <button
              key={domain?.name}
              onClick={() => onDomainToggle(domain?.name)}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 text-left ${
                selected 
                  ? `${config?.color} ring-2 ring-primary ring-opacity-20 shadow-sm` 
                  : `${config?.color} hover:shadow-sm`
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon name={config?.icon} size={16} />
                <div>
                  <div className="font-medium text-sm">{domain?.name}</div>
                  <div className="text-xs opacity-75">
                    {domain?.count} {domain?.count === 1 ? 'discussion' : 'discussions'}
                  </div>
                </div>
              </div>
              {selected && (
                <Icon name="Check" size={16} className="text-primary" />
              )}
            </button>
          );
        })}
      </div>
      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-card-foreground">
              {domains?.reduce((sum, domain) => sum + domain?.count, 0)}
            </div>
            <div className="text-xs text-muted-foreground">Total Discussions</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-card-foreground">
              {domains?.reduce((sum, domain) => sum + domain?.activeToday, 0)}
            </div>
            <div className="text-xs text-muted-foreground">Active Today</div>
          </div>
        </div>
      </div>
      {/* Popular Tags */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {['AI/ML', 'Quantum', 'Sustainability', 'Biotech', 'Robotics', 'Data Science']?.map((tag) => (
            <button
              key={tag}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainFilter;