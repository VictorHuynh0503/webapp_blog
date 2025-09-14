import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KnowledgeGraph = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('network');

  const knowledgeNodes = [
    {
      id: 'machine-learning',
      label: 'Machine Learning',
      category: 'Mathematics',
      level: 'Advanced',
      articlesRead: 15,
      connections: ['neural-networks', 'statistics', 'data-science', 'nutrition-analysis'],
      position: { x: 300, y: 200 },
      color: '#8B5CF6',
      size: 'large'
    },
    {
      id: 'neural-networks',
      label: 'Neural Networks',
      category: 'Mathematics',
      level: 'Advanced',
      articlesRead: 8,
      connections: ['machine-learning', 'deep-learning', 'biomechanics'],
      position: { x: 450, y: 150 },
      color: '#8B5CF6',
      size: 'medium'
    },
    {
      id: 'biomechanics',
      label: 'Biomechanics',
      category: 'Engineering',
      level: 'Intermediate',
      articlesRead: 12,
      connections: ['neural-networks', 'sports-science', 'robotics'],
      position: { x: 200, y: 300 },
      color: '#F97316',
      size: 'large'
    },
    {
      id: 'nutrition-analysis',
      label: 'Nutrition Analysis',
      category: 'Nutrition',
      level: 'Intermediate',
      articlesRead: 10,
      connections: ['machine-learning', 'sports-science', 'biochemistry'],
      position: { x: 400, y: 350 },
      color: '#10B981',
      size: 'medium'
    },
    {
      id: 'sports-science',
      label: 'Sports Science',
      category: 'Nutrition',
      level: 'Beginner',
      articlesRead: 6,
      connections: ['nutrition-analysis', 'biomechanics', 'performance-optimization'],
      position: { x: 250, y: 450 },
      color: '#10B981',
      size: 'small'
    },
    {
      id: 'robotics',
      label: 'Robotics',
      category: 'Engineering',
      level: 'Advanced',
      articlesRead: 9,
      connections: ['biomechanics', 'control-systems', 'ai-applications'],
      position: { x: 100, y: 200 },
      color: '#F97316',
      size: 'medium'
    },
    {
      id: 'statistics',
      label: 'Statistics',
      category: 'Mathematics',
      level: 'Intermediate',
      articlesRead: 14,
      connections: ['machine-learning', 'data-science', 'research-methods'],
      position: { x: 500, y: 250 },
      color: '#8B5CF6',
      size: 'large'
    },
    {
      id: 'biochemistry',
      label: 'Biochemistry',
      category: 'Nutrition',
      level: 'Advanced',
      articlesRead: 7,
      connections: ['nutrition-analysis', 'molecular-biology', 'food-science'],
      position: { x: 550, y: 400 },
      color: '#10B981',
      size: 'medium'
    }
  ];

  const learningPaths = [
    {
      id: 'ml-nutrition',
      title: 'ML in Nutrition Science',
      nodes: ['machine-learning', 'statistics', 'nutrition-analysis', 'biochemistry'],
      progress: 75,
      estimatedTime: '6 weeks',
      difficulty: 'Advanced'
    },
    {
      id: 'bio-engineering',
      title: 'Bioengineering Fundamentals',
      nodes: ['biomechanics', 'robotics', 'neural-networks'],
      progress: 60,
      estimatedTime: '8 weeks',
      difficulty: 'Advanced'
    },
    {
      id: 'sports-tech',
      title: 'Sports Technology',
      nodes: ['sports-science', 'biomechanics', 'nutrition-analysis'],
      progress: 40,
      estimatedTime: '4 weeks',
      difficulty: 'Intermediate'
    }
  ];

  const getNodeSize = (size) => {
    const sizes = {
      small: 'w-12 h-12',
      medium: 'w-16 h-16',
      large: 'w-20 h-20'
    };
    return sizes?.[size] || sizes?.medium;
  };

  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors?.[level] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Mathematics': 'Calculator',
      'Engineering': 'Cog',
      'Nutrition': 'Apple'
    };
    return icons?.[category] || 'Circle';
  };

  const handleNodeClick = (nodeId) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const renderNetworkView = () => (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {knowledgeNodes?.map((node) =>
          node?.connections?.map((connectionId) => {
            const connectedNode = knowledgeNodes?.find(n => n?.id === connectionId);
            if (!connectedNode) return null;
            
            return (
              <line
                key={`${node?.id}-${connectionId}`}
                x1={node?.position?.x}
                y1={node?.position?.y}
                x2={connectedNode?.position?.x}
                y2={connectedNode?.position?.y}
                stroke="#E5E7EB"
                strokeWidth="2"
                opacity={selectedNode && (selectedNode === node?.id || selectedNode === connectionId) ? "0.8" : "0.3"}
              />
            );
          })
        )}
      </svg>

      {/* Knowledge Nodes */}
      {knowledgeNodes?.map((node) => (
        <button
          key={node?.id}
          onClick={() => handleNodeClick(node?.id)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getNodeSize(node?.size)} rounded-full border-4 border-white shadow-lg hover:scale-110 transition-all duration-200 ${
            selectedNode === node?.id ? 'ring-4 ring-blue-300' : ''
          }`}
          style={{
            left: node?.position?.x,
            top: node?.position?.y,
            backgroundColor: node?.color
          }}
        >
          <div className="flex flex-col items-center justify-center h-full text-white">
            <Icon name={getCategoryIcon(node?.category)} size={node?.size === 'large' ? 24 : node?.size === 'medium' ? 20 : 16} />
            <span className="text-xs font-medium mt-1 leading-tight">{node?.articlesRead}</span>
          </div>
        </button>
      ))}

      {/* Node Details Popup */}
      {selectedNode && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 w-64 border border-gray-200">
          {(() => {
            const node = knowledgeNodes?.find(n => n?.id === selectedNode);
            return (
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: node?.color }}
                  />
                  <h3 className="font-semibold text-gray-900">{node?.label}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{node?.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(node?.level)}`}>
                      {node?.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Articles Read:</span>
                    <span className="font-medium">{node?.articlesRead}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Connections:</span>
                    <span className="font-medium">{node?.connections?.length}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <Icon name="BookOpen" size={14} className="mr-2" />
                  Explore Topic
                </Button>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );

  const renderPathView = () => (
    <div className="space-y-4">
      {learningPaths?.map((path) => (
        <div key={path?.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{path?.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <span>{path?.estimatedTime}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(path?.difficulty)}`}>
                  {path?.difficulty}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{path?.progress}%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${path?.progress}%` }}
            />
          </div>

          <div className="flex items-center space-x-2 mb-3">
            {path?.nodes?.map((nodeId, index) => {
              const node = knowledgeNodes?.find(n => n?.id === nodeId);
              return (
                <React.Fragment key={nodeId}>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: node?.color }}
                    >
                      <Icon name={getCategoryIcon(node?.category)} size={14} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{node?.label}</span>
                  </div>
                  {index < path?.nodes?.length - 1 && (
                    <Icon name="ArrowRight" size={14} className="text-gray-400" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="BookOpen" size={14} />
              <span>{path?.nodes?.length} topics</span>
            </div>
            <Button variant="outline" size="sm">
              Continue Path
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Knowledge Graph</h2>
          <p className="text-sm text-gray-600 mt-1">Visualize your learning connections</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('network')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'network' ?'bg-white text-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon name="GitBranch" size={14} className="mr-1" />
              Network
            </button>
            <button
              onClick={() => setViewMode('paths')}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'paths' ?'bg-white text-primary shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon name="Route" size={14} className="mr-1" />
              Paths
            </button>
          </div>
          
          <Button variant="outline" size="sm">
            <Icon name="Download" size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* View Content */}
      {viewMode === 'network' ? renderNetworkView() : renderPathView()}

      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
            <span className="text-sm text-gray-700">Mathematics</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
            <span className="text-sm text-gray-700">Engineering</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-700">Nutrition</span>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-600">
          Node size represents the number of articles read in each topic. Click nodes to see details and connections.
        </div>
      </div>
    </div>
  );
};

export default KnowledgeGraph;