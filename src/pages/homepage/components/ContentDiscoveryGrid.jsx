import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ContentDiscoveryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Topics', icon: 'Grid3X3' },
    { id: 'engineering', label: 'Engineering', icon: 'Cog', color: 'text-orange-500' },
    { id: 'mathematics', label: 'Mathematics', icon: 'Calculator', color: 'text-purple-500' },
    { id: 'nutrition', label: 'Nutrition', icon: 'Apple', color: 'text-green-500' }
  ];

  const trendingArticles = [
    {
      id: 1,
      title: "Advanced React Patterns for Scalable Applications",
      excerpt: "Exploring compound components, render props, and custom hooks for building maintainable React applications at enterprise scale.",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "engineering",
      readTime: "12 min read",
      likes: 234,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      publishedAt: "2 days ago",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      id: 2,
      title: "The Beauty of Fourier Transforms in Signal Processing",
      excerpt: "Understanding how mathematical elegance meets practical engineering through the lens of frequency domain analysis.",
      author: "Dr. Michael Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "mathematics",
      readTime: "18 min read",
      likes: 189,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      publishedAt: "1 day ago",
      tags: ["Mathematics", "Signal Processing", "Engineering"]
    },
    {
      id: 3,
      title: "Micronutrient Optimization for Cognitive Performance",
      excerpt: "Evidence-based approaches to nutritional interventions that enhance mental clarity and sustained focus for knowledge workers.",
      author: "Dr. Emily Watson",
      authorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      category: "nutrition",
      readTime: "15 min read",
      likes: 156,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      publishedAt: "3 days ago",
      tags: ["Nutrition", "Cognitive Health", "Biohacking"]
    },
    {
      id: 4,
      title: "Machine Learning Model Interpretability in Production",
      excerpt: "Practical strategies for maintaining transparency and trust in AI systems while meeting business requirements.",
      author: "Alex Kumar",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "engineering",
      readTime: "20 min read",
      likes: 298,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      publishedAt: "1 week ago",
      tags: ["Machine Learning", "AI", "Production"]
    },
    {
      id: 5,
      title: "Graph Theory Applications in Network Security",
      excerpt: "How mathematical graph structures provide elegant solutions to complex cybersecurity challenges in distributed systems.",
      author: "Prof. Lisa Zhang",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "mathematics",
      readTime: "16 min read",
      likes: 167,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      publishedAt: "4 days ago",
      tags: ["Graph Theory", "Security", "Networks"]
    },
    {
      id: 6,
      title: "Personalized Nutrition Through Genetic Analysis",
      excerpt: "The intersection of genomics and nutrition science: tailoring dietary recommendations based on individual genetic profiles.",
      author: "Dr. James Park",
      authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      category: "nutrition",
      readTime: "22 min read",
      likes: 203,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      publishedAt: "5 days ago",
      tags: ["Genetics", "Personalized Medicine", "Nutrition"]
    }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? trendingArticles 
    : trendingArticles?.filter(article => article?.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      engineering: 'text-orange-500',
      mathematics: 'text-purple-500',
      nutrition: 'text-green-500'
    };
    return colors?.[category] || 'text-blue-500';
  };

  const getCategoryBg = (category) => {
    const colors = {
      engineering: 'bg-orange-50 border-orange-200',
      mathematics: 'bg-purple-50 border-purple-200',
      nutrition: 'bg-green-50 border-green-200'
    };
    return colors?.[category] || 'bg-blue-50 border-blue-200';
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Discover Trending Content
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore cutting-edge insights from experts across multiple disciplines. 
            Find the connections between fields that spark innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon 
                name={filter?.icon} 
                size={18} 
                className={activeFilter === filter?.id ? 'text-primary-foreground' : filter?.color}
              />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles?.map((article) => (
            <article
              key={article?.id}
              className="bg-white rounded-xl shadow-intellectual hover:shadow-modal-shadow transition-all duration-300 overflow-hidden group"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBg(article?.category)}`}>
                  <span className={getCategoryColor(article?.category)}>
                    {article?.category?.charAt(0)?.toUpperCase() + article?.category?.slice(1)}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article?.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {article?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article?.tags?.slice(0, 2)?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={article?.authorAvatar}
                      alt={article?.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{article?.author}</p>
                      <p className="text-xs text-slate-500">{article?.publishedAt}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{article?.readTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{article?.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link to="/topic-universes">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Content
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentDiscoveryGrid;