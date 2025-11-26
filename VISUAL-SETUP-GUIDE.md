# Visual Step-by-Step Guide: VS Code Setup

## 🎯 Complete Walkthrough with Visual Guides

This guide provides detailed steps with descriptions of what you should see at each stage.

---

## Part 1: Initial Setup (5 minutes)

### Step 1.1: Download Files
1. Download all files from Claude to a folder on your computer (e.g., Downloads)
2. You should have these files:
   - `package.json`
   - `webpack.config.js`
   - `.gitignore`
   - `src` folder (with 2 files inside)
   - `public` folder (with 1 file inside)

### Step 1.2: Create Project Folder

**Windows:**
```
1. Open File Explorer
2. Navigate to C:\Users\YourName\
3. Create new folder: "Projects" (if you don't have one)
4. Inside Projects, create: "agent-desktop-widget"
5. Copy all downloaded files into this folder
```

**Mac:**
```
1. Open Finder
2. Navigate to your home folder
3. Create new folder: "Projects" (if you don't have one)
4. Inside Projects, create: "agent-desktop-widget"
5. Copy all downloaded files into this folder
```

**What you should see:**
```
agent-desktop-widget/
├── .gitignore
├── package.json
├── webpack.config.js
├── src/
│   ├── index.jsx
│   └── AgentDesktopWidget.jsx
└── public/
    └── index.html
```

---

## Part 2: Open in VS Code (2 minutes)

### Step 2.1: Launch VS Code

1. Open Visual Studio Code
2. You'll see the Welcome screen

### Step 2.2: Open Your Project

**Method A: Using Menu**
```
1. Click "File" in the top menu
2. Click "Open Folder..." (NOT "Open File")
3. Navigate to your "agent-desktop-widget" folder
4. Click "Select Folder" (Windows) or "Open" (Mac)
```

**Method B: Using Drag & Drop**
```
1. Open File Explorer/Finder
2. Navigate to your "agent-desktop-widget" folder
3. Drag the folder onto the VS Code window
```

**What you should see:**
- Left sidebar (Explorer) shows your project files
- Folder name "AGENT-DESKTOP-WIDGET" at the top of Explorer
- All your files visible in the tree view

---

## Part 3: Open Integrated Terminal (1 minute)

### Step 3.1: Open Terminal

**Method A: Using Menu**
```
1. Click "Terminal" in top menu
2. Click "New Terminal"
```

**Method B: Using Keyboard**
```
Windows/Linux: Press Ctrl + `
Mac: Press Cmd + `
(Note: ` is the backtick key, usually above Tab)
```

**What you should see:**
- Bottom panel appears
- Shows terminal/command prompt
- Current directory should be your project folder
- Example: `PS C:\Users\YourName\Projects\agent-desktop-widget>`

### Step 3.2: Verify Location

Type in terminal:
```bash
pwd    # Mac/Linux
cd     # Windows
```

You should see your project path.

---

## Part 4: Install Dependencies (2-3 minutes)

### Step 4.1: Run npm install

In the terminal, type:
```bash
npm install
```

Then press Enter.

**What you should see:**
```
1. Terminal shows: "added [number] packages"
2. Process may take 1-2 minutes
3. You'll see progress indicators
4. Eventually returns to command prompt
5. Left sidebar now shows "node_modules" folder (might need to refresh)
```

**If you see an error about npm not found:**
- Node.js is not installed
- Go to https://nodejs.org/ and download LTS version
- Install it, restart VS Code, try again

---

## Part 5: Start Development Server (1 minute)

### Step 5.1: Run Development Server

In the terminal, type:
```bash
npm run serve
```

Then press Enter.

**What you should see:**
```
Terminal shows:
- "webpack 5.x.x compiled successfully"
- "Project is running at http://localhost:3000/"
- Your default browser automatically opens
- Browser shows your component with test page
```

### Step 5.2: Verify in Browser

**In the browser you should see:**
- Header: "🧪 Agent Desktop Web Component (React) - Test Page"
- Blue/purple widget with "🎯 Agent Desktop Widget (React)"
- Three buttons: "Send Agent State", "Send Interaction Data", "Send Ready Event"
- The widget itself with sections for Status, Agent Info, Interaction
- Two buttons in widget: "🔄 Refresh Data", "⚡ Perform Action"

---

## Part 6: Make Your First Change (2 minutes)

### Step 6.1: Open Component File

1. In VS Code Explorer (left sidebar)
2. Click to expand "src" folder
3. Click on "AgentDesktopWidget.jsx"
4. File opens in editor

### Step 6.2: Find the Title

Use Find feature:
```
Windows/Linux: Press Ctrl+F
Mac: Press Cmd+F
Search for: "Agent Desktop Widget (React)"
```

You'll see this line (around line 97):
```jsx
<h1 style={styles.headerTitle}>🎯 Agent Desktop Widget (React)</h1>
```

### Step 6.3: Make a Change

Change it to:
```jsx
<h1 style={styles.headerTitle}>🚀 My Awesome Widget</h1>
```

### Step 6.4: Save the File

```
Windows/Linux: Press Ctrl+S
Mac: Press Cmd+S
```

**What you should see:**
- White dot on file tab disappears (indicates saved)
- Browser automatically refreshes
- Header in widget now shows "🚀 My Awesome Widget"

🎉 **Congratulations! You just made your first change!**

---

## Part 7: Understanding the Terminal Output (Reference)

### When you run `npm run serve`, you'll see:

```bash
> agent-desktop-widget-react@1.0.0 serve
> webpack serve --mode development --open

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/
<i> [webpack-dev-server] Content not from webpack is served from '...'
asset agent-desktop-component.js 1.21 MiB [emitted] (name: main)
webpack 5.x.x compiled successfully in 2345 ms
```

**This means:**
- ✅ Server is running
- ✅ Accessible at http://localhost:3000
- ✅ Compiled successfully
- ✅ Ready to use!

### When you save a file, you'll see:

```bash
assets by status 1.21 MiB [cached] 1 asset
webpack 5.x.x compiled successfully in 234 ms
```

**This means:**
- ✅ Detected your changes
- ✅ Rebuilt automatically
- ✅ Browser will refresh

---

## Part 8: Stopping the Server

### When you're done developing:

In the terminal, press:
```
Windows/Linux/Mac: Ctrl+C
```

Terminal will ask: "Terminate batch job (Y/N)?"
Type: `Y` and press Enter

**What you should see:**
- Server stops
- Back to normal command prompt
- Browser page stops working (can't refresh)

### To start again:
```bash
npm run serve
```

---

## Part 9: Building for Production

### When ready to deploy:

1. **Stop the dev server** (Ctrl+C if running)

2. **Run build command:**
```bash
npm run build
```

3. **What you should see:**
```bash
> agent-desktop-widget-react@1.0.0 build
> webpack --mode production

