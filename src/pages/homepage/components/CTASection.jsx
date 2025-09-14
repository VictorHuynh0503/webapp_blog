import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const creatorBenefits = [
    {
      icon: 'PenTool',
      title: 'Advanced Editor',
      description: 'Template-driven authoring with LaTeX support and code highlighting'
    },
    {
      icon: 'Users',
      title: 'Expert Audience',
      description: 'Connect with 50K+ technical professionals across disciplines'
    },
    {
      icon: 'DollarSign',
      title: 'Monetization',
      description: 'Premium subscriptions and revenue sharing opportunities'
    },
    {
      icon: 'TrendingUp',
      title: 'Analytics',
      description: 'Detailed insights on content performance and audience engagement'
    }
  ];

  const readerBenefits = [
    {
      icon: 'Compass',
      title: 'Smart Discovery',
      description: 'AI-powered recommendations across multiple knowledge domains'
    },
    {
      icon: 'BookOpen',
      title: 'Quality Content',
      description: 'Curated articles from verified experts and industry leaders'
    },
    {
      icon: 'MessageSquare',
      title: 'Expert Discussions',
      description: 'Engage in meaningful conversations with field specialists'
    },
    {
      icon: 'Bookmark',
      title: 'Personal Library',
      description: 'Save, organize, and track your learning progress'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Professionals' },
    { number: '10K+', label: 'Published Articles' },
    { number: '500+', label: 'Expert Creators' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Join the Future of
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Knowledge Sharing
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're an expert ready to share your insights or a curious mind seeking 
            cutting-edge knowledge, BlogCraft is your gateway to intellectual growth.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat?.number}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Path CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Creator Path */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="PenTool" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Creators</h3>
              <p className="text-blue-100">
                Share your expertise and build your professional brand
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {creatorBenefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={benefit?.icon} size={16} className="text-orange-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit?.title}</h4>
                    <p className="text-blue-100 text-sm">{benefit?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/creator-studio" className="block">
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Creating Today
              </Button>
            </Link>
          </div>

          {/* Reader Path */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Readers</h3>
              <p className="text-blue-100">
                Discover insights that advance your career and knowledge
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {readerBenefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={benefit?.icon} size={16} className="text-green-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit?.title}</h4>
                    <p className="text-blue-100 text-sm">{benefit?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/topic-universes" className="block">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Explore Content Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Knowledge Journey?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of professionals who are already part of the BlogCraft community. 
              Start your journey today with a free account.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reader-dashboard">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-slate-100"
                  iconName="UserPlus"
                  iconPosition="left"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link to="/community-hub">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  iconName="Users"
                  iconPosition="left"
                >
                  Join Community
                </Button>
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              No credit card required • Free forever • Premium features available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;