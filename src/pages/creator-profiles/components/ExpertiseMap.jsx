import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseMap = ({ expertiseData }) => {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleDomainClick = (domain) => {
    setSelectedDomain(selectedDomain?.id === domain?.id ? null : domain);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-card-foreground">Interactive Expertise Map</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Info" size={16} />
          <span>Click domains to explore connections</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Domain Visualization */}
        <div className="lg:col-span-2">
          <div className="relative bg-muted/30 rounded-lg p-8 min-h-[400px]">
            <svg
              width="100%"
              height="400"
              viewBox="0 0 600 400"
              className="overflow-visible"
            >
              {/* Connection Lines */}
              {expertiseData?.connections?.map((connection, index) => (
                <line
                  key={index}
                  x1={connection?.from?.x}
                  y1={connection?.from?.y}
                  x2={connection?.to?.x}
                  y2={connection?.to?.y}
                  stroke="var(--color-border)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="transition-all duration-300"
                />
              ))}

              {/* Domain Nodes */}
              {expertiseData?.domains?.map((domain) => (
                <g key={domain?.id}>
                  <circle
                    cx={domain?.position?.x}
                    cy={domain?.position?.y}
                    r={domain?.size}
                    fill={selectedDomain?.id === domain?.id ? 'var(--color-primary)' : domain?.color}
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleDomainClick(domain)}
                  />
                  <text
                    x={domain?.position?.x}
                    y={domain?.position?.y + 5}
                    textAnchor="middle"
                    className="text-xs font-medium fill-white pointer-events-none"
                  >
                    {domain?.name}
                  </text>
                  <text
                    x={domain?.position?.x}
                    y={domain?.position?.y + domain?.size + 20}
                    textAnchor="middle"
                    className="text-xs fill-current text-muted-foreground pointer-events-none"
                  >
                    {domain?.articles} articles
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4">
            {expertiseData?.domains?.map((domain) => (
              <div key={domain?.id} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: domain?.color }}
                ></div>
                <span className="text-sm text-muted-foreground">{domain?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Details */}
        <div className="lg:col-span-1">
          {selectedDomain ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedDomain?.color }}
                ></div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {selectedDomain?.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedDomain?.description}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Articles Published</span>
                  <span className="font-medium text-card-foreground">{selectedDomain?.articles}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Reads</span>
                  <span className="font-medium text-card-foreground">{selectedDomain?.reads}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expertise Level</span>
                  <span className="font-medium text-card-foreground">{selectedDomain?.level}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-2">Recent Articles</h4>
                <div className="space-y-2">
                  {selectedDomain?.recentArticles?.map((article, index) => (
                    <div
                      key={index}
                      className="p-2 bg-muted/50 rounded text-sm hover:bg-muted transition-colors duration-200 cursor-pointer"
                    >
                      <div className="font-medium text-card-foreground truncate">
                        {article?.title}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {article?.reads} reads • {article?.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-card-foreground mb-2">Connected Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain?.connections?.map((connection, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {connection}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="MousePointer" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                Explore Expertise Areas
              </h3>
              <p className="text-muted-foreground text-sm">
                Click on any domain in the map to see detailed information and connections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseMap;