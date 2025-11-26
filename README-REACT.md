# Agent Desktop Web Component (React)

A React-based web component designed to be embedded into Webex Contact Center Agent Desktop using the Web Component reference method (not iframe).

## 🚀 Technology Stack

- **React 18** - Modern React with hooks
- **Webpack 5** - Module bundler
- **Babel** - JavaScript transpiler
- **Web Components API** - Custom Elements & Shadow DOM

## 📁 Project Structure

```
agent-desktop-widget-react/
├── src/
│   ├── index.jsx                  # Entry point & Web Component wrapper
│   └── AgentDesktopWidget.jsx     # Main React component
├── public/
│   └── index.html                 # Test/development page
├── dist/                          # Build output (generated)
│   └── agent-desktop-component.js # Bundled component
├── package.json                   # Dependencies & scripts
├── webpack.config.js              # Webpack configuration
└── README.md                      # This file
```

## 🎯 Features

- ✅ Built with React 18 and modern hooks
- ✅ Wrapped in Web Component for Agent Desktop compatibility
- ✅ Shadow DOM for style isolation
- ✅ PostMessage API for bi-directional communication
- ✅ Handles agent state changes and interaction data
- ✅ Hot module replacement for development
- ✅ Production-ready build with Webpack

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 💻 Development

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Development Server (with live preview)
```bash
npm run serve
```
Opens browser at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates optimized bundle in `dist/` directory

## 🧪 Local Testing

1. Run `npm run serve` to start the development server
2. Open http://localhost:3000 in your browser
3. Use the simulation buttons to test Agent Desktop events
4. Open browser console to see communication logs

## 🚀 Deployment to Webex Contact Center

### Step 1: Build for Production

```bash
npm run build
```

This creates `dist/agent-desktop-component.js` - a single bundled file containing React, ReactDOM, and your component.

### Step 2: Host the Component

1. Upload `dist/agent-desktop-component.js` to a web server
2. Ensure the server supports HTTPS
3. Make note of the full URL (e.g., `https://your-domain.com/agent-desktop-component.js`)

**Hosting Options:**
- GitHub Pages
- AWS S3 + CloudFront
- Azure Blob Storage
- Your company's web server
- CDN service (Cloudflare, Fastly, etc.)

**Important:** Add CORS headers to your server:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### Step 3: Configure in Agent Desktop Layout

1. Log in to **Webex Contact Center Administration Portal**
2. Navigate to **Provisioning** > **Desktop Layout**
3. Select the layout you want to modify or create a new one
4. Click **Add Component**
5. Select **Custom Component**
6. Configure the component:
   - **Component Type:** Web Component
   - **Component Tag:** `agent-desktop-widget`
   - **Script URL:** `https://your-domain.com/agent-desktop-component.js`
   - **Component Name:** Agent Desktop Widget
   - **Icon:** Choose an appropriate icon
7. Position the component in your layout
8. Save the layout
9. Assign the layout to a team

### Step 4: Verify Installation

1. Log in to Agent Desktop with an agent assigned to the team
2. The component should load in the configured position
3. Check browser console for any errors
4. Test the communication by handling calls

## 📡 Component API

### Incoming Messages (from Agent Desktop)

The component listens for these message types via `window.addEventListener('message')`:

```javascript
// Agent Desktop is ready
{
  type: 'agentContact:ready',
  data: { ... }
}

// Agent state changed
{
  type: 'agentContact:stateChange',
  data: {
    state: 'Available',
    team: 'Support Team',
    agentId: 'agent-123',
    ...
  }
}

// Interaction data
{
  type: 'agentContact:interaction',
  data: {
    id: 'interaction-id',
    mediaType: 'telephony',
    ani: '+1-555-0123',
    direction: 'inbound',
    ...
  }
}
```

### Outgoing Messages (to Agent Desktop)

The component can send messages to Agent Desktop via `window.parent.postMessage()`:

```javascript
// Notify ready
{
  type: 'widget:ready',
  data: {
    widgetId: 'agent-desktop-widget',
    timestamp: '2024-01-01T00:00:00.000Z'
  }
}

// Request data update
{
  type: 'widget:requestUpdate',
  data: {
    widgetId: 'agent-desktop-widget'
  }
}

// Send action
{
  type: 'widget:action',
  data: {
    action: 'customAction',
    timestamp: '2024-01-01T00:00:00.000Z',
    data: { ... }
  }
}
```

## 🎨 Customization

### Modify the React Component

Edit `src/AgentDesktopWidget.jsx`:

