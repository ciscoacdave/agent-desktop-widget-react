# 📚 Documentation Index - React Agent Desktop Widget

Welcome! This is your complete guide to setting up and using the React-based web component for Webex Contact Center Agent Desktop.

---

## 🎯 Start Here

**If you're brand new to this project, follow these guides in order:**

1. **[VSCODE-SETUP-GUIDE.md](VSCODE-SETUP-GUIDE.md)** ⭐ START HERE
   - Complete step-by-step setup instructions
   - How to install Node.js, VS Code
   - How to set up the project
   - First-time walkthrough
   - **Read this first if this is your first time!**

2. **[VISUAL-SETUP-GUIDE.md](VISUAL-SETUP-GUIDE.md)** 
   - Visual walkthrough with detailed descriptions
   - Shows what you should see at each step
   - Great for visual learners
   - Troubleshooting with screenshots

3. **[SETUP-CHECKLIST.md](SETUP-CHECKLIST.md)**
   - Printable checklist
   - Check off each step as you complete it
   - Quick reference for commands

---

## 📖 Reference Documentation

**Once you're set up, use these for reference:**

### Quick Reference
- **[QUICK-START.md](QUICK-START.md)** - Fast deployment guide, key commands
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and fixes

### Complete Documentation
- **[README-REACT.md](README-REACT.md)** - Full technical documentation
  - Component API
  - Customization guide
  - Security considerations
  - Advanced configuration

---

## 📁 Project Files

### Source Code (Edit These)
```
src/
├── AgentDesktopWidget.jsx    ← Your main React component (edit this!)
└── index.jsx                 ← Web Component wrapper (rarely edit)
```

### Configuration Files
```
package.json                   ← Dependencies and scripts
webpack.config.js             ← Build configuration
.gitignore                    ← Git ignore rules
```

### Testing
```
public/
└── index.html                ← Local test page
```

### Build Output (Generated)
```
dist/
└── agent-desktop-component.js ← Deploy this file! (created by npm run build)
```

---

## ⚡ Quick Command Reference

### First Time Setup
```bash
npm install              # Install dependencies (run once)
```

### Development
```bash
npm run serve           # Start dev server (browser auto-opens)
npm run dev             # Build and watch for changes
```

### Production
```bash
npm run build           # Build for production (creates dist/ folder)
```

### Troubleshooting
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Stop server
Ctrl+C
```

---

## 🎓 Learning Path

### Beginner (Never used VS Code or React)
1. Read: **VSCODE-SETUP-GUIDE.md**
2. Follow: **VISUAL-SETUP-GUIDE.md**
3. Print: **SETUP-CHECKLIST.md** and check off each step
4. Keep handy: **TROUBLESHOOTING.md**

### Intermediate (Know VS Code, learning React)
1. Skim: **QUICK-START.md**
2. Reference: **README-REACT.md** for API details
3. Modify: `src/AgentDesktopWidget.jsx`
4. When stuck: **TROUBLESHOOTING.md**

### Advanced (Experienced developer)
1. Check: **README-REACT.md** for architecture
2. Review: `webpack.config.js` and `package.json`
3. Customize as needed
4. Deploy: `npm run build` → upload `dist/` file

---

## 🎯 Common Tasks

### "I want to test the component locally"
```bash
npm run serve
# Opens browser to localhost:3000
# Use test buttons to simulate Agent Desktop events
```

### "I want to change the styling"
1. Open `src/AgentDesktopWidget.jsx`
2. Find the `styles` object (around line 95)
3. Modify CSS-in-JS styles
4. Save (Ctrl+S) - browser auto-reloads

### "I want to add a new feature"
1. Open `src/AgentDesktopWidget.jsx`
2. Add state with `useState`
3. Add functions for your feature
4. Add UI in the `return` statement
5. Save and test

### "I want to deploy to production"
```bash
npm run build
# Upload dist/agent-desktop-component.js to your HTTPS server
# Configure in WxCC Admin Portal
```

### "Something broke and I don't know why"
1. Check: **TROUBLESHOOTING.md**
2. Look at terminal for error messages
3. Check browser console (F12)
4. Try clean install (see Troubleshooting)

---

## 🔑 Key Concepts

### What is this project?
A **React application** wrapped in a **Web Component** that embeds into **Webex Contact Center Agent Desktop**. It can communicate with Agent Desktop via postMessage API.

### Why React?
- Modern, component-based UI
- Great ecosystem of libraries
- Easy state management
- Reusable components

### Why Web Components?
- Required by Agent Desktop
- Provides encapsulation (Shadow DOM)
- Framework-agnostic
- Native browser support

### How does it work?
```
React Component (AgentDesktopWidget.jsx)
    ↓
