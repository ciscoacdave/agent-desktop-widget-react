# Quick Troubleshooting Guide 🔧

Keep this handy for quick fixes to common issues!

---

## 🚨 Critical Issues

### ❌ "npm: command not found" or "npm is not recognized"

**Problem:** Node.js is not installed or not in PATH

**Fix:**
1. Download Node.js: https://nodejs.org/ (get LTS version)
2. Install it (use default options)
3. **Restart VS Code completely**
4. Open new terminal
5. Try: `node --version` (should show version number)
6. Try: `npm --version` (should show version number)
7. Now try `npm install` again

---

### ❌ "Cannot find module" or "Module not found"

**Problem:** Dependencies not installed or corrupted

**Fix:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json  # Mac/Linux
# OR
rmdir /s /q node_modules & del package-lock.json  # Windows (PowerShell)

npm install
```

---

### ❌ "EADDRINUSE: address already in use :::3000"

**Problem:** Port 3000 is already in use by another app

**Fix Option 1 - Use Different Port:**
1. Open `webpack.config.js`
2. Find `port: 3000`
3. Change to `port: 3001`
4. Save and run `npm run serve` again

**Fix Option 2 - Kill Process:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [number] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## ⚠️ Common Issues

### ⚠️ Changes not showing in browser

**Try these in order:**

1. **Hard refresh browser:**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Check you saved the file:**
   - Look for white dot on file tab
   - Press `Ctrl+S` / `Cmd+S`

3. **Check terminal for errors:**
   - Look for red error messages
   - Look for "compiled successfully"

4. **Restart dev server:**
   ```bash
   # Press Ctrl+C to stop
   npm run serve  # Start again
   ```

5. **Clear browser cache:**
   - Chrome: Settings → Privacy → Clear browsing data
   - Or open in Incognito mode

---

### ⚠️ Terminal not opening in VS Code

**Fix:**
1. Try keyboard shortcut: `` Ctrl+` `` (backtick)
2. Try menu: Terminal → New Terminal
3. Check View → Appearance → Panel is checked
4. Restart VS Code

---

### ⚠️ Files not showing in Explorer

**Fix:**
1. Click refresh icon in Explorer panel
2. Close and reopen folder: File → Close Folder, then File → Open Folder
3. Make sure you opened the **folder**, not individual files

---

### ⚠️ "webpack: command not found"

**Problem:** Local dependencies not installed

**Fix:**
```bash
npm install
```

Make sure `node_modules` folder exists.

---

### ⚠️ Blank white page in browser

**Check:**
1. Browser console (F12) - look for errors
2. Terminal - look for build errors
3. Try: `npm run build` then open `dist/index.html`

---

### ⚠️ Syntax errors / red underlines

**Common causes:**

1. **Missing semicolon or bracket** - Check error message
2. **Wrong quotes** - Use `'` or `"`, not fancy quotes ``
3. **Typo in import** - Check spelling
4. **Missing comma** - In objects or arrays

**How to find:**
- Look at line number in error message
- VS Code shows red squiggly underlines
- Hover over red underline to see error

---

## 🔄 "Start Fresh" Process

If everything is broken and you want to start over:

```bash
# 1. Stop all running processes
Ctrl+C

# 2. Delete generated files
rm -rf node_modules package-lock.json dist  # Mac/Linux
# OR
rmdir /s /q node_modules dist & del package-lock.json  # Windows

# 3. Reinstall
npm install

# 4. Try again
npm run serve
```

---

## 🐌 Slow Performance Issues

### Build taking too long?

**Options:**
1. Use `npm run dev` instead of `npm run serve` (no live server)
2. Close other applications
3. Exclude `node_modules` from antivirus scanning
4. Increase Node memory:
   ```bash
   export NODE_OPTIONS=--max_old_space_size=4096  # Mac/Linux
   set NODE_OPTIONS=--max_old_space_size=4096     # Windows
   ```

---

## 🌐 Browser Issues

### Component not loading in browser

**Check:**
1. Browser console (F12 → Console tab) - any errors?
2. Network tab (F12 → Network tab) - files loading?
3. Try different browser
4. Disable browser extensions (test in Incognito)

---

### Browser not opening automatically

**Fix:**
```bash
# Stop server: Ctrl+C
# Manually open: http://localhost:3000
npm run serve
```

Or change webpack config to not auto-open:
```javascript
devServer: {
  // ...
  open: false,  // Change to false
}
```

---

## 📦 Build Issues

### Build fails with errors

**Common fixes:**

1. **Check for syntax errors** in your code
2. **Make sure all imports are correct**
3. **Try cleaning:**
   ```bash
   rm -rf dist
   npm run build
   ```

---

### Build file too large

**Optimize:**
1. Make sure you're using production build: `npm run build` (not dev)
2. Check webpack config has `mode: 'production'`
3. Remove unused imports
4. Consider code splitting

---

## 🎯 VS Code Specific Issues

### Extensions not working

**Fix:**
1. Reload window: `Ctrl+Shift+P` → "Reload Window"
2. Reinstall extension
3. Check extension compatibility

---

### IntelliSense not working

**Fix:**
1. Reload window: `Ctrl+Shift+P` → "Reload Window"
2. Check `jsconfig.json` exists
3. Try: `Ctrl+Shift+P` → "TypeScript: Restart TS server"

---

### Git not working

**Fix:**
1. Install Git: https://git-scm.com/
2. Restart VS Code
3. File → Preferences → Settings → Search "git.enabled"

---

## 📞 When to Ask for Help

If you've tried everything above and still stuck:

**Gather this info:**
1. Error message (exact text)
2. What you were trying to do
3. What command you ran
4. Terminal output
5. Browser console errors (F12 → Console)
6. Node version: `node --version`
7. npm version: `npm --version`

**Where to get help:**
- VS Code docs: https://code.visualstudio.com/docs
- React docs: https://react.dev/
- Stack Overflow
- Webex Developer Community

---

## ✅ Health Check Commands

Run these to verify your setup:

```bash
# Check Node.js
node --version
# Should show: v16.x.x or higher

# Check npm
npm --version  
# Should show: 8.x.x or higher

# Check project
npm list --depth=0
# Should show installed packages

# Test build
npm run build
# Should complete without errors
```

---

## 🔑 Key File Locations

If you need to check/edit these:

```
webpack.config.js    - Build configuration (port, paths)
package.json         - Dependencies, scripts
src/index.jsx        - Web Component wrapper
src/AgentDesktopWidget.jsx  - Main React component
public/index.html    - Test page template
```

---

## 💡 Prevention Tips

Avoid issues by:
1. ✅ Always save files before testing
2. ✅ Check terminal for errors
3. ✅ Check browser console for errors
4. ✅ Keep Node.js updated
5. ✅ Don't edit `node_modules` folder
6. ✅ Commit working code to Git
7. ✅ Test in multiple browsers

---

## 🚀 Quick Reset Commands

Keep these handy:

```bash
# Clean everything
rm -rf node_modules package-lock.json dist

# Fresh install
npm install

# Test dev server
npm run serve

# Test build
npm run build
```

---

**Remember:** Most issues are solved by:
1. Checking the error message carefully
2. Stopping and restarting the server
3. Clearing and reinstalling node_modules
4. Checking you're in the right directory
5. Making sure files are saved

Good luck! 🎉