```jsx
import React, { useState, useEffect } from 'react';

const AgentDesktopWidget = () => {
  const [myState, setMyState] = useState(null);
  
  // Add your custom logic here
  const handleCustomAction = () => {
    // Your custom functionality
  };
  
  return (
    <div>
      {/* Your custom UI */}
    </div>
  );
};

export default AgentDesktopWidget;
```

### Add New Dependencies

```bash
npm install your-package-name
```

Then import and use in your React component:

```jsx
import YourPackage from 'your-package-name';
```

### Update Styles

The component uses inline styles (React style objects) to work within Shadow DOM. Modify the `styles` object in `AgentDesktopWidget.jsx`:

```jsx
const styles = {
  container: {
    padding: '20px',
    background: '#ffffff',
    // Your custom styles
  },
  // Add more style objects
};
```

### Add More UI Features

Example: Add a new section with API call

```jsx
const AgentDesktopWidget = () => {
  const [customerData, setCustomerData] = useState(null);
  
  const fetchCustomerData = async (customerId) => {
    const response = await fetch(`/api/customers/${customerId}`);
    const data = await response.json();
    setCustomerData(data);
  };
  
  return (
    <div style={styles.container}>
      {/* Existing sections */}
      
      <div style={styles.section}>
        <h2>Customer Information</h2>
        <div style={styles.infoBlock}>
          {customerData ? (
            <>
              <strong>Name:</strong> {customerData.name}<br />
              <strong>Account:</strong> {customerData.accountId}
            </>
          ) : (
            <em>No customer data loaded</em>
          )}
        </div>
      </div>
    </div>
  );
};
```

## 🔧 Troubleshooting

### Build Errors

**Problem:** `Module not found` errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Problem:** Webpack compilation errors
```bash
# Clear webpack cache
rm -rf node_modules/.cache
npm run build
```

### Component Not Loading in Agent Desktop

1. **Check browser console** for errors
2. **Verify script URL** is accessible (HTTPS required)
3. **Check CORS headers** on your server
4. **Verify component tag** matches exactly: `agent-desktop-widget`
5. **Check bundle size** - if too large, optimize webpack config

### No Data Appearing

1. Check that Agent Desktop is sending events
2. Open browser console and look for postMessage logs
3. Verify the message event listener is working
4. Check that data format matches what component expects

### Performance Issues

If the bundle is too large:

1. **Enable code splitting** in webpack.config.js
2. **Use production build** (`npm run build`)
3. **Lazy load heavy dependencies**
4. **Minimize unnecessary imports**

## 📦 Bundle Size Optimization

### Current Bundle Size
- React + ReactDOM: ~130 KB (gzipped)
- Component code: ~5 KB (gzipped)
- Total: ~135 KB (gzipped)

### To Reduce Bundle Size

1. **Use React production build** (automatically done with `npm run build`)
2. **Enable minification** (already configured in webpack)
3. **Consider using Preact** as a lighter React alternative:
   ```bash
   npm install preact preact-compat
   ```
   Then alias in webpack.config.js

## 🌐 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support (Safari 13.1+)

## 🔒 Security Considerations

1. **Always use HTTPS** for hosting the component
2. **Validate incoming messages** to prevent XSS attacks
3. **Don't use `origin: '*'` in production** - validate message origins
4. **Sanitize any user input** before displaying
5. **Use Content Security Policy** headers on your server

### Production Message Validation

Update `src/AgentDesktopWidget.jsx`:

```jsx
const handleMessage = useCallback((event) => {
  // Validate origin in production
  const allowedOrigins = [
    'https://desktop.wxcc-us1.cisco.com',
    'https://desktop.wxcc-eu1.cisco.com',
    'https://desktop.wxcc-eu2.cisco.com'
  ];
  
  if (process.env.NODE_ENV === 'production' && 
      !allowedOrigins.includes(event.origin)) {
    console.warn('Rejected message from unauthorized origin:', event.origin);
    return;
  }
  
  // Process message...
}, []);
```

## 🧰 Advanced Configuration

### Adding Environment Variables

Create `.env` file:
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

Access in component:
```jsx
const apiUrl = process.env.REACT_APP_API_URL;
```

### Custom Webpack Configuration

Edit `webpack.config.js` to add plugins, loaders, or optimization:

```javascript
module.exports = {
  // ... existing config
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
};
```

## 📚 Resources

- [Webex Contact Center Documentation](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html)
- [Developer Portal](https://developer.webex-cx.com/)
- [React Documentation](https://react.dev/)
- [Web Components Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## 🤝 Contributing

Feel free to customize this component for your specific use case. This is a template/starting point for building Agent Desktop integrations with React.

## 📄 License

This is a sample/template component. Modify as needed for your use case.