Wrapped in Web Component (index.jsx)
    ↓
Bundled by Webpack
    ↓
Creates single file (agent-desktop-component.js)
    ↓
Deployed to web server (HTTPS)
    ↓
Loaded by Agent Desktop
    ↓
Communicates via postMessage
```

---

## 📊 File Size Reference

```
Source files:         ~15 KB
Dependencies:         ~130 KB (React + ReactDOM, gzipped)
Built bundle:         ~147 KB (uncompressed)
                      ~45 KB (gzipped)
```

---

## 🌟 Feature Highlights

✅ **React 18** - Modern hooks (useState, useEffect, useCallback)
✅ **Web Components** - Custom Elements API
✅ **Shadow DOM** - Style isolation
✅ **Webpack** - Module bundling
✅ **Hot Reload** - Changes show instantly
✅ **Production Ready** - Minified and optimized
✅ **PostMessage API** - Bi-directional communication
✅ **Agent Desktop Events** - State changes, interactions
✅ **Test Page** - Local development and testing

---

## 🎨 Customization Examples

### Change Header Color
File: `src/AgentDesktopWidget.jsx`
```jsx
header: {
  background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
  // ...
}
```

### Add New State
```jsx
const [myData, setMyData] = useState(null);
```

### Add New Function
```jsx
const handleMyAction = () => {
  // Your logic here
  sendToDesktop('widget:customEvent', { data: 'value' });
};
```

### Add New UI Section
```jsx
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>My New Section</h2>
  <div style={styles.infoBlock}>
    {myData ? myData : 'No data'}
  </div>
</div>
```

---

## 🔒 Security Checklist

- [ ] Use HTTPS for hosting
- [ ] Validate message origins in production
- [ ] Sanitize user inputs
- [ ] Don't expose sensitive data
- [ ] Use environment variables for API keys
- [ ] Enable Content Security Policy
- [ ] Regular dependency updates (`npm audit`)

---

## 🚀 Deployment Checklist

- [ ] Code tested locally (`npm run serve`)
- [ ] No errors in browser console
- [ ] Build successful (`npm run build`)
- [ ] File uploaded to HTTPS server
- [ ] CORS headers configured
- [ ] URL accessible from browser
- [ ] Configured in WxCC Admin Portal
- [ ] Component tag: `agent-desktop-widget`
- [ ] Script URL correct
- [ ] Tested in Agent Desktop
- [ ] Tested with real calls/interactions

---

## 🆘 Getting Help

### Self-Help Resources
1. **TROUBLESHOOTING.md** - Common issues
2. **README-REACT.md** - Full API reference
3. Browser console (F12) - JavaScript errors
4. Terminal output - Build errors

### External Resources
- [React Documentation](https://react.dev/)
- [Webpack Documentation](https://webpack.js.org/)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Webex Contact Center Docs](https://developer.webex-cx.com/)

### Before Asking for Help
Gather this information:
- Error message (exact text)
- What you were trying to do
- Terminal output
- Browser console output
- Node version: `node --version`
- Steps to reproduce

---

## 📝 Version Information

**Project:** Agent Desktop Widget (React)
**Version:** 1.0.0
**React Version:** 18.2.0
**Webpack Version:** 5.x
**Node.js Required:** 16.x or higher

---

## 🎓 Next Steps After Setup

1. ✅ **Verify setup works** - Follow VSCODE-SETUP-GUIDE.md
2. 📚 **Learn the code** - Read through AgentDesktopWidget.jsx
3. 🎨 **Make small changes** - Modify colors, text
4. 🧪 **Test thoroughly** - Use test page and buttons
5. 🔧 **Add features** - Implement your requirements
6. 🏗️ **Build** - Run `npm run build`
7. 🚀 **Deploy** - Upload to server and configure in WxCC
8. ✨ **Iterate** - Continue improving based on feedback

---

## 💡 Pro Tips

1. **Save often** - Ctrl+S is your friend
2. **Check console** - Browser and terminal
3. **Use Git** - Commit working code
4. **Test in browsers** - Chrome, Firefox, Edge
5. **Read errors** - They usually tell you what's wrong
6. **Start small** - Make one change at a time
7. **Document changes** - Add comments in code
8. **Ask questions** - When stuck, reach out

---

## 🎉 Success!

Once you've:
- ✅ Set up VS Code project
- ✅ Run `npm install`
- ✅ Started dev server (`npm run serve`)
- ✅ Made a change and seen it update
- ✅ Built for production (`npm run build`)

**You're ready to build amazing Agent Desktop integrations with React!**

---

**Happy Coding! 🚀**

For questions or issues, refer to the appropriate documentation file above or check TROUBLESHOOTING.md.
