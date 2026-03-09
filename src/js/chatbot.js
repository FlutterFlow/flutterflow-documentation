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

  // Load the script
  const script = document.createElement('script');
  script.src = 'https://udify.app/embed.min.js';
  script.defer = true;
  document.head.appendChild(script);

  // Add custom styles for purple color and rounded corners
  const style = document.createElement('style');
  style.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #4B39EF !important;
      bottom: 0.80rem !important;
      right: 0.80rem !important;
      border-radius: 50% !important;
      width: 45px !important;
      height: 45px !important;
    }
    
    /* Make the main chat window background more translucent to show rounded corners */
    .dify-chatbot-widget #dify-chatbot-bubble-window {
      background-color: rgba(51, 51, 51, 0.6) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
    }
    
    /* Also target any main container backgrounds */
    .dify-chatbot-widget > div {
      background-color: rgba(51, 51, 51, 0.6) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
    }
    
    /* Target the main chat container */
    .dify-chatbot-widget .dify-chatbot-bubble-window {
      background-color: rgba(51, 51, 51, 0.6) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
    }
    
    /* Target any chat window elements */
    [id*="chat"], [class*="chat-window"], [class*="bubble-window"] {
      background-color: rgba(51, 51, 51, 0.6) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
    }
    
    /* Ensure the chat button is perfectly circular */
    [id*="bubble-button"], [class*="bubble-button"] {
      border-radius: 50% !important;
      width: 60px !important;
      height: 60px !important;
    }
  `;
  document.head.appendChild(style);

  // Function to force positioning
  function forceChatbotPosition() {
    // Only target specific chatbot elements with very specific selectors
    const chatbotWidgets = document.querySelectorAll('.dify-chatbot-widget, #dify-chatbot-widget');
    const chatbotWindows = document.querySelectorAll('#dify-chatbot-bubble-window, .dify-chatbot-bubble-window');
    const chatbotButtons = document.querySelectorAll('#dify-chatbot-bubble-button, .dify-chatbot-bubble-button');
    
    // Position chatbot widget containers only
    chatbotWidgets.forEach(widget => {
      widget.style.position = 'fixed';
      widget.style.bottom = '0';
      widget.style.right = '0';
      widget.style.top = 'auto';
      widget.style.left = 'auto';
      widget.style.zIndex = '1000';
      widget.style.margin = '0';
      widget.style.transform = 'none';
    });
    
    // Position chatbot window elements only
    chatbotWindows.forEach(window => {
      window.style.position = 'fixed';
      window.style.bottom = '0';
      window.style.right = '0';
      window.style.top = 'auto';
      window.style.left = 'auto';
      window.style.margin = '0';
      window.style.transform = 'none';
    });
    
    // Handle chatbot iframes specifically
    const chatbotIframes = document.querySelectorAll('iframe[src*="dify"], iframe[src*="udify"]');
    chatbotIframes.forEach(iframe => {
      iframe.style.position = 'fixed';
      iframe.style.bottom = '0';
      iframe.style.right = '0';
      iframe.style.top = 'auto';
      iframe.style.left = 'auto';
      iframe.style.margin = '0';
      iframe.style.transform = 'none';
    });
    
    // Only target expanded chatbot elements
    const expandedChatbotElements = document.querySelectorAll('.dify-chatbot-widget[data-state="expanded"], .dify-chatbot-widget .expanded');
    expandedChatbotElements.forEach(element => {
      element.style.position = 'fixed';
      element.style.bottom = '0';
      element.style.right = '0';
      element.style.top = 'auto';
      element.style.left = 'auto';
      element.style.margin = '0';
      element.style.transform = 'none';
      element.style.zIndex = '1000';
    });
    
    // Only force positioning on chatbot elements with high z-index
    const highZIndexChatbotElements = document.querySelectorAll('.dify-chatbot-widget[style*="z-index: 999"], .dify-chatbot-widget[style*="z-index: 1000"], .dify-chatbot-widget[style*="z-index: 1001"]');
    highZIndexChatbotElements.forEach(element => {
      if (element.style.position === 'fixed') {
        element.style.bottom = '0';
        element.style.right = '0';
        element.style.top = 'auto';
        element.style.left = 'auto';
      }
    });
    
    // Make chatbot background elements more translucent to show rounded corners
    const chatbotElements = document.querySelectorAll('.dify-chatbot-widget *');
    chatbotElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      // Look for dark backgrounds that are likely the main content area
      if (computedStyle.backgroundColor && 
          (computedStyle.backgroundColor.includes('rgb(51, 51, 51)') ||
           computedStyle.backgroundColor.includes('rgb(64, 64, 64)') ||
           computedStyle.backgroundColor.includes('rgb(33, 33, 33)') ||
           computedStyle.backgroundColor.includes('#333333') ||
           computedStyle.backgroundColor.includes('#404040') ||
           computedStyle.backgroundColor.includes('#212121'))) {
        // Make it more translucent
        element.style.backgroundColor = 'rgba(51, 51, 51, 0.5)';
        element.style.borderRadius = '12px';
        element.style.overflow = 'hidden';
      }
    });
    
    // Ensure chat button is circular
    chatbotButtons.forEach(button => {
      button.style.borderRadius = '50%';
      button.style.width = '60px';
      button.style.height = '60px';
    });
  }

  // Apply positioning after script loads
  setTimeout(forceChatbotPosition, 1000);
  setTimeout(forceChatbotPosition, 2000);
  setTimeout(forceChatbotPosition, 3000);
  setTimeout(forceChatbotPosition, 4000);
  setTimeout(forceChatbotPosition, 5000);

  // Also watch for changes
  const observer = new MutationObserver(() => {
    forceChatbotPosition();
    // Run again after a short delay to catch any delayed changes
    setTimeout(forceChatbotPosition, 100);
    setTimeout(forceChatbotPosition, 500);
  });
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });

  // Also run continuously for the first 10 seconds
  let runCount = 0;
  const continuousInterval = setInterval(() => {
    forceChatbotPosition();
    runCount++;
    if (runCount > 20) { // Stop after 10 seconds (20 * 500ms)
      clearInterval(continuousInterval);
    }
  }, 500);
})(); 