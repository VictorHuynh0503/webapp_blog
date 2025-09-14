import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const PublishModal = ({ isVisible, onClose, onPublish }) => {
  const [publishData, setPublishData] = useState({
    title: 'Technical Documentation: React Performance Optimization',
    subtitle: 'A comprehensive guide to optimizing React applications for production',
    category: 'engineering',
    tags: ['react', 'performance', 'optimization', 'javascript'],
    visibility: 'public',
    allowComments: true,
    enableSEO: true,
    schedulePublish: false,
    publishDate: '',
    publishTime: '',
    monetization: false,
    premiumContent: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const categories = [
    { value: 'engineering', label: 'Engineering', icon: 'Cpu' },
    { value: 'mathematics', label: 'Mathematics', icon: 'Calculator' },
    { value: 'nutrition', label: 'Nutrition', icon: 'Apple' },
    { value: 'research', label: 'Research', icon: 'BookOpen' },
    { value: 'tutorial', label: 'Tutorial', icon: 'GraduationCap' }
  ];

  const visibilityOptions = [
    { value: 'public', label: 'Public', description: 'Anyone can read this article' },
    { value: 'unlisted', label: 'Unlisted', description: 'Only people with the link can read' },
    { value: 'private', label: 'Private', description: 'Only you can read this article' }
  ];

  const handleInputChange = (field, value) => {
    setPublishData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!publishData?.title?.trim()) newErrors.title = 'Title is required';
      if (!publishData?.category) newErrors.category = 'Category is required';
    }
    
    if (step === 2 && publishData?.schedulePublish) {
      if (!publishData?.publishDate) newErrors.publishDate = 'Publish date is required';
      if (!publishData?.publishTime) newErrors.publishTime = 'Publish time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePublish = () => {
    if (validateStep(currentStep)) {
      onPublish(publishData);
      onClose();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Input
                label="Article Title"
                type="text"
                value={publishData?.title}
                onChange={(e) => handleInputChange('title', e?.target?.value)}
                error={errors?.title}
                required
                placeholder="Enter your article title"
              />
            </div>
            <div>
              <Input
                label="Subtitle (Optional)"
                type="text"
                value={publishData?.subtitle}
                onChange={(e) => handleInputChange('subtitle', e?.target?.value)}
                placeholder="Brief description of your article"
                description="This will appear below your title and in search results"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <div className="grid grid-cols-2 gap-2">
                {categories?.map((category) => (
                  <button
                    key={category?.value}
                    onClick={() => handleInputChange('category', category?.value)}
                    className={`flex items-center space-x-2 p-3 border rounded-md transition-colors ${
                      publishData?.category === category?.value
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:bg-muted'
                    }`}
                  >
                    <Icon name={category?.icon} size={16} />
                    <span className="text-sm">{category?.label}</span>
                  </button>
                ))}
              </div>
              {errors?.category && (
                <p className="text-sm text-error mt-1">{errors?.category}</p>
              )}
            </div>
            <div>
              <Input
                label="Tags"
                type="text"
                value={publishData?.tags?.join(', ')}
                onChange={(e) => handleInputChange('tags', e?.target?.value?.split(',')?.map(tag => tag?.trim()))}
                placeholder="react, performance, optimization"
                description="Separate tags with commas. Max 10 tags."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Visibility</label>
              <div className="space-y-2">
                {visibilityOptions?.map((option) => (
                  <label
                    key={option?.value}
                    className={`flex items-start space-x-3 p-3 border rounded-md cursor-pointer transition-colors ${
                      publishData?.visibility === option?.value
                        ? 'border-primary bg-primary/10' :'border-border hover:bg-muted'
                    }`}
                  >
                    <input
                      type="radio"
                      name="visibility"
                      value={option?.value}
                      checked={publishData?.visibility === option?.value}
                      onChange={(e) => handleInputChange('visibility', e?.target?.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-foreground">{option?.label}</div>
                      <div className="text-sm text-muted-foreground">{option?.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Checkbox
                label="Allow comments"
                description="Readers can comment on your article"
                checked={publishData?.allowComments}
                onChange={(e) => handleInputChange('allowComments', e?.target?.checked)}
              />

              <Checkbox
                label="Enable SEO optimization"
                description="Optimize for search engines"
                checked={publishData?.enableSEO}
                onChange={(e) => handleInputChange('enableSEO', e?.target?.checked)}
              />

              <Checkbox
                label="Schedule for later"
                description="Publish at a specific date and time"
                checked={publishData?.schedulePublish}
                onChange={(e) => handleInputChange('schedulePublish', e?.target?.checked)}
              />

              {publishData?.schedulePublish && (
                <div className="ml-6 grid grid-cols-2 gap-4">
                  <Input
                    label="Date"
                    type="date"
                    value={publishData?.publishDate}
                    onChange={(e) => handleInputChange('publishDate', e?.target?.value)}
                    error={errors?.publishDate}
                    required
                  />
                  <Input
                    label="Time"
                    type="time"
                    value={publishData?.publishTime}
                    onChange={(e) => handleInputChange('publishTime', e?.target?.value)}
                    error={errors?.publishTime}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Checkbox
                label="Enable monetization"
                description="Allow readers to support your work"
                checked={publishData?.monetization}
                onChange={(e) => handleInputChange('monetization', e?.target?.checked)}
              />

              <Checkbox
                label="Premium content"
                description="Require subscription to read"
                checked={publishData?.premiumContent}
                onChange={(e) => handleInputChange('premiumContent', e?.target?.checked)}
              />
            </div>
            <div className="bg-muted/30 p-4 rounded-md">
              <h4 className="font-medium text-foreground mb-2">Publishing Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Title:</span>
                  <span className="text-foreground font-medium">{publishData?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="text-foreground">{categories?.find(c => c?.value === publishData?.category)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Visibility:</span>
                  <span className="text-foreground capitalize">{publishData?.visibility}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tags:</span>
                  <span className="text-foreground">{publishData?.tags?.length} tags</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-modal max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-card-foreground">Publish Article</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Step {currentStep} of 3: {currentStep === 1 ? 'Basic Information' : currentStep === 2 ? 'Publishing Options' : 'Review & Publish'}
            </p>
          </div>
          <Button variant="ghost" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-2">
            {[1, 2, 3]?.map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step < currentStep ? <Icon name="Check" size={16} /> : step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 rounded ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex space-x-2">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack}>
                <Icon name="ChevronLeft" size={16} className="mr-1" />
                Back
              </Button>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            {currentStep < 3 ? (
              <Button onClick={handleNext}>
                Next
                <Icon name="ChevronRight" size={16} className="ml-1" />
              </Button>
            ) : (
              <Button onClick={handlePublish}>
                <Icon name="Send" size={16} className="mr-1" />
                {publishData?.schedulePublish ? 'Schedule' : 'Publish'} Article
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishModal;