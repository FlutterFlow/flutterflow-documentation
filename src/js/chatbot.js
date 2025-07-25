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

  // Add custom styles for purple color and rounded corners
  const style = document.createElement('style');
  style.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #4B39EF !important;
      bottom: 0.25rem !important;
      right: 0.25rem !important;
      border-radius: 50% !important;
      width: 50px !important;
      height: 50px !important;
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
    // Handle all possible widget states
    const allWidgets = document.querySelectorAll('.dify-chatbot-widget, [class*="dify"], [id*="dify"]');
    const allWindows = document.querySelectorAll('#dify-chatbot-bubble-window, [class*="chat"], [class*="window"]');
    
    // Position all widget containers
    allWidgets.forEach(widget => {
      widget.style.position = 'fixed';
      widget.style.bottom = '0';
      widget.style.right = '0';
      widget.style.top = 'auto';
      widget.style.left = 'auto';
      widget.style.zIndex = '1000';
      widget.style.margin = '0';
      widget.style.transform = 'none';
    });
    
    // Position all window elements
    allWindows.forEach(window => {
      window.style.position = 'fixed';
      window.style.bottom = '0';
      window.style.right = '0';
      window.style.top = 'auto';
      window.style.left = 'auto';
      window.style.margin = '0';
      window.style.transform = 'none';
    });
    
    // Also handle any iframe that might be created
    const iframes = document.querySelectorAll('iframe[src*="dify"], iframe[src*="udify"]');
    iframes.forEach(iframe => {
      iframe.style.position = 'fixed';
      iframe.style.bottom = '0';
      iframe.style.right = '0';
      iframe.style.top = 'auto';
      iframe.style.left = 'auto';
      iframe.style.margin = '0';
      iframe.style.transform = 'none';
    });
    
    // Special handling for expanded state - target any element that might be the expanded window
    const expandedElements = document.querySelectorAll('[data-state="expanded"], [class*="expanded"], [style*="position: fixed"]');
    expandedElements.forEach(element => {
      element.style.position = 'fixed';
      element.style.bottom = '0';
      element.style.right = '0';
      element.style.top = 'auto';
      element.style.left = 'auto';
      element.style.margin = '0';
      element.style.transform = 'none';
      element.style.zIndex = '1000';
    });
    
    // Also force any element with a high z-index to stay at bottom
    const highZIndexElements = document.querySelectorAll('[style*="z-index: 999"], [style*="z-index: 1000"], [style*="z-index: 1001"]');
    highZIndexElements.forEach(element => {
      if (element.style.position === 'fixed') {
        element.style.bottom = '0';
        element.style.right = '0';
        element.style.top = 'auto';
        element.style.left = 'auto';
      }
    });
    
    // Make background elements more translucent to show rounded corners
    const allElements = document.querySelectorAll('.dify-chatbot-widget *');
    allElements.forEach(element => {
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
    const chatButtons = document.querySelectorAll('[id*="bubble-button"], [class*="bubble-button"]');
    chatButtons.forEach(button => {
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