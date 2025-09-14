import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCreators = () => {
  const featuredCreators = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior Software Architect & AI Researcher",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
      bio: "Bridging the gap between theoretical computer science and practical software engineering. Specializing in distributed systems, machine learning, and algorithmic optimization.",
      expertise: ["Software Engineering", "Machine Learning", "Algorithms"],
      followers: "12.5K",
      articles: 47,
      totalReads: "250K",
      verified: true,
      badges: [
        { name: "Engineering", color: "bg-orange-100 text-orange-700", icon: "Cog" },
        { name: "Mathematics", color: "bg-purple-100 text-purple-700", icon: "Calculator" }
      ]
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      title: "Applied Mathematics & Signal Processing Expert",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=300&fit=crop",
      bio: "Exploring the mathematical foundations of modern technology. From Fourier analysis to quantum computing, making complex mathematics accessible to engineers.",
      expertise: ["Applied Mathematics", "Signal Processing", "Quantum Computing"],
      followers: "8.9K",
      articles: 32,
      totalReads: "180K",
      verified: true,
      badges: [
        { name: "Mathematics", color: "bg-purple-100 text-purple-700", icon: "Calculator" },
        { name: "Engineering", color: "bg-orange-100 text-orange-700", icon: "Cog" }
      ]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Nutritional Biochemist & Performance Coach",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop",
      bio: "Combining biochemistry with practical nutrition science to optimize human performance. Specializing in cognitive enhancement and metabolic health for professionals.",
      expertise: ["Nutritional Biochemistry", "Cognitive Health", "Performance Optimization"],
      followers: "15.2K",
      articles: 38,
      totalReads: "320K",
      verified: true,
      badges: [
        { name: "Nutrition", color: "bg-green-100 text-green-700", icon: "Apple" },
        { name: "Biochemistry", color: "bg-blue-100 text-blue-700", icon: "Atom" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Featured Expert Creators
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the polymathic minds shaping the future of knowledge sharing. 
            These experts break boundaries between disciplines to deliver unique insights.
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredCreators?.map((creator) => (
            <div
              key={creator?.id}
              className="bg-white rounded-2xl shadow-intellectual hover:shadow-modal-shadow transition-all duration-300 overflow-hidden group"
            >
              {/* Cover Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={creator?.coverImage}
                  alt={`${creator?.name} cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Profile Content */}
              <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="relative -mt-12 mb-4">
                  <div className="relative inline-block">
                    <Image
                      src={creator?.avatar}
                      alt={creator?.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                    {creator?.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Creator Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {creator?.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {creator?.title}
                  </p>
                  <p className="text-sm text-slate-700 line-clamp-3">
                    {creator?.bio}
                  </p>
                </div>

                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {creator?.badges?.map((badge) => (
                    <span
                      key={badge?.name}
                      className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${badge?.color}`}
                    >
                      <Icon name={badge?.icon} size={12} />
                      <span>{badge?.name}</span>
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{creator?.followers}</div>
                    <div className="text-xs text-slate-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{creator?.articles}</div>
                    <div className="text-xs text-slate-500">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{creator?.totalReads}</div>
                    <div className="text-xs text-slate-500">Total Reads</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    iconName="UserPlus"
                    iconPosition="left"
                  >
                    Follow
                  </Button>
                  <Link to="/creator-profiles" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Creators */}
        <div className="text-center">
          <Link to="/creator-profiles">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3"
              iconName="Users"
              iconPosition="left"
            >
              Discover All Creators
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;