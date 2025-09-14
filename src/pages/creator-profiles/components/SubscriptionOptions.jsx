import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SubscriptionOptions = ({ subscriptionData }) => {
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getPlanIcon = (planType) => {
    const icons = {
      free: 'UserPlus',
      premium: 'Crown',
      consultation: 'Calendar',
    };
    return icons?.[planType] || 'User';
  };

  const getPlanColor = (planType) => {
    const colors = {
      free: 'border-muted-foreground',
      premium: 'border-primary',
      consultation: 'border-accent',
    };
    return colors?.[planType] || 'border-muted';
  };

  const getPrice = (plan) => {
    if (plan?.type === 'free') return 'Free';
    if (plan?.type === 'consultation') return `$${plan?.price}/session`;
    
    const price = billingCycle === 'monthly' ? plan?.monthlyPrice : plan?.yearlyPrice;
    const period = billingCycle === 'monthly' ? 'month' : 'year';
    return `$${price}/${period}`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-card-foreground mb-2">
          Subscribe & Connect
        </h2>
        <p className="text-muted-foreground">
          Choose how you'd like to engage with this creator's content and expertise
        </p>
      </div>
      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted rounded-lg p-1 flex">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              billingCycle === 'monthly' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              billingCycle === 'yearly' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Yearly
            <span className="ml-1 px-1.5 py-0.5 bg-success text-success-foreground text-xs rounded">
              Save 20%
            </span>
          </button>
        </div>
      </div>
      {/* Subscription Plans */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {subscriptionData?.plans?.map((plan) => (
          <div
            key={plan?.type}
            className={`relative border-2 rounded-lg p-6 transition-all duration-200 cursor-pointer ${
              selectedPlan === plan?.type
                ? `${getPlanColor(plan?.type)} shadow-intellectual`
                : 'border-border hover:border-muted-foreground'
            } ${plan?.popular ? 'ring-2 ring-primary ring-opacity-20' : ''}`}
            onClick={() => setSelectedPlan(plan?.type)}
          >
            {plan?.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={getPlanIcon(plan?.type)} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {plan?.name}
              </h3>
              
              <div className="text-3xl font-bold text-card-foreground mb-1">
                {getPrice(plan)}
              </div>
              
              {plan?.type !== 'free' && plan?.type !== 'consultation' && billingCycle === 'yearly' && (
                <div className="text-sm text-muted-foreground">
                  ${plan?.monthlyPrice}/month billed annually
                </div>
              )}
            </div>

            <div className="space-y-3 mb-6">
              {plan?.features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon 
                    name={feature?.included ? "Check" : "X"} 
                    size={16} 
                    className={`mt-0.5 ${
                      feature?.included ? 'text-success' : 'text-muted-foreground'
                    }`}
                  />
                  <span className={`text-sm ${
                    feature?.included ? 'text-card-foreground' : 'text-muted-foreground'
                  }`}>
                    {feature?.name}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant={selectedPlan === plan?.type ? 'default' : 'outline'}
              fullWidth
              className="mb-4"
            >
              {plan?.type === 'free' ? 'Follow for Free' : 
               plan?.type === 'consultation'? 'Book Session' : 'Subscribe Now'}
            </Button>

            {plan?.description && (
              <p className="text-xs text-muted-foreground text-center">
                {plan?.description}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* Current Subscribers */}
      <div className="bg-muted/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-card-foreground">
            Join the Community
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{subscriptionData?.totalSubscribers} subscribers</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {subscriptionData?.stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-card-foreground">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {subscriptionData?.recentSubscribers?.map((subscriber, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                title={subscriber?.name}
              >
                <span className="text-xs font-medium text-card-foreground">
                  {subscriber?.name?.charAt(0)}
                </span>
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">
                +{subscriptionData?.totalSubscribers - subscriptionData?.recentSubscribers?.length}
              </span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {subscriptionData?.recentSubscribers?.length} joined this week
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-card-foreground mb-4">
          What Subscribers Say
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {subscriptionData?.testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-4"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">
                    {testimonial?.author?.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-card-foreground text-sm">
                      {testimonial?.author}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      testimonial?.plan === 'Premium' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'
                    }`}>
                      {testimonial?.plan}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial?.comment}"
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={`${
                          i < testimonial?.rating
                            ? 'text-warning fill-current' :'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOptions;