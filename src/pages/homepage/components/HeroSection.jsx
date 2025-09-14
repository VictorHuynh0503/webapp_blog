import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [animatedNodes, setAnimatedNodes] = useState([]);

  useEffect(() => {
    // Generate animated nodes for knowledge domain visualization
    const nodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setAnimatedNodes(nodes);
  }, []);

  const knowledgeDomains = [
    { name: 'Engineering', color: 'text-orange-500', icon: 'Cog' },
    { name: 'Mathematics', color: 'text-purple-500', icon: 'Calculator' },
    { name: 'Nutrition', color: 'text-green-500', icon: 'Apple' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Nodes */}
      <div className="absolute inset-0 opacity-20">
        {animatedNodes?.map((node) => (
          <div
            key={node?.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${node?.x}%`,
              top: `${node?.y}%`,
              animationDelay: `${node?.delay}s`,
              animationDuration: `${node?.duration}s`
            }}
          />
        ))}
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {animatedNodes?.slice(0, 10)?.map((node, i) => (
            <line
              key={i}
              x1={`${node?.x}%`}
              y1={`${node?.y}%`}
              x2={`${animatedNodes?.[(i + 1) % animatedNodes?.length]?.x || 0}%`}
              y2={`${animatedNodes?.[(i + 1) % animatedNodes?.length]?.y || 0}%`}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Where{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>{' '}
            Meets{' '}
            <span className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
              Exploration
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier destination for polymathic creators who refuse to be confined to single disciplines. 
            Share knowledge across Engineering, Mathematics, Nutrition, and beyond.
          </p>

          {/* Knowledge Domain Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {knowledgeDomains?.map((domain) => (
              <div
                key={domain?.name}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <Icon name={domain?.icon} size={16} className={domain?.color} />
                <span className="text-white font-medium">{domain?.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/creator-studio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                iconName="PenTool"
                iconPosition="left"
              >
                Start Writing
              </Button>
            </Link>
            
            <Link to="/topic-universes">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                iconName="Compass"
                iconPosition="left"
              >
                Discover Content
              </Button>
            </Link>
          </div>

          {/* Social Proof Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-slate-400">Technical Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-slate-400">Published Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-400">Expert Creators</div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;