// Simple Dify chatbot loader
(function() {
  if (typeof window === 'undefined') return;

  // TEMPORARY DISABLE FLAG - Set to false to disable chatbot
  const CHATBOT_ENABLED = true;
  
  if (!CHATBOT_ENABLED) {
    console.log('Chatbot is temporarily disabled');
    return;
  }

  // Set configuration
  window.difyChatbotConfig = {
    token: 'bYIppJMzMieMPDHm'
  };

  // Add a lightweight launcher. The third-party client is fetched only after
  // an explicit user interaction, keeping it off the critical rendering path.
  const style = document.createElement('style');
  style.textContent = `
    #flutterflow-docs-chat-launcher,
    #dify-chatbot-bubble-button {
      background-color: #4B39EF !important;
      bottom: 0.80rem !important;
      right: 0.80rem !important;
      border-radius: 50% !important;
      width: 45px !important;
      height: 45px !important;
    }

    #flutterflow-docs-chat-launcher {
      position: fixed;
      right: 0.8rem;
      bottom: 0.8rem;
      z-index: 1000;
      display: grid;
      place-items: center;
      color: white;
      cursor: pointer;
      border: 0;
      box-shadow: 0 4px 14px rgb(0 0 0 / 24%);
    }

    #flutterflow-docs-chat-launcher:hover {
      background-color: #3626d3 !important;
    }

    #flutterflow-docs-chat-launcher:focus-visible {
      outline: 3px solid white;
      outline-offset: 2px;
    }

    #flutterflow-docs-chat-launcher[aria-busy="true"] {
      cursor: progress;
      opacity: 0.75;
    }
  `;
  document.head.appendChild(style);

  const launcher = document.createElement('button');
  launcher.id = 'flutterflow-docs-chat-launcher';
  launcher.type = 'button';
  launcher.setAttribute('aria-label', 'Open FlutterFlow documentation assistant');
  launcher.innerHTML = '<svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24"><path d="M5 5h14v10H9l-4 4V5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/><path d="M8 9h8M8 12h5" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  document.body.appendChild(launcher);

  launcher.addEventListener('click', () => {
    if (launcher.getAttribute('aria-busy') === 'true') return;
    launcher.setAttribute('aria-busy', 'true');
    launcher.setAttribute('aria-label', 'Loading FlutterFlow documentation assistant');
    const script = document.createElement('script');
    script.src = 'https://udify.app/embed.min.js';
    script.async = true;
    script.onload = () => launcher.remove();
    script.onerror = () => {
      launcher.setAttribute('aria-busy', 'false');
      launcher.setAttribute('aria-label', 'Chat assistant failed to load; try again');
    };
    document.head.appendChild(script);
  });
})(); 
