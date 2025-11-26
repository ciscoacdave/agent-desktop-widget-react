# Quick Start Guide - React Agent Desktop Widget

## 🎯 What You Have

A complete React-based web component that can be embedded in Webex Contact Center Agent Desktop.

## 📦 Files Included

### Ready to Deploy:
- **agent-desktop-component.js** (147KB) - Pre-built, production-ready component
  - This single file contains React, ReactDOM, and your component
  - Upload this to your web server and use immediately!

### Source Code (for customization):
- **src/** - React component source files
- **public/** - Test HTML page
- **package.json** - Project dependencies
- **webpack.config.js** - Build configuration
- **README-REACT.md** - Complete documentation

## 🚀 Fastest Path to Production

### Option 1: Use Pre-built File (No Build Required)

1. **Upload** `agent-desktop-component.js` to your HTTPS web server
2. **Get the URL** (e.g., `https://yourserver.com/agent-desktop-component.js`)
3. **Configure in WxCC Admin:**
   - Component Type: **Web Component**
   - Component Tag: `agent-desktop-widget`
   - Script URL: Your file URL
4. **Done!** The component is ready to use.

### Option 2: Customize & Build

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run serve
   ```
   Opens at http://localhost:3000

3. **Make your changes** in `src/AgentDesktopWidget.jsx`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Creates new `dist/agent-desktop-component.js`

5. **Deploy** the new built file to your server

## 🧪 Local Testing

### Without Building:
Open `test-page.html` in a browser (uses the pre-built component)

### With Development Server:
```bash
npm install
npm run serve
```

## 📋 Component Configuration in WxCC

**In Webex Contact Center Admin Portal:**

1. Go to **Provisioning** → **Desktop Layout**
2. Add **Custom Component**
3. Enter these values:
   - **Component Type:** Web Component
   - **Component Tag:** `agent-desktop-widget`
   - **Script URL:** `https://your-domain.com/agent-desktop-component.js`
   - **Name:** Agent Desktop Widget
4. Save and assign to team

## 🎨 Quick Customization Examples

### Change Colors
Edit `src/AgentDesktopWidget.jsx`, find the `styles` object:

```jsx
const styles = {
  header: {
    background: 'linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%)',
    // ...
  }
};
```

### Add a New Button
In the return statement, add to `.buttonGroup`:

```jsx
<button 
  style={{...styles.button, background: '#6c757d', color: 'white'}} 
  onClick={handleYourFunction}
>
  🎯 Your Action
</button>
```

### Add External API Call
Add to your component:

```jsx
const [apiData, setApiData] = useState(null);

const fetchData = async () => {
  const response = await fetch('https://your-api.com/endpoint');
  const data = await response.json();
  setApiData(data);
};
```

## 💡 Pro Tips

1. **Keep the pre-built file** as a backup
2. **Test in development mode** before building for production
3. **Use HTTPS** - Agent Desktop requires it
4. **Check CORS headers** on your server
5. **Monitor browser console** for errors during testing

## 🔍 Troubleshooting

**Component doesn't load:**
- Verify HTTPS URL is accessible
- Check browser console for errors
- Verify component tag is exactly `agent-desktop-widget`

**No communication:**
- Open browser console
- Look for postMessage logs
- Use test buttons to simulate events

**Need to rebuild:**
```bash
npm run build
```

## 📞 Need Help?

Check **README-REACT.md** for complete documentation including:
- Detailed API reference
- Security best practices
- Advanced customization
- Performance optimization
- Production deployment guide

## 🎉 That's It!

You're ready to deploy a React-based web component to Webex Contact Center Agent Desktop!
