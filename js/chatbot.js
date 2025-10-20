import knowledgeBase from './knowledge-base.js';

class LibraryChatbot {
  constructor() {
    this.messageContainer = document.getElementById('chatMessages');
    this.userInput = document.getElementById('userInput');
    this.sendButton = document.getElementById('sendButton');
    
    this.init();
  }
  
  init() {
    // Event listeners
    this.sendButton.addEventListener('click', () => this.handleSend());
    this.userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });
    
    // Welcome message
    this.addMessage(
      "Hello! 👋 I'm your library assistant. I can help you with hours, locations, research help, and more. What would you like to know?",
      'bot'
    );
  }
  
  handleSend() {
    const message = this.userInput.value.trim();
    if (!message) return;
    
    // Display user message
    this.addMessage(message, 'user');
    this.userInput.value = '';
    
    // Show typing indicator
    this.showTypingIndicator();
    
    // Get and display bot response
    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.getResponse(message);
      this.addMessage(response, 'bot');
    }, 600); // Slight delay for natural feel
  }
  
  getResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    
    // Search for matching intent
    for (const intent of knowledgeBase.intents) {
      for (const pattern of intent.patterns) {
        if (messageLower.includes(pattern)) {
          // Return random response from matched intent
          const responses = intent.responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }
    
    // No match found - return default
    return knowledgeBase.defaultResponse;
  }
  
  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    // Handle markdown-style formatting
    const formattedText = this.formatMessage(text);
    messageDiv.innerHTML = formattedText;
    
    this.messageContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }
  
  formatMessage(text) {
    // Simple markdown formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\n/g, '<br>') // Line breaks
      .replace(/•/g, '&bull;'); // Bullets
  }
  
  showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'message bot-message typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    this.messageContainer.appendChild(indicator);
    this.scrollToBottom();
  }
  
  hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }
  
  scrollToBottom() {
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new LibraryChatbot();
});
