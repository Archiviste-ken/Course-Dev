import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { initialChatData } from '../data/mockData';
import './App.css';

function App() {
  const [messages, setMessages] = useState(initialChatData);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text) => {
    const newUserMsg = {
      id: `msg_${Date.now()}`,
      type: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);

    // Simulate AI response delay
    setTimeout(() => {
      const newAIMsg = {
        id: `msg_${Date.now() + 1}`,
        type: 'ai_response',
        problem: text, // Simply echoing the user's text as the problem for now
        solution1: "```python\n# Simulated Solution 1 for: " + text + "\ndef solve():\n    return 'Approach 1'\n```\nHere is one way to approach this problem.",
        solution2: "```python\n# Simulated Solution 2 for: " + text + "\ndef solve_optimized():\n    return 'Approach 2'\n```\nHere is an alternative, more optimized way.",
        judge: {
          solution_1_score: 7,
          solution_2_score: 9,
          solution_1_reasoning: "The first approach is solid but lacks edge-case handling.",
          solution_2_reasoning: "The second approach is more robust and runs faster."
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, newAIMsg]);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      
      {/* Sidebar for Navigation / Chat History */}
      <aside className="w-64 bg-surface-container flex flex-col border-r ghost-border hidden md:flex">
        <div className="p-6 pb-2">
          <h1 className="text-2xl font-bold tracking-tight text-on-surface" style={{ fontFamily: 'var(--font-manrope)' }}>
            Ether Chat
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">AI Solution Arena</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2 mt-4">
          <div className="p-3 bg-secondary-container rounded-xl border-l-4 border-primary cursor-pointer">
             <p className="text-sm font-semibold text-on-secondary-container truncate hidden md:block">
               Two Sum Approaches
             </p>
          </div>
          <div className="p-3 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
             <p className="text-sm font-medium text-on-surface-variant truncate hidden md:block">
               Binary Tree Traversal
             </p>
          </div>
           <div className="p-3 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
             <p className="text-sm font-medium text-on-surface-variant truncate hidden md:block">
               REST API Design
             </p>
          </div>
        </div>
        
        <div className="p-4 border-t ghost-border">
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors text-sm font-medium">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Settings
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative w-full h-full">
        <div className="flex-1 overflow-y-auto w-full px-6 md:px-12 pt-12 pb-40">
          <div className="max-w-6xl mx-auto flex flex-col">
            {/* Header for mobile empty state fallback or context */}
             <div className="w-full text-center mb-12 empty:hidden"></div>

            {/* Chat Messages */}
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} />
      </main>

    </div>
  );
}

export default App;
