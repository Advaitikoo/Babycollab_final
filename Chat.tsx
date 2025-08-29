import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "👋 Hi there! How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const responses = {
      greetings: [
        "Hello! How can I assist you today?",
        "Hi there! What can I help you with?",
        "Hey! I'm here to help. What do you need?"
      ],
      help: [
        "I'm here to help! You can ask me about our services, contact information, or general questions.",
        "Sure! I can assist with information about our company, products, or support.",
        "I'd be happy to help! What specific information are you looking for?"
      ],
      contact: [
        "You can reach us at contact@company.com or call (555) 123-4567.",
        "Our contact details: Email: contact@company.com, Phone: (555) 123-4567",
        "Feel free to contact us via email at contact@company.com or phone (555) 123-4567"
      ],
      hours: [
        "We're open Monday-Friday, 9 AM to 6 PM EST.",
        "Our business hours are 9 AM - 6 PM, Monday through Friday.",
        "You can reach us during business hours: Mon-Fri, 9 AM to 6 PM EST."
      ],
      default: [
        "I'm not sure about that. Could you please rephrase your question?",
        "Interesting question! Could you provide more details?",
        "I'd like to help, but I need more information. Can you be more specific?",
        "That's a great question! Let me connect you with a human agent for better assistance."
      ]
    };

    const lowerMessage = userMessage.toLowerCase();

    let responseArray: string[];
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      responseArray = responses.greetings;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      responseArray = responses.help;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      responseArray = responses.contact;
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('time') || lowerMessage.includes('open')) {
      responseArray = responses.hours;
    } else {
      responseArray = responses.default;
    }

    return responseArray[Math.floor(Math.random() * responseArray.length)];
  };

  const sendMessage = () => {
    const message = inputValue.trim();
    if (!message) return;

    // Add user message
    const userMessage: Message = {
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response with random delay
    setTimeout(() => {
      const botResponse: Message = {
        content: getBotResponse(message),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 2000 + 1000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Our Website</h1>
          <p className="text-xl opacity-90">This is your main website content. Try clicking the chat icon!</p>
        </div>
      </div>

      {/* Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2M6,9V7H18V9H6M14,11V13H6V11H14M16,15V17H6V15H16Z"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col z-40 animate-in slide-in-from-bottom-5 duration-300">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg">💬 Chat Support</h3>
            <button
              onClick={closeChat}
              className="text-white hover:text-gray-200 text-xl w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' } as React.CSSProperties}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' } as React.CSSProperties}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                maxLength={500}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-blue-400 outline-none text-sm"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close chat when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={closeChat}
        />
      )}
    </>
  );
};

export default Chatbot;
