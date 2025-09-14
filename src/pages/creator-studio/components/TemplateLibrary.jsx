import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TemplateLibrary = ({ onSelectTemplate, isVisible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const templateCategories = [
    { id: 'all', name: 'All Templates', icon: 'Grid3X3' },
    { id: 'engineering', name: 'Engineering', icon: 'Cpu' },
    { id: 'mathematics', name: 'Mathematics', icon: 'Calculator' },
    { id: 'nutrition', name: 'Nutrition', icon: 'Apple' },
    { id: 'research', name: 'Research', icon: 'BookOpen' },
    { id: 'tutorial', name: 'Tutorial', icon: 'GraduationCap' }
  ];

  const templates = [
    {
      id: 1,
      name: 'Technical Documentation',
      category: 'engineering',
      description: 'Comprehensive template for API documentation, system architecture, and technical specifications.',
      features: ['Code blocks', 'Diagrams', 'API references'],
      preview: 'Perfect for documenting complex systems with embedded code examples and architectural diagrams.',
      difficulty: 'Intermediate',
      estimatedTime: '30-45 min'
    },
    {
      id: 2,
      name: 'Mathematical Proof',
      category: 'mathematics',
      description: 'Structured template for mathematical proofs with LaTeX support and theorem formatting.',
      features: ['LaTeX rendering', 'Theorem blocks', 'Proof structure'],
      preview: 'Ideal for presenting mathematical proofs with proper notation and logical flow.',
      difficulty: 'Advanced',
      estimatedTime: '45-60 min'
    },
    {
      id: 3,
      name: 'Nutrition Research',
      category: 'nutrition',
      description: 'Evidence-based template for nutrition studies, meal plans, and dietary analysis.',
      features: ['Data tables', 'Citations', 'Nutritional charts'],
      preview: 'Comprehensive format for presenting nutritional research with proper citations.',
      difficulty: 'Intermediate',
      estimatedTime: '25-40 min'
    },
    {
      id: 4,
      name: 'Algorithm Explanation',
      category: 'engineering',
      description: 'Step-by-step template for explaining algorithms with code examples and complexity analysis.',
      features: ['Code highlighting', 'Complexity analysis', 'Visual diagrams'],
      preview: 'Perfect for breaking down complex algorithms into understandable steps.',
      difficulty: 'Intermediate',
      estimatedTime: '35-50 min'
    },
    {
      id: 5,
      name: 'Research Paper Summary',
      category: 'research',
      description: 'Academic template for summarizing research papers with proper citation format.',
      features: ['Abstract section', 'Citation management', 'Key findings'],
      preview: 'Structured format for academic paper summaries and literature reviews.',
      difficulty: 'Advanced',
      estimatedTime: '40-55 min'
    },
    {
      id: 6,
      name: 'Tutorial Guide',
      category: 'tutorial',
      description: 'Interactive template for creating step-by-step tutorials with multimedia support.',
      features: ['Step numbering', 'Media embedding', 'Progress tracking'],
      preview: 'Engaging format for educational content with interactive elements.',
      difficulty: 'Beginner',
      estimatedTime: '20-35 min'
    }
  ];

  const filteredTemplates = templates?.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template?.category === selectedCategory;
    const matchesSearch = template?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         template?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-modal max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground">Template Library</h2>
            <p className="text-muted-foreground mt-1">Choose a template to get started with your content</p>
          </div>
          <Button variant="ghost" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 border-r border-border p-4 overflow-y-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="space-y-1">
              {templateCategories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-card-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTemplates?.map((template) => (
                <div
                  key={template?.id}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-intellectual transition-shadow cursor-pointer"
                  onClick={() => onSelectTemplate(template)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{template?.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(template?.difficulty)}`}>
                      {template?.difficulty}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {template?.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {template?.features?.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{template?.estimatedTime}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Use Template
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No templates found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateLibrary;