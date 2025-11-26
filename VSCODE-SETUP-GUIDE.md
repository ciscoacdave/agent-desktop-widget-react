# Setting Up React Agent Desktop Widget in VS Code

## 📋 Prerequisites

Before you start, make sure you have installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional, but recommended) - [Download here](https://git-scm.com/)

To verify Node.js is installed:
```bash
node --version
npm --version
```

## 🚀 Method 1: Starting from Downloaded Files (Recommended)

### Step 1: Create Project Folder

1. Create a new folder on your computer:
   - **Windows:** `C:\Users\YourName\Projects\agent-desktop-widget`
   - **Mac/Linux:** `~/Projects/agent-desktop-widget`

2. Open VS Code

3. Click **File** → **Open Folder** (or press `Ctrl+K Ctrl+O`)

4. Select the folder you just created

### Step 2: Add Project Files

1. Download all the files from this chat to your computer

2. Copy these files/folders into your project folder:
   ```
   agent-desktop-widget/
   ├── src/
   │   ├── index.jsx
   │   └── AgentDesktopWidget.jsx
   ├── public/
   │   └── index.html
   ├── package.json
   ├── webpack.config.js
   ├── .gitignore
   └── README-REACT.md
   ```

3. Your VS Code should now show all these files in the Explorer panel (left side)

### Step 3: Install Dependencies

1. In VS Code, open the **Terminal**:
   - Menu: **Terminal** → **New Terminal** (or press `` Ctrl+` ``)

2. In the terminal, run:
   ```bash
   npm install
   ```

3. Wait for installation to complete (this may take 1-2 minutes)

4. You should see a new `node_modules` folder appear in your project

### Step 4: Start Development Server

In the terminal, run:
```bash
npm run serve
```

Your browser should automatically open to `http://localhost:3000`

🎉 **Success!** You should see your component running with test buttons!

### Step 5: Make Changes

1. In VS Code Explorer, open **`src/AgentDesktopWidget.jsx`**

2. Try making a simple change:
   - Find the line: `<h1 style={styles.headerTitle}>🎯 Agent Desktop Widget (React)</h1>`
   - Change it to: `<h1 style={styles.headerTitle}>🚀 My Custom Widget</h1>`
   - Save the file (`Ctrl+S`)

3. The browser will automatically reload and show your changes!

---

## 🚀 Method 2: Using Command Line (Advanced)

### Step 1: Create Project via Terminal

```bash
# Navigate to your projects folder
cd ~/Projects  # Mac/Linux
# or
cd C:\Users\YourName\Projects  # Windows

# Create project directory
mkdir agent-desktop-widget
cd agent-desktop-widget

# Open in VS Code
code .
```

### Step 2: Copy Files

Copy all the downloaded files into this directory.

### Step 3: Install and Run

```bash
npm install
npm run serve
```

---

## 🛠️ VS Code Extensions (Recommended)

Install these extensions for a better development experience:

### Essential Extensions:

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Quick React code snippets

2. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Auto-format your code

3. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - JavaScript linting

### How to Install Extensions:

1. Click the **Extensions** icon in VS Code sidebar (or press `Ctrl+Shift+X`)
2. Search for extension name
3. Click **Install**

---

## 📁 Understanding the Project Structure

```
agent-desktop-widget/
│
├── src/                                    # Source code folder
│   ├── index.jsx                          # Entry point & Web Component wrapper
│   └── AgentDesktopWidget.jsx             # Main React component (edit this!)
│
├── public/                                 # Static files
│   └── index.html                         # Test page template
│
├── node_modules/                           # Dependencies (auto-generated)
│   └── ... (don't edit these files)
│
├── dist/                                   # Build output (auto-generated)
│   └── agent-desktop-component.js         # Final bundled file for deployment
│
├── package.json                            # Project config & dependencies
├── webpack.config.js                       # Build configuration
├── .gitignore                              # Files to ignore in Git
└── README-REACT.md                         # Documentation
```

---

## 🎯 Common VS Code Workflows

### Development Mode (with auto-reload)

```bash
npm run serve
```
- Starts development server at http://localhost:3000
- Automatically reloads when you save files
- Press `Ctrl+C` in terminal to stop

### Build for Production

```bash
npm run build
```
- Creates optimized bundle in `dist/` folder
- This is the file you upload to your web server

### Watch Mode (builds on save, no server)

```bash
npm run dev
```
- Rebuilds when you save files
- Doesn't start a web server
- Useful if you want to test the built file separately

---

## 🔧 Customization Guide

### Where to Make Changes

**Main Component:** `src/AgentDesktopWidget.jsx`
This is where you'll spend most of your time!

### Example: Change Button Color

1. Open `src/AgentDesktopWidget.jsx`

2. Find the `styles` object (around line 95):

```jsx
const styles = {
  // ... other styles
  refreshBtn: {
    background: '#17a2b8',  // ← Change this color
    color: 'white'
  },
  // ... more styles
};
```

3. Change to your color:
```jsx
refreshBtn: {
  background: '#ff6b6b',  // New red color
  color: 'white'
},
```

4. Save (`Ctrl+S`) - browser auto-reloads!

### Example: Add a New Section

Add this in the `return` statement, before the button group:

```jsx
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>Custom Section</h2>
  <div style={styles.infoBlock}>
    <p>Your custom content here!</p>
  </div>
</div>
```

### Example: Add State

At the top of the component, add:

```jsx
const AgentDesktopWidget = () => {
  const [status, setStatus] = useState('Ready');
  const [agentData, setAgentData] = useState(null);
  const [interactionData, setInteractionData] = useState(null);
  
  // Add your new state here:
  const [myCustomData, setMyCustomData] = useState('Hello!');
  
  // ... rest of component
};
```

---

## 🐛 Troubleshooting

### "npm: command not found"

**Problem:** Node.js is not installed or not in PATH

**Solution:**
1. Download and install Node.js from https://nodejs.org/
2. Restart VS Code
3. Verify: `node --version`

### Port 3000 Already in Use

**Problem:** Another app is using port 3000

**Solution:** 
Edit `webpack.config.js`, change port:
```javascript
devServer: {
  // ... other settings
  port: 3001,  // Changed from 3000
}
```

### Changes Not Showing in Browser

**Solutions:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check terminal for build errors
3. Stop server (`Ctrl+C`) and restart: `npm run serve`

### Module Not Found Errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json  # Mac/Linux
# or
rmdir /s node_modules & del package-lock.json  # Windows

npm install
```

---

## 🎓 Next Steps

### 1. Learn the Basics
- Explore `src/AgentDesktopWidget.jsx`
- Modify styles and see changes
- Add console.log() to understand the flow

### 2. Test with Simulated Data
- Run `npm run serve`
- Click the test buttons to simulate Agent Desktop events
- Watch browser console to see message flow

### 3. Add Your Features
- Connect to your APIs
- Add more UI sections
- Implement your business logic

### 4. Build for Production
```bash
npm run build
```
- Upload `dist/agent-desktop-component.js` to your server
- Configure in Webex Contact Center Admin

---

## 📚 Helpful VS Code Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open Terminal | `` Ctrl+` `` | `` Cmd+` `` |
| Save File | `Ctrl+S` | `Cmd+S` |
| Find in File | `Ctrl+F` | `Cmd+F` |
| Find in Project | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Toggle Sidebar | `Ctrl+B` | `Cmd+B` |

---

## 💡 Pro Tips

1. **Enable Auto Save:** File → Auto Save
2. **Use Prettier:** Install extension and format on save
3. **Split Terminal:** Click the split icon in terminal to run multiple commands
4. **Zen Mode:** View → Appearance → Zen Mode for distraction-free coding
5. **Git Integration:** VS Code has built-in Git support (Source Control panel)

---

## 🎯 Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server (with browser auto-open)
npm run serve

# Build for production
npm run build

# Watch mode (rebuild on save)
npm run dev

# Install a new package
npm install package-name

# Check for outdated packages
npm outdated
```

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] VS Code opens the project folder
- [ ] Terminal works in VS Code
- [ ] `npm install` completes without errors
- [ ] `node_modules` folder appears
- [ ] `npm run serve` starts server
- [ ] Browser opens to http://localhost:3000
- [ ] Component loads in browser
- [ ] Test buttons work (check browser console)
- [ ] Making changes to `AgentDesktopWidget.jsx` auto-reloads browser
- [ ] `npm run build` creates `dist/agent-desktop-component.js`

---

## 🆘 Getting Help

If you run into issues:

1. **Check terminal output** for error messages
2. **Check browser console** (F12) for JavaScript errors
3. **Verify Node.js version:** `node --version` (should be 16+)
4. **Try clean install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🎉 You're All Set!

You now have a fully functional React development environment in VS Code for building your Agent Desktop widget. Happy coding! 🚀
