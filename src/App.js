import React from 'react';
import Chat from './components/Chat';
import Footer from './components/Footer'; // ✅ Make sure this is correctly imported
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>💬 Real-Time Chat Application</h2>
      <Chat />
      <Footer /> {/* ✅ Move Footer INSIDE the return block */}
    </div>
  );
}

export default App;
