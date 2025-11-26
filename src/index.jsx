import React from 'react';
import ReactDOM from 'react-dom/client';
import AgentDesktopWidget from './AgentDesktopWidget';

// Web Component wrapper for React
class AgentDesktopWidgetElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Create a mount point for React
    const mountPoint = document.createElement('div');
    
    // Add global styles to shadow root
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
      }
    `;
    
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(mountPoint);

    // Create React root and render
    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(<AgentDesktopWidget />);
  }

  disconnectedCallback() {
    // Cleanup React root
    if (this.root) {
      this.root.unmount();
    }
  }
}

// Register the custom element
customElements.define('agent-desktop-widget', AgentDesktopWidgetElement);
