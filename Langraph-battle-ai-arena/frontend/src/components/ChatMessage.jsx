import React from 'react';
import AIResponse from './AIResponse';

const ChatMessage = ({ message }) => {
  const isUser = message.type === 'user';

  if (isUser) {
    return (
      <div className="flex w-full justify-end my-6">
        <div className="max-w-3xl bg-secondary-container text-on-secondary-container px-8 py-5 rounded-[1.5rem] rounded-br-[0.25rem] ambient-shadow">
          <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            {message.text}
          </p>
          <span className="text-xs opacity-60 mt-2 block text-right">{message.timestamp}</span>
        </div>
      </div>
    );
  }

  // AI Response type
  return <AIResponse data={message} />;
};

export default ChatMessage;
