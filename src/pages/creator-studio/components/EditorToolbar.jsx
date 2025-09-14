import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EditorToolbar = ({ onAction, activeFormats = [], canUndo = false, canRedo = false }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const formatButtons = [
    { action: 'bold', icon: 'Bold', tooltip: 'Bold (Ctrl+B)' },
    { action: 'italic', icon: 'Italic', tooltip: 'Italic (Ctrl+I)' },
    { action: 'underline', icon: 'Underline', tooltip: 'Underline (Ctrl+U)' },
    { action: 'strikethrough', icon: 'Strikethrough', tooltip: 'Strikethrough' },
  ];

  const structureButtons = [
    { action: 'heading1', icon: 'Heading1', tooltip: 'Heading 1' },
    { action: 'heading2', icon: 'Heading2', tooltip: 'Heading 2' },
    { action: 'heading3', icon: 'Heading3', tooltip: 'Heading 3' },
    { action: 'paragraph', icon: 'Type', tooltip: 'Paragraph' },
  ];

  const listButtons = [
    { action: 'bulletList', icon: 'List', tooltip: 'Bullet List' },
    { action: 'orderedList', icon: 'ListOrdered', tooltip: 'Numbered List' },
    { action: 'taskList', icon: 'CheckSquare', tooltip: 'Task List' },
  ];

  const insertButtons = [
    { action: 'link', icon: 'Link', tooltip: 'Insert Link (Ctrl+K)' },
    { action: 'image', icon: 'Image', tooltip: 'Insert Image' },
    { action: 'code', icon: 'Code', tooltip: 'Inline Code' },
    { action: 'codeBlock', icon: 'FileCode', tooltip: 'Code Block' },
    { action: 'math', icon: 'Calculator', tooltip: 'Math Expression' },
    { action: 'table', icon: 'Table', tooltip: 'Insert Table' },
  ];

  const advancedButtons = [
    { action: 'quote', icon: 'Quote', tooltip: 'Blockquote' },
    { action: 'divider', icon: 'Minus', tooltip: 'Horizontal Rule' },
    { action: 'footnote', icon: 'FileText', tooltip: 'Footnote' },
    { action: 'citation', icon: 'BookOpen', tooltip: 'Citation' },
  ];

  const isActive = (action) => activeFormats?.includes(action);

  const ToolbarButton = ({ button, isActive = false }) => (
    <Button
      variant={isActive ? "default" : "ghost"}
      size="sm"
      onClick={() => onAction(button?.action)}
      title={button?.tooltip}
      className="h-8 w-8 p-0"
    >
      <Icon name={button?.icon} size={16} />
    </Button>
  );

  const ToolbarSeparator = () => (
    <div className="w-px h-6 bg-border mx-1" />
  );

  return (
    <div className="sticky top-0 z-10 bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-1">
          {/* Undo/Redo */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAction('undo')}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className="h-8 w-8 p-0"
          >
            <Icon name="Undo2" size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAction('redo')}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            className="h-8 w-8 p-0"
          >
            <Icon name="Redo2" size={16} />
          </Button>

          <ToolbarSeparator />

          {/* Text Formatting */}
          {formatButtons?.map((button) => (
            <ToolbarButton
              key={button?.action}
              button={button}
              isActive={isActive(button?.action)}
            />
          ))}

          <ToolbarSeparator />

          {/* Structure */}
          {structureButtons?.map((button) => (
            <ToolbarButton
              key={button?.action}
              button={button}
              isActive={isActive(button?.action)}
            />
          ))}

          <ToolbarSeparator />

          {/* Lists */}
          {listButtons?.map((button) => (
            <ToolbarButton
              key={button?.action}
              button={button}
              isActive={isActive(button?.action)}
            />
          ))}

          <ToolbarSeparator />

          {/* Insert Elements */}
          {insertButtons?.slice(0, 4)?.map((button) => (
            <ToolbarButton
              key={button?.action}
              button={button}
              isActive={isActive(button?.action)}
            />
          ))}

          {/* More Options */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowMoreOptions(!showMoreOptions)}
              title="More options"
              className="h-8 w-8 p-0"
            >
              <Icon name="MoreHorizontal" size={16} />
            </Button>

            {showMoreOptions && (
              <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-md shadow-intellectual z-20 p-2">
                <div className="grid grid-cols-4 gap-1 mb-2">
                  {insertButtons?.slice(4)?.map((button) => (
                    <ToolbarButton
                      key={button?.action}
                      button={button}
                      isActive={isActive(button?.action)}
                    />
                  ))}
                </div>
                <div className="border-t border-border pt-2">
                  <div className="grid grid-cols-4 gap-1">
                    {advancedButtons?.map((button) => (
                      <ToolbarButton
                        key={button?.action}
                        button={button}
                        isActive={isActive(button?.action)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAction('preview')}
            title="Preview"
          >
            <Icon name="Eye" size={16} className="mr-1" />
            Preview
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAction('save')}
            title="Save Draft"
          >
            <Icon name="Save" size={16} className="mr-1" />
            Save
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => onAction('publish')}
          >
            <Icon name="Send" size={16} className="mr-1" />
            Publish
          </Button>
        </div>
      </div>
      {/* Overlay to close more options */}
      {showMoreOptions && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowMoreOptions(false)}
        />
      )}
    </div>
  );
};

export default EditorToolbar;