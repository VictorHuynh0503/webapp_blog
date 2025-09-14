import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProfileHero from './components/ProfileHero';
import ExpertiseMap from './components/ExpertiseMap';
import PublicationHistory from './components/PublicationHistory';
import TeachingStyle from './components/TeachingStyle';
import SubscriptionOptions from './components/SubscriptionOptions';
import SocialProof from './components/SocialProof';

const CreatorProfiles = () => {
  const { creatorId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock creator data
  const creatorData = {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    title: "Polymathic Engineer & Mathematics Educator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: `Dr. Sarah Chen is a distinguished engineer and mathematician who bridges the gap between complex theoretical concepts and practical applications. With over 15 years of experience in aerospace engineering and a PhD in Applied Mathematics from MIT, she specializes in making advanced technical concepts accessible to diverse audiences.\n\nHer unique approach combines rigorous mathematical foundations with real-world engineering insights, helping professionals and students understand the interconnections between different technical disciplines. Sarah has published over 50 peer-reviewed papers and has been featured in major technical publications for her innovative teaching methodologies.`,
    institutions: ["MIT", "NASA JPL", "Stanford"],
    stats: {
      followers: "12.5K",
      articles: "127",
      domains: "5"
    },
    expertiseAreas: [
      { name: "Aerospace Engineering", level: "Expert", color: "bg-orange-500" },
      { name: "Applied Mathematics", level: "Expert", color: "bg-purple-500" },
      { name: "Machine Learning", level: "Advanced", color: "bg-blue-500" },
      { name: "Systems Design", level: "Expert", color: "bg-green-500" },
      { name: "Technical Writing", level: "Advanced", color: "bg-red-500" },
      { name: "Data Visualization", level: "Intermediate", color: "bg-yellow-500" }
    ],
    credentials: [
      {
        title: "PhD in Applied Mathematics",
        organization: "Massachusetts Institute of Technology",
        year: "2015"
      },
      {
        title: "Outstanding Engineer Award",
        organization: "NASA Jet Propulsion Laboratory",
        year: "2020"
      },
      {
        title: "Best Technical Paper",
        organization: "IEEE Aerospace Conference",
        year: "2022"
      },
      {
        title: "Distinguished Educator Award",
        organization: "American Society for Engineering Education",
        year: "2023"
      }
    ]
  };

  // Mock expertise map data
  const expertiseMapData = {
    domains: [
      {
        id: "aerospace",
        name: "Aerospace",
        position: { x: 150, y: 100 },
        size: 40,
        color: "#f97316",
        articles: 45,
        reads: "125K",
        level: "Expert",
        description: "Advanced spacecraft design, orbital mechanics, and propulsion systems with focus on mission-critical applications.",
        recentArticles: [
          { title: "Optimizing Spacecraft Trajectories Using Machine Learning", reads: "2.3K", date: "Dec 2024" },
          { title: "Understanding Orbital Mechanics Through Visualization", reads: "1.8K", date: "Nov 2024" },
          { title: "The Future of Electric Propulsion Systems", reads: "3.1K", date: "Oct 2024" }
        ],
        connections: ["Mathematics", "Machine Learning", "Systems Design"]
      },
      {
        id: "mathematics",
        name: "Mathematics",
        position: { x: 300, y: 150 },
        size: 45,
        color: "#8b5cf6",
        articles: 38,
        reads: "98K",
        level: "Expert",
        description: "Applied mathematics, differential equations, and mathematical modeling for engineering applications.",
        recentArticles: [
          { title: "Differential Equations in Real-World Engineering", reads: "2.8K", date: "Dec 2024" },
          { title: "Linear Algebra for Machine Learning Engineers", reads: "4.2K", date: "Nov 2024" },
          { title: "Fourier Analysis Made Simple", reads: "3.5K", date: "Oct 2024" }
        ],
        connections: ["Aerospace", "Machine Learning", "Data Visualization"]
      },
      {
        id: "ml",
        name: "ML",
        position: { x: 450, y: 120 },
        size: 35,
        color: "#3b82f6",
        articles: 28,
        reads: "87K",
        level: "Advanced",
        description: "Machine learning applications in engineering, predictive modeling, and optimization algorithms.",
        recentArticles: [
          { title: "Neural Networks for Engineering Optimization", reads: "3.7K", date: "Dec 2024" },
          { title: "Predictive Maintenance Using ML", reads: "2.9K", date: "Nov 2024" },
          { title: "Deep Learning in Aerospace Applications", reads: "4.1K", date: "Oct 2024" }
        ],
        connections: ["Mathematics", "Systems Design", "Data Visualization"]
      },
      {
        id: "systems",
        name: "Systems",
        position: { x: 200, y: 250 },
        size: 38,
        color: "#10b981",
        articles: 16,
        reads: "52K",
        level: "Expert",
        description: "Complex systems design, integration, and optimization for large-scale engineering projects.",
        recentArticles: [
          { title: "Designing Resilient Engineering Systems", reads: "1.9K", date: "Dec 2024" },
          { title: "Systems Thinking in Modern Engineering", reads: "2.4K", date: "Nov 2024" },
          { title: "Integration Challenges in Aerospace Systems", reads: "1.7K", date: "Oct 2024" }
        ],
        connections: ["Aerospace", "Machine Learning"]
      }
    ],
    connections: [
      { from: { x: 150, y: 100 }, to: { x: 300, y: 150 } },
      { from: { x: 300, y: 150 }, to: { x: 450, y: 120 } },
      { from: { x: 450, y: 120 }, to: { x: 200, y: 250 } },
      { from: { x: 200, y: 250 }, to: { x: 150, y: 100 } },
      { from: { x: 300, y: 150 }, to: { x: 200, y: 250 } }
    ]
  };

  // Mock publications data
  const publicationsData = [
    {
      id: 1,
      title: "Advanced Orbital Mechanics: A Comprehensive Guide to Spacecraft Navigation",
      excerpt: "Explore the fundamental principles of orbital mechanics and their practical applications in modern spacecraft design. This comprehensive guide covers everything from basic Kepler\'s laws to advanced trajectory optimization techniques.",
      category: "engineering",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop",
      readTime: 12,
      engagement: "high",
      stats: {
        views: "4.2K",
        likes: "287",
        comments: "45"
      },
      tags: ["orbital-mechanics", "spacecraft", "navigation", "aerospace"],
      averageRating: 4.8,
      ratings: [5, 5, 4, 5, 5],
      testimonial: {
        text: "This article completely changed how I approach orbital calculations. The visual explanations are outstanding.",
        author: "Michael Rodriguez",
        title: "Aerospace Engineer at SpaceX"
      },
      isPremium: false
    },
    {
      id: 2,
      title: "Machine Learning Applications in Predictive Maintenance for Aerospace Systems",
      excerpt: "Discover how machine learning algorithms can revolutionize maintenance schedules and prevent costly failures in aerospace applications. Learn practical implementation strategies and real-world case studies.",
      category: "engineering",
      publishDate: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      readTime: 15,
      engagement: "high",
      stats: {
        views: "3.8K",
        likes: "312",
        comments: "67"
      },
      tags: ["machine-learning", "predictive-maintenance", "aerospace", "algorithms"],
      averageRating: 4.9,
      ratings: [5, 5, 5, 4, 5],
      testimonial: {
        text: "Incredibly practical approach to ML in aerospace. The code examples are production-ready.",
        author: "Lisa Chen",
        title: "Senior Data Scientist at Boeing"
      },
      isPremium: true
    },
    {
      id: 3,
      title: "Understanding Differential Equations Through Engineering Applications",
      excerpt: "Master differential equations by seeing how they solve real engineering problems. From heat transfer to vibration analysis, discover the practical power of mathematical modeling.",
      category: "mathematics",
      publishDate: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      readTime: 18,
      engagement: "medium",
      stats: {
        views: "2.9K",
        likes: "198",
        comments: "34"
      },
      tags: ["differential-equations", "mathematics", "engineering", "modeling"],
      averageRating: 4.7,
      ratings: [5, 4, 5, 5, 4],
      testimonial: {
        text: "Finally, someone who explains differential equations in a way that makes sense for engineers!",
        author: "David Park",
        title: "Mechanical Engineer"
      },
      isPremium: false
    },
    {
      id: 4,
      title: "Nutritional Optimization for High-Performance Engineering Teams",
      excerpt: "Explore the science behind nutrition and cognitive performance in demanding technical environments. Learn evidence-based strategies to maintain peak mental performance during complex problem-solving.",
      category: "nutrition",
      publishDate: "Oct 22, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop",
      readTime: 10,
      engagement: "medium",
      stats: {
        views: "2.1K",
        likes: "156",
        comments: "28"
      },
      tags: ["nutrition", "cognitive-performance", "productivity", "health"],
      averageRating: 4.6,
      ratings: [5, 4, 4, 5, 5],
      isPremium: false
    }
  ];

  // Mock teaching style data
  const teachingStyleData = {
    philosophy: "I believe in building bridges between abstract mathematical concepts and tangible engineering applications. My teaching approach emphasizes visual learning, step-by-step progression, and real-world relevance. Every complex topic can be understood when broken down into fundamental principles and connected to practical examples that students can relate to.",
    approaches: [
      {
        name: "Visual Learning",
        description: "Diagrams, animations, and interactive visualizations"
      },
      {
        name: "Step-by-Step",
        description: "Breaking complex problems into manageable parts"
      },
      {
        name: "Real-world Examples",
        description: "Connecting theory to practical applications"
      },
      {
        name: "Interactive",
        description: "Hands-on exercises and problem-solving sessions"
      },
      {
        name: "Conceptual",
        description: "Focus on understanding underlying principles"
      },
      {
        name: "Practical",
        description: "Emphasis on applicable skills and techniques"
      }
    ],
    difficultyLevels: [
      { name: "Beginner", percentage: 25 },
      { name: "Intermediate", percentage: 45 },
      { name: "Advanced", percentage: 25 },
      { name: "Expert", percentage: 5 }
    ],
    metrics: [
      { value: "4.9/5", label: "Average Rating" },
      { value: "94%", label: "Completion Rate" },
      { value: "87%", label: "Recommend Rate" },
      { value: "12K+", label: "Students Taught" }
    ],
    feedback: [
      {
        author: "Alex Thompson",
        rating: 5,
        comment: "Dr. Chen's explanations are crystal clear. She has a gift for making complex mathematics accessible.",
        date: "Dec 2024",
        article: "Differential Equations Guide"
      },
      {
        author: "Maria Garcia",
        rating: 5,
        comment: "The visual approach to orbital mechanics finally made everything click for me. Excellent teaching!",
        date: "Nov 2024",
        article: "Orbital Mechanics Fundamentals"
      },
      {
        author: "James Wilson",
        rating: 4,
        comment: "Great practical examples. I immediately applied these concepts in my aerospace project.",
        date: "Nov 2024",
        article: "Machine Learning in Aerospace"
      }
    ],
    outcomes: [
      {
        title: "Improved Problem-Solving Skills",
        description: "Students develop systematic approaches to complex technical challenges"
      },
      {
        title: "Cross-Disciplinary Understanding",
        description: "Learners see connections between mathematics, engineering, and other fields"
      },
      {
        title: "Practical Application Ability",
        description: "Students can immediately apply concepts to real-world projects"
      },
      {
        title: "Confidence in Technical Communication",
        description: "Enhanced ability to explain complex concepts to others"
      }
    ],
    sample: {
      title: "Introduction to Orbital Mechanics",
      excerpt: "In this sample lesson, we'll explore how a simple understanding of Newton's laws leads to the elegant mathematics of orbital motion. Using visual demonstrations and practical examples from current space missions...",
      duration: "15 min",
      difficulty: "Intermediate",
      topic: "Aerospace Engineering"
    }
  };

  // Mock subscription data
  const subscriptionData = {
    totalSubscribers: 12547,
    plans: [
      {
        type: "free",
        name: "Free Follower",
        monthlyPrice: 0,
        yearlyPrice: 0,
        popular: false,
        features: [
          { name: "Access to free articles", included: true },
          { name: "Weekly newsletter", included: true },
          { name: "Community discussions", included: true },
          { name: "Premium content", included: false },
          { name: "Direct messaging", included: false },
          { name: "Video tutorials", included: false },
          { name: "1-on-1 consultation", included: false }
        ],
        description: "Perfect for getting started with Dr. Chen\'s content"
      },
      {
        type: "premium",
        name: "Premium Subscriber",
        monthlyPrice: 15,
        yearlyPrice: 144,
        popular: true,
        features: [
          { name: "Access to free articles", included: true },
          { name: "Weekly newsletter", included: true },
          { name: "Community discussions", included: true },
          { name: "Premium content", included: true },
          { name: "Direct messaging", included: true },
          { name: "Video tutorials", included: true },
          { name: "1-on-1 consultation", included: false }
        ],
        description: "Full access to all content and exclusive materials"
      },
      {
        type: "consultation",
        name: "Expert Consultation",
        price: 200,
        popular: false,
        features: [
          { name: "60-minute 1-on-1 session", included: true },
          { name: "Personalized guidance", included: true },
          { name: "Follow-up resources", included: true },
          { name: "Project review", included: true },
          { name: "Career mentoring", included: true },
          { name: "Technical problem solving", included: true },
          { name: "Ongoing email support", included: false }
        ],
        description: "Direct access to Dr. Chen's expertise for your specific needs"
      }
    ],
    stats: [
      { value: "12.5K", label: "Total Subscribers" },
      { value: "2.8K", label: "Premium Members" },
      { value: "4.9★", label: "Average Rating" },
      { value: "94%", label: "Retention Rate" }
    ],
    recentSubscribers: [
      { name: "Alex Chen" },
      { name: "Maria Rodriguez" },
      { name: "David Kim" },
      { name: "Sarah Johnson" },
      { name: "Michael Brown" }
    ],
    testimonials: [
      {
        author: "Jennifer Walsh",
        plan: "Premium",
        rating: 5,
        comment: "The premium content is worth every penny. Dr. Chen's insights have accelerated my career significantly."
      },
      {
        author: "Robert Chen",
        plan: "Free",
        rating: 5,
        comment: "Even the free content is incredibly valuable. Planning to upgrade to premium soon!"
      }
    ]
  };

  // Mock social proof data
  const socialProofData = {
    achievements: [
      {
        type: "Award",
        title: "Outstanding Technical Educator of the Year",
        description: "Recognized for innovative approaches to technical education and exceptional student outcomes",
        organization: "American Society for Engineering Education",
        date: "2024",
        verified: true
      },
      {
        type: "Speaking",
        title: "Keynote Speaker - Future of Aerospace Engineering",
        description: "Delivered keynote address on the integration of AI and traditional aerospace engineering",
        organization: "International Aerospace Conference",
        date: "2024",
        verified: true
      },
      {
        type: "Research",
        title: "Best Paper Award - Machine Learning in Aerospace",
        description: "Research on predictive maintenance algorithms for spacecraft systems",
        organization: "IEEE Aerospace Conference",
        date: "2023",
        verified: true
      },
      {
        type: "Media",
        title: "Featured Expert - Space Technology Trends",
        description: "Expert commentary on emerging trends in commercial space technology",
        organization: "TechCrunch",
        date: "2023",
        verified: true
      }
    ],
    mediaAppearances: [
      {
        outlet: "MIT Technology Review",
        title: "The Future of Spacecraft Propulsion Systems",
        type: "article",
        date: "Dec 2024",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
      },
      {
        outlet: "IEEE Spectrum",
        title: "Machine Learning in Aerospace Engineering",
        type: "interview",
        date: "Nov 2024",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
      },
      {
        outlet: "SpaceNews",
        title: "Educational Approaches for Next-Gen Engineers",
        type: "podcast",
        date: "Oct 2024",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
      }
    ],
    endorsements: [
      {
        name: "Dr. Robert Martinez",
        title: "Professor of Aerospace Engineering",
        organization: "Stanford University",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Dr. Chen\'s work bridges the gap between theoretical mathematics and practical engineering in ways I\'ve never seen before. Her educational approach is revolutionary.",
        date: "Nov 2024",
        verified: true
      },
      {
        name: "Lisa Thompson",
        title: "Senior Principal Engineer",
        organization: "NASA Jet Propulsion Laboratory",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Sarah\'s insights into machine learning applications in aerospace have directly influenced our mission planning algorithms. Exceptional expertise.",
        date: "Oct 2024",
        verified: true
      },
      {
        name: "Prof. Michael Chang",
        title: "Director of Engineering Education",
        organization: "MIT",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Dr. Chen represents the future of technical education. Her ability to make complex concepts accessible is unmatched.",
        date: "Sep 2024",
        verified: true
      }
    ],
    networkStats: [
      { value: "2.5K", label: "LinkedIn Connections" },
      { value: "15K", label: "Twitter Followers" },
      { value: "50+", label: "Peer Collaborations" },
      { value: "25+", label: "Industry Partners" }
    ],
    speakingEngagements: [
      {
        event: "International Aerospace Conference 2024",
        location: "Seattle, WA",
        date: "Mar 2024",
        attendees: "2,500+"
      },
      {
        event: "MIT Engineering Education Summit",
        location: "Cambridge, MA",
        date: "Feb 2024",
        attendees: "800+"
      },
      {
        event: "NASA Technical Symposium",
        location: "Houston, TX",
        date: "Jan 2024",
        attendees: "1,200+"
      }
    ],
    impactMetrics: [
      {
        icon: "Users",
        value: "50K+",
        label: "Students Reached",
        description: "Across all platforms and courses"
      },
      {
        icon: "BookOpen",
        value: "127",
        label: "Articles Published",
        description: "Technical articles and tutorials"
      },
      {
        icon: "Award",
        value: "15+",
        label: "Industry Awards",
        description: "Recognition for excellence"
      },
      {
        icon: "Globe",
        value: "25+",
        label: "Countries Reached",
        description: "Global educational impact"
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'User' },
    { id: 'expertise', label: 'Expertise Map', icon: 'Map' },
    { id: 'publications', label: 'Publications', icon: 'BookOpen' },
    { id: 'teaching', label: 'Teaching Style', icon: 'GraduationCap' },
    { id: 'subscribe', label: 'Subscribe', icon: 'Crown' },
    { id: 'recognition', label: 'Recognition', icon: 'Trophy' }
  ];

  useEffect(() => {
    document.title = `${creatorData?.name} - Creator Profile | BlogCraft`;
  }, [creatorData?.name]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <ExpertiseMap expertiseData={expertiseMapData} />
            <div className="grid lg:grid-cols-2 gap-8">
              <TeachingStyle teachingData={teachingStyleData} />
              <SocialProof socialProofData={socialProofData} />
            </div>
          </div>
        );
      case 'expertise':
        return <ExpertiseMap expertiseData={expertiseMapData} />;
      case 'publications':
        return <PublicationHistory publications={publicationsData} />;
      case 'teaching':
        return <TeachingStyle teachingData={teachingStyleData} />;
      case 'subscribe':
        return <SubscriptionOptions subscriptionData={subscriptionData} />;
      case 'recognition':
        return <SocialProof socialProofData={socialProofData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Profile Hero Section */}
      <ProfileHero creator={creatorData} />
      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  activeTab === tab?.id
                    ? 'text-primary border-primary' :'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground'
                }`}
              >
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Tab Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {renderTabContent()}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} BlogCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorProfiles;