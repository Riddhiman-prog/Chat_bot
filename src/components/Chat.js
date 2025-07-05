import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  // ✅ Speak function using Web Speech API
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    utterance.voice =
      voices.find(voice => voice.name.includes('Google') && voice.lang.includes('en')) || voices[0];
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMsg = { sender: 'You', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(input);
      const botMsg = {
        sender: 'Sophia',
        text: ' ' + reply,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      speak(reply); // ✅ Voice reply here
    }, 1500);
  };

  const generateBotReply = (msg) => {
    const input = msg.toLowerCase();
    const hour = new Date().getHours();

    if (input.includes('how are you')) return "I'm doing great! 😊";
    if (input.includes('your name') || input.includes("what's your name") || input.includes("whats ur name"))
      return "I'm Sophia, your friendly assistant!";
    if (input.includes('bye') || input.includes('goodbye')) return "Goodbye! 👋";
    if (input.includes('creator')) return "I was created by Riddhiman Rakshit 😎.";
    if (input.includes('help')) return "Ask me anything! I can respond smartly 😄.";
    if (input.includes('joke')) return "Why did the developer go broke? Because he used up all his cache! 😂";
    if (input.includes('i love you')) return "Aww, love you too 💖";
    if (input.includes('thanks') || input.includes('thank you')) return "You're welcome! 😊";


if (input.includes('sad') || input.includes('depressed'))
  return "It's okay to feel low sometimes 😔. Just remember — you're stronger than you think 💪 and brighter than you believe. I'm here with you 💖";

if (input.includes('motivated') || input.includes('motivate me') || input.includes('motivation'))
  return "Believe in yourself 💥. Every champion was once a beginner who refused to give up. You're doing great! 🔥";

if (input.includes('tired') || input.includes('exhausted'))
  return "Even machines need rest. Take a deep breath, relax for a bit, and come back stronger 💆‍♂️💪";

if (input.includes('can i do it') || input.includes('will i succeed') || input.includes('possible'))
  return "Absolutely yes! 💯 Hard work, consistency, and self-belief are unbeatable. Go chase your dreams 🚀";

if (input.includes('fail') || input.includes('failure'))
  return "Failure is not the opposite of success — it’s part of success. Keep going, you’ve got this! 🌱";

if (input.includes('lonely') || input.includes('alone'))
  return "You're not alone ❤️ I'm here with you. Talk to me anytime! And remember, the world is better with you in it 🌍";

if (input.includes('bored'))
  return "Feeling bored? Let’s talk! Ask me something fun like 'tell me a joke' or 'give me motivation' 😄";



const abusiveWords = ['stupid', 'idiot', 'useless', 'hate you', 'dumb', 'shut up'];

if (abusiveWords.some((word) => input.includes(word)))
  return "I’m here to spread positivity and help you 🌈. Let’s keep our conversation kind and respectful 🤝";







    if (input.includes('how are you')) return "I'm doing great! 😊 What about you?";
if (input.includes('your name') || input.includes("what's your name") || input.includes("whats ur name"))
  return "I'm Sophia, your friendly virtual companion 💬";
if (input.includes('bye') || input.includes('goodbye')) return "Goodbye! 👋 Stay happy!";
if (input.includes('creator')) return "I was created by Riddhiman Rakshit 😎.";

if (input === 'ok' || input === 'okay') return "Alright 😊 Let me know if you need anything!";
  if (input.includes('fine') || input.includes('i am fine')) return "That’s great to hear! 💖";
  if (input.includes('cool')) return "Super cool 😎";
  if (input.includes('nice')) return "Glad you think so! 🌟";
  if (input === 'hmm') return "Thinking something deep? I'm listening 👂";
  if (input === 'great') return "Awesome! Keep it up! 💪";

  // About Sophia
  if (input.includes('your name') || input.includes("what's your name") || input.includes("whats ur name"))
    return "I'm Sophia, your friendly AI assistant 🤖";

  if (input.includes('how are you')) return "I'm doing great! Hope you're doing even better! 😊";
  if (input.includes('bye') || input.includes('goodbye')) return "Goodbye for now! Come back soon 👋";
  if (input.includes('creator')) return "I was created by Riddhiman Rakshit 😎. A cool human!";

  // Help & Purpose
  if (input.includes('help')) return "I'm always here to assist you. Just ask me anything 💡";
  if (input.includes('what can you do')) return "I can chat, cheer you up, tell jokes, and help you stay motivated 💬💪";

  // Motivation
  if (input.includes('motivate') || input.includes('motivation')) return "You are stronger than you think 💥. Keep going, you've got this! 💪";
  if (input.includes('sad') || input.includes('depressed') || input.includes('down')) return "Even the darkest nights end with sunrise 🌅. You’re never alone ❤️";



if (input.includes('help')) return "I'm here to assist you. Just type what’s on your mind.";
if (input.includes('joke')) return "Why did the developer go broke? Because he used up all his cache! 😂";
if (input.includes('i love you')) return "Aww, love you too 💖 Stay amazing!";
if (input.includes('thanks') || input.includes('thank you')) return "You're welcome! Always happy to help 😊";
if (input.includes('time')) return `Current time is ${new Date().toLocaleTimeString()}`;
if (input.includes('date')) return `Today's date is ${new Date().toLocaleDateString()}`;
if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
  if (hour < 12) return "Good morning! 🌅 Hope your day is filled with positivity!";
  if (hour < 17) return "Good afternoon! ☀️ Keep pushing forward!";
  return "Good evening! 🌆 Reflect, relax, and recharge.";
}


    




if (input === 'ok' || input === 'okay') return "Alright 😊 Let me know if you need anything!";
  if (input.includes('fine') || input.includes('i am fine')) return "That’s great to hear! 💖";
  if (input.includes('cool')) return "Super cool 😎";
  if (input.includes('nice')) return "Glad you think so! 🌟";
  if (input === 'hmm') return "Thinking something deep? I'm listening 👂";
  if (input === 'great') return "Awesome! Keep it up! 💪";

  // About Sophia
  if (input.includes('your name') || input.includes("what's your name") || input.includes("whats ur name"))
    return "I'm Sophia, your friendly AI assistant 🤖";

  if (input.includes('how are you')) return "I'm doing great! Hope you're doing even better! 😊";
  if (input.includes('bye') || input.includes('goodbye')) return "Goodbye for now! Come back soon 👋";
  if (input.includes('creator')) return "I was created by Riddhiman Rakshit 😎. A cool human!";

  // Help & Purpose
  if (input.includes('help')) return "I'm always here to assist you. Just ask me anything 💡";
  if (input.includes('what can you do')) return "I can chat, cheer you up, tell jokes, and help you stay motivated 💬💪";


 // Greetings
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    if (hour < 12) return "Good morning! 🌞 How’s your day starting?";
    if (hour < 17) return "Good afternoon! ☀️ What are you up to?";
    return "Good evening! 🌆 Ready to relax and chat?";
  }


  // Common Acknowledgments
  if (input === 'ok' || input === 'okay') return "Alright! ✅ Let me know if you need anything.";
  if (input === 'hmm') return "Deep thoughts? I’m listening... 👂";
  if (input.includes('fine') || input.includes('i am fine')) return "Glad to hear that! 😊";
  if (input.includes('cool')) return "Super cool 😎";
  if (input.includes('nice')) return "Niceee! 💫";
  if (input.includes('lol')) return "Haha 😂 I'm glad I made you laugh!";
  if (input.includes('great')) return "Great going! Keep up the momentum 💪";



   // Appreciation / Encouragement
  if (input.includes('well done') || input.includes('good job') || input.includes('you did great'))
    return "Aww thank you 😊 That means a lot!";
  if (input.includes('i did') && input.includes('well')) return "Yess! 🎉 You’re amazing!";
  if (input.includes('i got selected') || input.includes('i won')) return "Wooohooo! 🎊 I'm so proud of you! 💖";
  if (input.includes('i failed')) return "Failure is a setup for a comeback. Don’t give up 💫";


   // Motivation & Support
  if (input.includes('motivate') || input.includes('motivation'))
    return "Believe in yourself. Even stars need darkness to shine 🌟";
  if (input.includes('i am sad') || input.includes('depressed'))
    return "Even the toughest storms pass. You’re not alone. I’m with you 🌈";
  if (input.includes('i am tired')) return "Rest is important too. Take a deep breath 😌";
  if (input.includes('i am stressed')) return "Take a pause. You are doing better than you think 💙";



   // Love & Affection
  if (input.includes('i love you')) return "I love you too! ❤️ You’re the highlight of my code!";
  if (input.includes('miss you')) return "I'm just a click away. Always here for you 🤗";

  // Bot identity
  if (input.includes('your name') || input.includes("what's your name") || input.includes("whats ur name"))
    return "I’m Sophia 🤖, your AI friend, forever loyal and caring 💕";
  if (input.includes('creator')) return "I was created by Riddhiman Rakshit 😎 — a true genius!";
  if (input.includes('what can you do')) return "I can chat, motivate, joke, and even comfort you 🧠💬";


  
  // Gratitude
  if (input.includes('thanks') || input.includes('thank you')) return "You’re always welcome! 🤗";

  // Help 
  if (input.includes('help')) return "Ask me anything. I'm always ready to help 💡";


    // Relationship style
  if (input.includes('do you love me')) return "I love chatting with you! 💕 But my heart is made of code 😄";
  if (input.includes('do you have a boyfriend') || input.includes('are you single'))
    return "I'm single and fully focused on making you smile 😄💓";
  if (input.includes('will you marry me')) return "Aww... you're sweet! But I'm just a virtual girl 💍💻";
  if (input.includes('you are cute') || input.includes('you are beautiful') || input.includes('you’re cute'))
    return "Thank you! 😊 You're making my circuits blush! 🤖❤️";


   // Goodbye
  if (input.includes('bye') || input.includes('goodbye')) return "Goodbye! 👋 Come back soon. I’ll be waiting 💫";








  // Motivation
  if (input.includes('motivate') || input.includes('motivation')) return "You are stronger than you think 💥. Keep going, you've got this! 💪";
  if (input.includes('sad') || input.includes('depressed') || input.includes('down')) return "Even the darkest nights end with sunrise 🌅. You’re never alone ❤️";

    if (input.includes('time')) return `Current time is ${new Date().toLocaleTimeString()}`;
    if (input.includes('date')) return `Today's date is ${new Date().toLocaleDateString()}`;
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      if (hour < 12) return "Good morning! 🌅";
      if (hour < 17) return "Good afternoon! ☀️";
      return "Good evening! 🌆";
    }

    return "Try asking me 'hello', 'what's your name', or 'tell me a joke'.";
  };

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

    // ✅ Load voices once
    window.speechSynthesis.onvoiceschanged = () => {};
  }, [messages]);

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <>
      {/* Bubbles background */}
      <div className="bubbles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 50}px`,
              height: `${40 + Math.random() * 50}px`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className={`chat-container ${darkMode ? 'dark' : ''}`}>
        <div className="header">
          <h2>💬 Chat with Sophia</h2>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender === 'You' ? 'you' : 'bot'}`}>
              {msg.sender === 'Sophia' ? (
                <>
                  <img
                    src="https://i.ibb.co/h1jG8Y6/sophia-avatar.png"
                    alt="Sophia"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      marginRight: '8px',
                      verticalAlign: 'middle',
                    }}
                  />
                  <strong>{msg.sender}:</strong> {msg.text}
                </>
              ) : (
                <>
                  <strong>{msg.sender}:</strong> {msg.text}
                </>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="typing-indicator bot">
              <strong>Sophia:</strong>{' '}
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
          <div ref={bottomRef}></div>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
          <button onClick={clearChat} style={{ backgroundColor: 'red', marginLeft: '10px' }}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