asset agent-desktop-component.js 146 KiB [emitted] [minimized]
webpack 5.x.x compiled successfully in 3456 ms
```

4. **Check the output:**
   - In Explorer, look for "dist" folder (may need to refresh)
   - Inside: `agent-desktop-component.js` (this is your deployment file!)

5. **Upload this file** to your web server

---

## 🎨 VS Code Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│ File  Edit  Selection  View  Terminal  Help            │ ← Menu Bar
├─────────────────────────────────────────────────────────┤
│ 📁 Explorer    📝 AgentDesktopWidget.jsx               │
│ ├─ src                                                  │
│ │  ├─ index.jsx                                        │
│ │  └─ AgentDesktopWidget.jsx  ← You're editing this   │
│ ├─ public                                              │
│ ├─ node_modules                                        │
│ └─ package.json                                        │
│                                                         │
│   const AgentDesktopWidget = () => {                  │
│     const [status, setStatus] = useState('Ready');    │ ← Editor
│     ...                                                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ TERMINAL                                                │
│ PS C:\...\agent-desktop-widget> npm run serve          │ ← Terminal
│ Project is running at http://localhost:3000/           │
└─────────────────────────────────────────────────────────┘
```

---

## 🔍 File Structure Explained

```
agent-desktop-widget/
│
├── src/                           ← YOUR CODE LIVES HERE
│   ├── index.jsx                 ← Wraps React in Web Component
│   └── AgentDesktopWidget.jsx    ← Main component (edit this most!)
│
├── public/
│   └── index.html                ← Test page template
│
├── node_modules/                 ← Dependencies (DON'T EDIT)
│   └── [480 packages]            ← Auto-generated by npm install
│
├── dist/                         ← BUILD OUTPUT (after npm run build)
│   ├── agent-desktop-component.js  ← Deploy this file!
│   └── index.html                   ← Test page (built)
│
├── package.json                  ← Project config
├── webpack.config.js             ← Build config
└── .gitignore                    ← Git ignore rules
```

---

## ✅ Success Checklist

After following this guide, you should:

- [ ] Have VS Code open with your project
- [ ] See all files in the Explorer sidebar
- [ ] Have a working terminal in VS Code
- [ ] See "node_modules" folder after `npm install`
- [ ] See "compiled successfully" after `npm run serve`
- [ ] See your component running in browser at localhost:3000
- [ ] Be able to edit `AgentDesktopWidget.jsx` and see changes
- [ ] Know how to stop the server (Ctrl+C)
- [ ] Know how to build for production (`npm run build`)

---

## 🆘 Common Issues & Visual Clues

### Issue: "npm: command not found"
**What you see:**
```
npm : The term 'npm' is not recognized...
```
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Wrong folder open
**What you see:** Explorer shows individual files, not the folder structure
**Solution:** File → Close Folder, then File → Open Folder (select the project folder)

### Issue: Port already in use
**What you see:**
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** 
1. Stop other server using port 3000
2. Or change port in `webpack.config.js` to 3001

### Issue: Changes not showing
**What you see:** Save file but browser doesn't update
**Solution:**
1. Check terminal for build errors
2. Hard refresh browser: Ctrl+Shift+R
3. Stop server (Ctrl+C) and restart: `npm run serve`

---

## 🎯 Next Steps After Setup

1. ✅ **You're set up!** VS Code project is working
2. 📖 **Read the code** - Understand `AgentDesktopWidget.jsx`
3. 🎨 **Customize it** - Change colors, text, add features
4. 🧪 **Test it** - Use the test buttons to simulate events
5. 🏗️ **Build it** - Run `npm run build` when ready
6. 🚀 **Deploy it** - Upload to your server

---

## 💡 Pro Tips for VS Code

1. **Multi-Cursor Editing:**
   - Hold Alt (Windows) or Option (Mac) and click to add cursors
   - Edit multiple places at once!

2. **Quick File Open:**
   - Press Ctrl+P (Cmd+P on Mac)
   - Type filename to quickly open

3. **Split Editor:**
   - Drag a file tab to the right
   - View two files side by side

4. **Integrated Git:**
   - Click Source Control icon (left sidebar)
   - Track changes, commit, push

5. **Settings:**
   - File → Preferences → Settings (Ctrl+,)
   - Search for anything you want to customize

---

You're all set! Happy coding! 🚀
