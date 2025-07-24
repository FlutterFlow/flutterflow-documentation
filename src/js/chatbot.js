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
      bottom: 0.25rem !important;
      right: 0.25rem !important;
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