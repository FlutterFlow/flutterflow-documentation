// Simple Dify chatbot loader
(function() {
  if (typeof window === 'undefined') return;

  // Set configuration
  window.difyChatbotConfig = {
    token: 'bYIppJMzMieMPDHm'
  };

  // Load the script
  const script = document.createElement('script');
  script.src = 'https://udify.app/embed.min.js';
  script.defer = true;
  document.head.appendChild(script);

  // Add custom styles for purple color
  const style = document.createElement('style');
  style.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #4B39EF !important;
    }
  `;
  document.head.appendChild(style);
})(); 