# Agent Desktop Web Component

A simple web component designed to be embedded into Webex Contact Center Agent Desktop using the Web Component reference method (not iframe).

## Files

- `agent-desktop-component.js` - The web component implementation
- `test-page.html` - Test page for local development and testing

## Features

- ✅ Native Web Component (Custom Element)
- ✅ Shadow DOM for style encapsulation
- ✅ PostMessage API for communication with Agent Desktop
- ✅ Handles agent state changes
- ✅ Handles interaction data
- ✅ Bi-directional communication
- ✅ Clean, modern UI

## Local Testing

1. Open `test-page.html` in a browser
2. Use the buttons to simulate Agent Desktop events
3. Open browser console to see communication logs

## Deployment to Webex Contact Center

### Step 1: Host the Component

1. Upload `agent-desktop-component.js` to a web server
2. Ensure the server supports HTTPS
3. Make note of the full URL (e.g., `https://your-domain.com/agent-desktop-component.js`)

**Hosting Options:**
- GitHub Pages
- AWS S3 + CloudFront
- Azure Blob Storage
- Your company's web server
- CDN service

### Step 2: Configure in Agent Desktop Layout

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

### Step 3: Verify Installation

1. Log in to Agent Desktop with an agent assigned to the team
2. The component should load in the configured position
3. Check browser console for any errors
4. Test the communication by interacting with calls

## Component API

### Incoming Messages (from Agent Desktop)

The component listens for these message types:

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
    ...
  }
}
```

### Outgoing Messages (to Agent Desktop)

The component can send messages to Agent Desktop:

```javascript
// Notify ready
{
  type: 'widget:ready',
  data: {
    widgetId: 'agent-desktop-widget',
    timestamp: '...'
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
    ...
  }
}
```

## Customization

### Modify Styling

Edit the styles within the `<style>` tag in the `render()` method:

```javascript
render() {
  this.shadowRoot.innerHTML = `
    <style>
      /* Your custom styles here */
      .container {
        padding: 20px;
        background: #ffffff;
      }
      ...
    </style>
    ...
  `;
}
```

### Add Custom Functionality

Add new methods to the `AgentDesktopWidget` class:

```javascript
class AgentDesktopWidget extends HTMLElement {
  // Your custom methods
  myCustomFunction() {
    // Custom logic
  }
  
  handleCustomEvent(data) {
    // Handle custom events
  }
}
```

### Add More UI Elements

Modify the HTML in the `render()` method:

```javascript
render() {
  this.shadowRoot.innerHTML = `
    <style>...</style>
    
    <div class="container">
      <!-- Your custom HTML here -->
      <div class="custom-section">
        <h2>My Custom Section</h2>
        <!-- ... -->
      </div>
    </div>
  `;
}
```

## Troubleshooting

### Component Not Loading

1. Check browser console for errors
2. Verify the script URL is accessible (HTTPS required)
3. Ensure CORS headers are properly configured on your server
4. Verify the component tag matches exactly: `agent-desktop-widget`

### No Data Appearing

1. Check that the Agent Desktop is sending events
2. Open browser console and look for postMessage logs
3. Verify the message event listener is working
4. Check that the data format matches what the component expects

### CORS Issues

If you see CORS errors, add these headers to your web server:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support

## Security Considerations

1. **Always use HTTPS** for hosting the component
2. **Validate incoming messages** to prevent XSS attacks
3. **Be careful with origin checking** in production (don't use `'*'` for postMessage)
4. **Sanitize any user input** before displaying

## Advanced Example: Origin Validation

For production, you should validate message origins:

```javascript
handleMessage(event) {
  // Validate origin
  const allowedOrigins = ['https://desktop.wxcc-us1.cisco.com'];
  if (!allowedOrigins.includes(event.origin)) {
    console.warn('Rejected message from unauthorized origin:', event.origin);
    return;
  }
  
  const { type, data } = event.data;
  // Process message...
}
```

## Support

For Webex Contact Center specific questions, refer to:
- [Webex Contact Center Documentation](https://www.cisco.com/c/en/us/support/customer-collaboration/webex-contact-center/series.html)
- [Developer Portal](https://developer.webex-cx.com/)

## License

This is a sample/template component. Modify as needed for your use case.
