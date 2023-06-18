"use client"
import axios from 'axios';
import React, { useState } from 'react';

const openaiApiKey = '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';
const openaiApiUrl = 'https://api.openai.com/v1';

interface ChatMessage {
  content: string;
  isUser: boolean;
}

const Page = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const newUserMessage: ChatMessage = { content: userMessage, isUser: true };
    setChatHistory([...chatHistory, newUserMessage]);

    try {
      const response = await axios.post(
        `${openaiApiUrl}/completions`,
        {
          prompt: userMessage,
          max_tokens: 50,
          model: 'text-davinci-003',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`,
          },
        }
      );

      const answer = response.data.choices[0].text.trim();
      const newApiMessage: ChatMessage = { content: answer, isUser: false };
      setChatHistory([...chatHistory, newApiMessage]);
      setResponse(answer); // update response
    } catch (error) {
      console.error('Error:', error);
    }

    setUserMessage('');
  };

  return (
    <div className="container">
      <div className="chat-container">
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'api-message'}`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
      {response && (
        <div className="response-container">
          <h2>Respuesta del API:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Page;