import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KnowledgeMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [connections, setConnections] = useState([]);

  const knowledgeNodes = [
    {
      id: 'engineering',
      name: 'Engineering',
      icon: 'Cog',
      color: 'bg-orange-500',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-700',
      position: { x: 20, y: 30 },
      size: 'large',
      subfields: ['Software Engineering', 'Systems Design', 'DevOps', 'Architecture']
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: 'Calculator',
      color: 'bg-purple-500',
      borderColor: 'border-purple-300',
      textColor: 'text-purple-700',
      position: { x: 70, y: 20 },
      size: 'large',
      subfields: ['Applied Math', 'Statistics', 'Algorithms', 'Optimization']
    },
    {
      id: 'nutrition',
      name: 'Nutrition',
      icon: 'Apple',
      color: 'bg-green-500',
      borderColor: 'border-green-300',
      textColor: 'text-green-700',
      position: { x: 50, y: 70 },
      size: 'large',
      subfields: ['Biochemistry', 'Performance', 'Cognitive Health', 'Metabolism']
    },
    {
      id: 'ai-ml',
      name: 'AI & ML',
      icon: 'Brain',
      color: 'bg-blue-500',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-700',
      position: { x: 45, y: 15 },
      size: 'medium',
      subfields: ['Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning']
    },
    {
      id: 'data-science',
      name: 'Data Science',
      icon: 'BarChart3',
      color: 'bg-indigo-500',
      borderColor: 'border-indigo-300',
      textColor: 'text-indigo-700',
      position: { x: 75, y: 45 },
      size: 'medium',
      subfields: ['Analytics', 'Visualization', 'Big Data', 'Statistics']
    },
    {
      id: 'bioinformatics',
      name: 'Bioinformatics',
      icon: 'Dna',
      color: 'bg-teal-500',
      borderColor: 'border-teal-300',
      textColor: 'text-teal-700',
      position: { x: 25, y: 60 },
      size: 'medium',
      subfields: ['Genomics', 'Proteomics', 'Computational Biology', 'Biostatistics']
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: 'Atom',
      color: 'bg-pink-500',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-700',
      position: { x: 60, y: 40 },
      size: 'small',
      subfields: ['Quantum Algorithms', 'Quantum Mechanics', 'Cryptography']
    }
  ];

  const connectionPaths = [
    { from: 'engineering', to: 'ai-ml', strength: 'strong' },
    { from: 'mathematics', to: 'ai-ml', strength: 'strong' },
    { from: 'mathematics', to: 'data-science', strength: 'strong' },
    { from: 'mathematics', to: 'quantum', strength: 'medium' },
    { from: 'nutrition', to: 'bioinformatics', strength: 'medium' },
    { from: 'engineering', to: 'data-science', strength: 'medium' },
    { from: 'ai-ml', to: 'data-science', strength: 'strong' },
    { from: 'bioinformatics', to: 'data-science', strength: 'medium' }
  ];

  useEffect(() => {
    setConnections(connectionPaths);
  }, []);

  const getNodeSize = (size) => {
    const sizes = {
      small: 'w-16 h-16',
      medium: 'w-20 h-20',
      large: 'w-24 h-24'
    };
    return sizes?.[size] || sizes?.medium;
  };

  const getIconSize = (size) => {
    const sizes = {
      small: 20,
      medium: 24,
      large: 28
    };
    return sizes?.[size] || sizes?.medium;
  };

  const handleNodeClick = (node) => {
    setActiveNode(activeNode?.id === node?.id ? null : node);
  };

  const getConnectionOpacity = (connection) => {
    if (!activeNode) return 'opacity-30';
    if (connection?.from === activeNode?.id || connection?.to === activeNode?.id) {
      return connection?.strength === 'strong' ? 'opacity-80' : 'opacity-60';
    }
    return 'opacity-10';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Interactive Knowledge Map
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the interconnected world of knowledge domains. Click on any field to discover 
            its connections and see how expertise flows across disciplines.
          </p>
        </div>

        {/* Knowledge Map Visualization */}
        <div className="relative bg-white rounded-3xl shadow-intellectual p-8 mb-12 overflow-hidden">
          <div className="relative h-96 lg:h-[500px]">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {connections?.map((connection, index) => {
                const fromNode = knowledgeNodes?.find(n => n?.id === connection?.from);
                const toNode = knowledgeNodes?.find(n => n?.id === connection?.to);
                
                if (!fromNode || !toNode) return null;

                return (
                  <line
                    key={index}
                    x1={`${fromNode?.position?.x}%`}
                    y1={`${fromNode?.position?.y}%`}
                    x2={`${toNode?.position?.x}%`}
                    y2={`${toNode?.position?.y}%`}
                    stroke={connection?.strength === 'strong' ? '#3B82F6' : '#94A3B8'}
                    strokeWidth={connection?.strength === 'strong' ? '3' : '2'}
                    strokeDasharray={connection?.strength === 'medium' ? '5,5' : 'none'}
                    className={`transition-all duration-300 ${getConnectionOpacity(connection)}`}
                  />
                );
              })}
            </svg>

            {/* Knowledge Nodes */}
            {knowledgeNodes?.map((node) => (
              <div
                key={node?.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${node?.position?.x}%`,
                  top: `${node?.position?.y}%`
                }}
                onClick={() => handleNodeClick(node)}
              >
                {/* Node Circle */}
                <div
                  className={`${getNodeSize(node?.size)} ${node?.color} rounded-full flex items-center justify-center shadow-lg border-4 ${node?.borderColor} transition-all duration-300 ${
                    activeNode?.id === node?.id
                      ? 'scale-110 shadow-xl'
                      : 'group-hover:scale-105 group-hover:shadow-xl'
                  }`}
                >
                  <Icon
                    name={node?.icon}
                    size={getIconSize(node?.size)}
                    className="text-white"
                  />
                </div>

                {/* Node Label */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                  <div className={`text-sm font-semibold ${node?.textColor} whitespace-nowrap`}>
                    {node?.name}
                  </div>
                </div>

                {/* Hover Tooltip */}
                <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                    Click to explore connections
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Node Details */}
          {activeNode && (
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 ${activeNode?.color} rounded-full flex items-center justify-center`}>
                  <Icon name={activeNode?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{activeNode?.name}</h3>
                  <p className="text-slate-600">Explore specialized content in this domain</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {activeNode?.subfields?.map((subfield) => (
                  <div
                    key={subfield}
                    className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm text-slate-700 text-center"
                  >
                    {subfield}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-lg text-slate-600 mb-4">
              Ready to explore these knowledge domains in depth?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/topic-universes">
              <Button
                size="lg"
                className="px-8 py-3"
                iconName="Compass"
                iconPosition="left"
              >
                Explore Topic Universes
              </Button>
            </Link>
            <Link to="/creator-studio">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                iconName="PenTool"
                iconPosition="left"
              >
                Start Creating Content
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeMap;