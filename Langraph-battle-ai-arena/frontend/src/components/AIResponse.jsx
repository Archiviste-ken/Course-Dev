import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AIResponse = ({ data }) => {
  return (
    <div className="w-full flex justify-start my-[2rem]">
      <div className="w-full max-w-5xl rounded-3xl p-8 bg-surface-container-lowest ghost-border ambient-shadow">
        
        {/* Problem Header */}
        <div className="mb-8 p-6 bg-surface-container-low rounded-2xl">
          <h2 className="text-xl font-bold mb-2 text-on-surface" style={{ fontFamily: 'var(--font-manrope)' }}>
            Problem Statement
          </h2>
          <p className="text-on-surface-variant text-lg" style={{ fontFamily: 'var(--font-inter)' }}>
            {data.problem}
          </p>
        </div>

        {/* Top Row: Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Solution 1 */}
          <div className="bg-surface rounded-2xl p-6 ghost-border flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant">
              <h3 className="font-bold text-lg text-on-surface" style={{ fontFamily: 'var(--font-manrope)' }}>
                Solution 1
              </h3>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-sm font-semibold text-on-surface shadow-sm">
                Score: {data.judge.solution_1_score}/10
              </span>
            </div>
            <div className="prose prose-sm max-w-none flex-grow break-words text-on-surface text-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneLight}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg! my-4 shadow-sm"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-surface-container-high text-primary px-1.5 py-0.5 rounded-md" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {data.solution1}
              </ReactMarkdown>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-surface rounded-2xl p-6 ghost-border flex flex-col">
             <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant">
              <h3 className="font-bold text-lg text-on-surface" style={{ fontFamily: 'var(--font-manrope)' }}>
                Solution 2
              </h3>
              <span className="bg-surface-container-highest px-3 py-1 rounded-full text-sm font-semibold text-on-surface shadow-sm">
                Score: {data.judge.solution_2_score}/10
              </span>
            </div>
            <div className="prose prose-sm max-w-none flex-grow break-words text-on-surface text-base">
             <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneLight}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg! my-4 shadow-sm"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-surface-container-high text-primary px-1.5 py-0.5 rounded-md" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {data.solution2}
              </ReactMarkdown>
            </div>
          </div>

        </div>

        {/* Bottom Row: Judge Recommendations */}
        <div className="bg-secondary-container rounded-2xl p-8 flex flex-col ghost-border-primary relative overflow-hidden">
             {/* Decorative element representing Judge */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
             
             <h3 className="font-bold text-xl text-on-surface mb-6 flex items-center gap-3 relative z-10" style={{ fontFamily: 'var(--font-manrope)' }}>
               <span className="bg-primary text-white p-2 rounded-xl shadow-md">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                 </svg>
               </span>
               Judge Verdict & Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm backdrop-blur-sm">
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Solution 1 Insight</h4>
                  <p className="text-on-secondary-container leading-relaxed text-base">
                    {data.judge.solution_1_reasoning}
                  </p>
               </div>

               <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3" style={{ fontFamily: 'var(--font-inter)' }}>Solution 2 Insight</h4>
                  <p className="text-on-secondary-container leading-relaxed text-base">
                    {data.judge.solution_2_reasoning}
                  </p>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AIResponse;
