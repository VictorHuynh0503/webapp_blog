import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContentEditor = ({ content, onChange, onFormatChange, activeFormats }) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const editorRef = useRef(null);

  const mockContent = `# Technical Documentation: React Performance Optimization

## Introduction

React applications can suffer from performance issues as they grow in complexity. This comprehensive guide covers advanced optimization techniques that every React developer should master.

## Key Performance Concepts

### Virtual DOM Optimization
The Virtual DOM is React's secret weapon for performance, but understanding how to leverage it effectively is crucial:

\`\`\`javascript
// Bad: Creates new object on every render
const MyComponent = () => {
  return <div style={{marginTop: 10}}>Content</div>;
};

// Good: Define styles outside component
const styles = { marginTop: 10 };
const MyComponent = () => {
  return <div style={styles}>Content</div>;
};
\`\`\`

### Memoization Strategies
React provides several hooks for memoization:

1. **React.memo()** - Component memoization
2. **useMemo()** - Value memoization  
3. **useCallback()** - Function memoization

### Code Splitting
Implement dynamic imports for better bundle management:

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Mathematical Analysis

The time complexity of React's reconciliation algorithm is **O(n)** where n is the number of elements in the tree.

**Performance Formula:**
> Render Time = Base Render + (Component Count × Complexity Factor)

Where:
- Base Render ≈ 16ms (target frame time)
- Complexity Factor varies by component type

## Best Practices Checklist

- [ ] Use React.memo for expensive components
- [ ] Implement proper key props for lists
- [ ] Avoid inline object/function creation
- [ ] Use production builds for deployment
- [ ] Profile with React DevTools

## Conclusion

Performance optimization is an iterative process. Start with measuring, identify bottlenecks, and apply targeted optimizations. Remember that premature optimization can lead to complex code without meaningful benefits.

---

*Last updated: September 14, 2025*
*Reading time: ~8 minutes*`;

  useEffect(() => {
    const text = content || mockContent;
    const words = text?.trim()?.split(/\s+/)?.length;
    setWordCount(words);
    setReadingTime(Math.ceil(words / 200)); // Average reading speed: 200 words/minute
  }, [content, mockContent]);

  const handleContentChange = (e) => {
    const newContent = e?.target?.value;
    onChange?.(newContent);
  };

  const insertText = (before, after = '') => {
    const textarea = editorRef?.current;
    if (!textarea) return;

    const start = textarea?.selectionStart;
    const end = textarea?.selectionEnd;
    const selectedText = textarea?.value?.substring(start, end);
    const newText = before + selectedText + after;
    
    const newValue = 
      textarea?.value?.substring(0, start) + 
      newText + 
      textarea?.value?.substring(end);
    
    onChange?.(newValue);
    
    // Set cursor position
    setTimeout(() => {
      textarea?.focus();
      textarea?.setSelectionRange(
        start + before?.length,
        start + before?.length + selectedText?.length
      );
    }, 0);
  };

  const formatActions = {
    bold: () => insertText('**', '**'),
    italic: () => insertText('*', '*'),
    code: () => insertText('`', '`'),
    codeBlock: () => insertText('\n```javascript\n', '\n```\n'),
    heading1: () => insertText('# '),
    heading2: () => insertText('## '),
    heading3: () => insertText('### '),
    link: () => insertText('[', '](url)'),
    math: () => insertText('$$', '$$'),
    quote: () => insertText('> '),
    bulletList: () => insertText('- '),
    orderedList: () => insertText('1. '),
    taskList: () => insertText('- [ ] '),
  };

  const handleEditorAction = (action) => {
    if (formatActions?.[action]) {
      formatActions?.[action]();
    } else if (action === 'preview') {
      setIsPreviewMode(!isPreviewMode);
    }
  };

  const renderPreview = (text) => {
    // Simple markdown-like rendering for preview
    return text?.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')?.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')?.replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2">$1</h3>')?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')?.replace(/\*(.*?)\*/g, '<em>$1</em>')?.replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>')?.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground">$1</blockquote>')?.replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')?.replace(/^\d+\. (.*$)/gim, '<li class="ml-4">$1</li>')?.replace(/\n/g, '<br>');
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Editor Stats */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <span>{wordCount} words</span>
          <span>{readingTime} min read</span>
          <span>Auto-saved 2 minutes ago</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="text-xs"
          >
            <Icon name={isPreviewMode ? "Edit" : "Eye"} size={14} className="mr-1" />
            {isPreviewMode ? "Edit" : "Preview"}
          </Button>
        </div>
      </div>
      {/* Editor Content */}
      <div className="flex-1 relative">
        {isPreviewMode ? (
          <div className="h-full overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: renderPreview(content || mockContent) 
                }}
              />
            </div>
          </div>
        ) : (
          <div className="h-full flex">
            <textarea
              ref={editorRef}
              value={content || mockContent}
              onChange={handleContentChange}
              placeholder="Start writing your article..."
              className="flex-1 p-8 bg-transparent border-none outline-none resize-none font-charter text-lg leading-relaxed text-foreground placeholder-muted-foreground"
              style={{ fontFamily: 'Charter, serif' }}
            />
            
            {/* Line Numbers (Optional) */}
            <div className="w-12 bg-muted/20 border-l border-border p-2 text-xs text-muted-foreground font-mono">
              {Array.from({ length: Math.max(20, (content || mockContent)?.split('\n')?.length) }, (_, i) => (
                <div key={i + 1} className="h-7 flex items-center justify-end pr-2">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => handleEditorAction('math')}
            title="Insert Math Expression"
            className="shadow-lg"
          >
            <Icon name="Calculator" size={16} />
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => handleEditorAction('codeBlock')}
            title="Insert Code Block"
            className="shadow-lg"
          >
            <Icon name="FileCode" size={16} />
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => handleEditorAction('link')}
            title="Insert Link"
            className="shadow-lg"
          >
            <Icon name="Link" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;