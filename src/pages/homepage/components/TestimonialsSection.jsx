import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: `BlogCraft has revolutionized how I share my research. The platform's support for mathematical notation and code syntax highlighting makes it perfect for technical content. The cross-disciplinary audience has led to unexpected collaborations and insights.`,
      author: "Dr. Jennifer Liu",
      title: "Principal Research Scientist, Google DeepMind",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      company: "Google DeepMind",
      expertise: ["Machine Learning", "Mathematics"],
      rating: 5
    },
    {
      id: 2,
      content: `As someone who works at the intersection of nutrition and data science, I've struggled to find a platform that understands interdisciplinary content. BlogCraft not only gets it but actively encourages these connections. My readership has grown 300% in six months.`,
      author: "Prof. Marcus Thompson",
      title: "Director of Computational Nutrition Lab, MIT",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      company: "MIT",
      expertise: ["Nutrition Science", "Data Analytics"],
      rating: 5
    },
    {
      id: 3,
      content: `The template-driven authoring tools are a game-changer. I can focus on the content while the platform handles the complex formatting. The community of technical professionals here is unmatched - the discussions are always insightful and constructive.`,
      author: "Sarah Kim",
      title: "Senior Software Engineer & Technical Writer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "Stripe",
      expertise: ["Software Engineering", "Technical Writing"],
      rating: 5
    },
    {
      id: 4,
      content: `BlogCraft has become my go-to platform for staying current with developments across multiple fields. The quality of content is consistently high, and the recommendation engine helps me discover connections I never would have found otherwise.`,
      author: "Dr. Ahmed Hassan",
      title: "Quantum Computing Researcher",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "IBM Research",
      expertise: ["Quantum Computing", "Physics"],
      rating: 5
    }
  ];

  const industryMetrics = [
    {
      metric: "98%",
      label: "Creator Satisfaction",
      description: "of creators rate their experience as excellent"
    },
    {
      metric: "4.9/5",
      label: "Platform Rating",
      description: "average rating from technical professionals"
    },
    {
      metric: "85%",
      label: "Knowledge Transfer",
      description: "of readers apply insights to their work"
    },
    {
      metric: "250%",
      label: "Average Growth",
      description: "increase in creator audience within 6 months"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTest = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of technical professionals who have made BlogCraft their platform 
            of choice for sharing and discovering cutting-edge knowledge.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-modal-shadow p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Quote" size={24} className="text-primary-foreground" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <blockquote className="text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed">
                "{currentTest?.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={currentTest?.avatar}
                  alt={currentTest?.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{currentTest?.author}</h4>
                  <p className="text-slate-600">{currentTest?.title}</p>
                  <p className="text-sm text-slate-500">{currentTest?.company}</p>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentTest?.expertise?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(currentTest?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Icon name="ChevronLeft" size={20} className="text-slate-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Icon name="ChevronRight" size={20} className="text-slate-600" />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Industry Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industryMetrics?.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {item?.metric}
              </div>
              <div className="text-lg font-semibold text-slate-300 mb-2">
                {item?.label}
              </div>
              <div className="text-sm text-slate-400">
                {item?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.slice(1, 4)?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-4">
                "{testimonial?.content}"
              </blockquote>
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-white font-medium text-sm">{testimonial?.author}</div>
                  <div className="text-slate-400 text-xs">{testimonial?.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;