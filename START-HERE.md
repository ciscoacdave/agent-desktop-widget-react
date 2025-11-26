# 🚀 React Agent Desktop Widget for Webex Contact Center

A production-ready React component that embeds into Webex Contact Center Agent Desktop using the Web Component reference method.

---

## ⚡ Quick Start for VS Code

**New to this project? Start here:**

### 📖 [READ THE SETUP GUIDE →](VSCODE-SETUP-GUIDE.md)

This guide will walk you through:
1. Installing prerequisites (Node.js, VS Code)
2. Setting up the project in VS Code
3. Installing dependencies
4. Running the development server
5. Making your first changes
6. Building for production

**Estimated time:** 15 minutes

---

## 📚 All Documentation

Choose the guide that fits your needs:

| Guide | Best For | Time |
|-------|----------|------|
| **[VSCODE-SETUP-GUIDE.md](VSCODE-SETUP-GUIDE.md)** ⭐ | First-time setup, beginners | 15 min |
| **[VISUAL-SETUP-GUIDE.md](VISUAL-SETUP-GUIDE.md)** | Visual learners, step-by-step | 20 min |
| **[QUICK-START.md](QUICK-START.md)** | Quick deployment reference | 5 min |
| **[README-REACT.md](README-REACT.md)** | Complete technical docs | - |
| **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** | When things go wrong | - |
| **[SETUP-CHECKLIST.md](SETUP-CHECKLIST.md)** | Printable task list | - |
| **[INDEX.md](INDEX.md)** | Master index of all docs | - |

---

## 🎯 What You Get

### Ready to Deploy
- **`agent-desktop-component.js`** (147KB) - Pre-built, production-ready
  - Upload to your HTTPS server and use immediately
  - No build step required for quick testing

### Full Source Code
- **`src/`** - React component source files
- **`public/`** - Test HTML page
- **`package.json`** - Dependencies
- **`webpack.config.js`** - Build configuration

---

## 🚀 Three Ways to Get Started

### Option 1: Deploy Pre-Built (Fastest - 5 minutes)
```
1. Upload agent-desktop-component.js to your HTTPS server
2. Configure in Webex Contact Center Admin Portal
3. Done!
```
**Best for:** Quick testing, no customization needed

### Option 2: Test Locally First (15 minutes)
```bash
npm install
npm run serve
# Opens browser at localhost:3000 with test interface
```
**Best for:** Want to see it working before customizing

### Option 3: Full Development Setup (30 minutes)
```bash
npm install
npm run serve
# Edit src/AgentDesktopWidget.jsx
# Make changes, see them live
npm run build
# Deploy dist/agent-desktop-component.js
```
**Best for:** Full customization and development

---

## ✨ Key Features

- ✅ **React 18** - Modern hooks and components
- ✅ **Web Components** - Native browser support
- ✅ **Shadow DOM** - Isolated styles
- ✅ **Hot Reload** - See changes instantly
- ✅ **Production Ready** - Minified and optimized
- ✅ **TypeScript Ready** - Easy to add types
- ✅ **PostMessage API** - Agent Desktop communication
- ✅ **Test Interface** - Built-in testing tools

---

## 📦 Project Structure

```
agent-desktop-widget/
├── 📖 Documentation
│   ├── INDEX.md                      ← Master guide
│   ├── VSCODE-SETUP-GUIDE.md        ← Start here! ⭐
│   ├── VISUAL-SETUP-GUIDE.md        ← Visual walkthrough
│   ├── QUICK-START.md               ← Quick reference
│   ├── README-REACT.md              ← Full technical docs
│   ├── TROUBLESHOOTING.md           ← Common issues
│   └── SETUP-CHECKLIST.md           ← Printable checklist
│
├── 🚀 Ready to Deploy
│   └── agent-desktop-component.js   ← Upload this! (147KB)
│
├── 💻 Source Code
│   ├── src/
│   │   ├── AgentDesktopWidget.jsx   ← Main component (edit this!)
│   │   └── index.jsx                ← Web Component wrapper
│   └── public/
│       └── index.html               ← Test page
│
└── ⚙️ Configuration
    ├── package.json                 ← Dependencies
    ├── webpack.config.js            ← Build config
    └── .gitignore                   ← Git ignore
```

---

## 💻 Commands Reference

### Setup
```bash
npm install              # Install dependencies (first time only)
```

### Development
```bash
npm run serve           # Start dev server with auto-reload
npm run dev             # Build and watch for changes
```

### Production
```bash
npm run build           # Create production bundle
```

### Troubleshooting
```bash
rm -rf node_modules package-lock.json
npm install             # Clean reinstall
```

---

## 🎨 Quick Customization

### Change Colors
Edit `src/AgentDesktopWidget.jsx`, find `styles` object:
```jsx
header: {
  background: 'linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR 100%)',
}
```

### Add New Section
```jsx
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>My Section</h2>
  <div style={styles.infoBlock}>
    Your content here
  </div>
</div>
```

### Add State
```jsx
const [myData, setMyData] = useState(null);
```

---

## 🔧 Webex Contact Center Setup

### 1. Build the Component
```bash
npm run build
# Creates: dist/agent-desktop-component.js
```

### 2. Host the File
Upload to your HTTPS web server

### 3. Configure in WxCC Admin
```
Component Type:    Web Component
Component Tag:     agent-desktop-widget
Script URL:        https://your-server.com/agent-desktop-component.js
```

**See [QUICK-START.md](QUICK-START.md) for detailed deployment steps**

---

## 🆘 Need Help?

### Having Issues?
1. Check **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** first
2. Look for errors in browser console (F12)
3. Check terminal output for build errors
4. Verify Node.js version: `node --version` (need 16+)

### Want to Learn More?
- **[VSCODE-SETUP-GUIDE.md](VSCODE-SETUP-GUIDE.md)** - Complete setup walkthrough
- **[README-REACT.md](README-REACT.md)** - Full API and architecture docs
- **[INDEX.md](INDEX.md)** - Master documentation index

### Common Issues
| Issue | Fix |
|-------|-----|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Port 3000 in use` | Change port in webpack.config.js |
| Changes not showing | Hard refresh browser (Ctrl+Shift+R) |
| Module not found | Run `npm install` |

---

## 📋 Prerequisites

- **Node.js** 16.x or higher → [Download](https://nodejs.org/)
- **VS Code** (recommended) → [Download](https://code.visualstudio.com/)
- **HTTPS web server** for deployment
- **Webex Contact Center** admin access

---

## 🎓 Learning Path

### Beginner (New to VS Code/React)
```
1. Read: VSCODE-SETUP-GUIDE.md
2. Follow: Step-by-step instructions
3. Print: SETUP-CHECKLIST.md
4. Test: Run npm run serve
5. Deploy: Upload pre-built file
```

### Intermediate (Know basics, want to customize)
```
1. Skim: QUICK-START.md
2. Setup: npm install && npm run serve
3. Edit: src/AgentDesktopWidget.jsx
4. Build: npm run build
5. Deploy: Upload dist/ file
```

### Advanced (Experienced developer)
```
1. Review: README-REACT.md
2. Examine: webpack.config.js
3. Customize: src/ files
4. Optimize: Build configuration
5. Deploy: Production pipeline
```

---

## ✅ Success Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] Project opened in VS Code
- [ ] Dependencies installed (`npm install` completed)
- [ ] Dev server runs (`npm run serve` opens browser)
- [ ] Component loads at localhost:3000
- [ ] Test buttons work (check console)
- [ ] Made a change and saw it update
- [ ] Production build succeeds (`npm run build`)
- [ ] Deployed to web server (HTTPS)
- [ ] Configured in WxCC Admin
- [ ] Tested in Agent Desktop

---

## 🔒 Security Notes

- ✅ Always use HTTPS for hosting
- ✅ Validate message origins in production
- ✅ Sanitize user inputs
- ✅ Don't expose API keys in code
- ✅ Use environment variables for secrets
- ✅ Regular dependency updates (`npm audit`)

---

## 📊 Bundle Size

```
Source files:         ~15 KB
React + ReactDOM:     ~130 KB (gzipped)
Total bundle:         ~147 KB (uncompressed)
                      ~45 KB (gzipped)
```

---

## 🌟 What's Included

### React Component
- Modern hooks (useState, useEffect, useCallback)
- Clean, maintainable code
- Inline styles for Shadow DOM compatibility
- Event handling for Agent Desktop messages

### Web Component Wrapper
- Custom Elements API
- Shadow DOM encapsulation
- Lifecycle management
- Clean unmounting

### Build System
- Webpack 5 configuration
- Babel transpilation
- Hot module replacement
- Production optimization

### Testing Tools
- Local test page
- Event simulators
- Console logging
- Mock data

### Documentation
- 8 comprehensive guides
- Visual walkthroughs
- Troubleshooting reference
- Quick start guide

---

## 🎉 Ready to Start?

### Choose Your Path:

**🏃 Quick Test** → Deploy pre-built file (5 min)
- Upload `agent-desktop-component.js` 
- Configure in WxCC Admin
- Test immediately

**🔧 Customize** → Full development setup (30 min)
- Follow **[VSCODE-SETUP-GUIDE.md](VSCODE-SETUP-GUIDE.md)**
- Edit and build
- Deploy custom version

**📚 Learn** → Study the code
- Read **[README-REACT.md](README-REACT.md)**
- Explore `src/AgentDesktopWidget.jsx`
- Understand the architecture

---

## 🚀 Get Started Now

```bash
# Clone or download this project
# Then:

npm install         # Install dependencies
npm run serve       # Start development server

# Browser opens to localhost:3000
# Edit src/AgentDesktopWidget.jsx
# See changes live!
```

---

## 📞 Support

- 📖 **Documentation**: See INDEX.md for all guides
- 🐛 **Issues**: Check TROUBLESHOOTING.md
- 💡 **Questions**: Review README-REACT.md
- 🎓 **Learning**: Follow VSCODE-SETUP-GUIDE.md

---

**Made with ❤️ for Webex Contact Center developers**

**Version:** 1.0.0 | **React:** 18.2.0 | **License:** MIT
