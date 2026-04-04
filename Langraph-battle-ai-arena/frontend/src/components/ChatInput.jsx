import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full p-6 glass rounded-t-3xl z-10 flex justify-center pb-8 border-t border-[rgba(173,179,181,0.15)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl relative flex items-center ghost-border-primary bg-surface-container-lowest rounded-full ambient-shadow px-2 py-2"
        style={{ transition: 'all 0.3s ease' }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow bg-transparent border-none outline-none px-6 py-3 text-on-surface"
          style={{ fontFamily: 'var(--font-inter)' }}
        />
        <button
          type="submit"
          className="ml-2 bg-gradient-to-r from-primary to-primary-dim text-white px-6 py-3 rounded-full font-semibold uppercase text-xs tracking-wider transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
