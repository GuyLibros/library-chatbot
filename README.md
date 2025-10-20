# Library Chatbot - Setup Instructions

## Quick Start Guide

### Step 1: Create Your Files in Notepad++

1. Open Notepad++
2. Create a new file (File → New)
3. Copy the content from `index.html` artifact
4. Save as: `index.html` (make sure "Save as type" is "All files (*.*)")
5. Repeat for `embed.html`

### Step 2: Test Locally

1. Double-click `index.html` to open in your browser
2. Test the chatbot - make sure it responds correctly
3. Try asking about hours, locations, staff, etc.

### Step 3: Upload to GitHub

#### Option A: Using GitHub Website (Easiest)

1. Go to github.com and sign in
2. Click "New repository" (green button)
3. Name it: `library-chatbot`
4. Make it **Public**
5. Click "Create repository"
6. Click "uploading an existing file"
7. Drag and drop your `index.html` and `embed.html` files
8. Click "Commit changes"

#### Option B: Using Git Command Line

```bash
# In the folder with your HTML files
git init
git add .
git commit -m "Initial library chatbot"
git branch -M main
git remote add origin https://github.com/yourusername/library-chatbot.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select: **main** branch
5. Folder: **/ (root)**
6. Click **Save**
7. Wait 1-2 minutes
8. Your chatbot is live at: `https://yourusername.github.io/library-chatbot/`

### Step 5: Embed in Your Library Website

#### Option A: Iframe Embed
Add this code to your library homepage or LibGuide:

```html
<iframe 
    src="https://yourusername.github.io/library-chatbot/embed.html"
    width="100%"
    height="600px"
    style="border: 2px solid #667eea; border-radius: 10px;"
    title="Library Assistant Chatbot">
</iframe>
```

#### Option B: Popup Button (Recommended)
Add this to your library homepage:

```html
<!-- Add this button anywhere on your page -->
<button onclick="openLibraryChatbot()" style="
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 25px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 9999;
">
    💬 Library Help
</button>

<script>
function openLibraryChatbot() {
    window.open(
        'https://yourusername.github.io/library-chatbot/',
        'Library Chatbot',
        'width=800,height=700,resizable=yes,scrollbars=yes'
    );
}
</script>
```

#### Option C: For LibGuides
1. Go to LibGuides Admin
2. Navigate to: **Look & Feel** → **Custom JS/CSS**
3. Add this to the **JavaScript** section:

```javascript
// Add floating chatbot button to all LibGuides pages
document.addEventListener('DOMContentLoaded', function() {
    var chatButton = document.createElement('button');
    chatButton.innerHTML = '💬 Ask Library';
    chatButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 15px 25px; background: #667eea; color: white; border: none; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 10000;';
    chatButton.onclick = function() {
        window.open('https://yourusername.github.io/library-chatbot/', 'chatbot', 'width=800,height=700');
    };
    document.body.appendChild(chatButton);
});
```

---

## Customizing Your Chatbot

### Update Library Information

Open `index.html` in Notepad++ and find the `knowledgeBase` section (around line 200). Update:

#### Change Hours:
```javascript
{
    tag: "hours",
    patterns: ["hours", "open", "close", "when", "time"],
    responses: [
        "Our library hours are:\n\n📅 Monday-Friday: 7:00 AM - 11:00 PM\n📅 Saturday-Sunday: 9:00 AM - 5:00 PM"
    ]
}
```

#### Change Phone Numbers:
Search for `(555) 123-4567` and replace with your actual numbers.

#### Change Website URLs:
Search for `library.edu` and replace with your actual URLs.

#### Add New Topics:
Add a new intent to the `intents` array:

```javascript
{
    tag: "parking",
    patterns: ["parking", "park", "car", "vehicle", "lot"],
    responses: [
        "Student parking is available in Lot C behind the library. Visitor parking is in Lot A (2-hour limit). Parking permits required Mon-Fri 7am-5pm."
    ]
},
```

### Change Colors

Find the `:root` section (around line 12) and change:

```css
:root {
    --primary-color: #667eea;     /* Change to your library's main color */
    --secondary-color: #764ba2;   /* Change to your accent color */
}
```

Common color codes:
- Blue: `#2563eb`
- Green: `#059669`
- Red: `#dc2626`
- Purple: `#7c3aed`
- Orange: `#ea580c`

---

## Testing Checklist

Before going live, test these questions:

- ✅ "What are your hours?"
- ✅ "Where is the reference desk?"
- ✅ "How do I find books?"
- ✅ "Who can help me?"
- ✅ "How do I print?"
- ✅ "Book a study room"
- ✅ Random question (should get default response)

---

## Updating Your Chatbot

When you need to make changes:

1. **Edit locally**: Open `index.html` in Notepad++, make changes, save
2. **Test**: Open in browser to verify changes work
3. **Upload to GitHub**: 
   - Go to your repository
   - Click on `index.html`
   - Click the pencil icon (Edit)
   - Paste your updated code
   - Click "Commit changes"
4. **Wait 1-2 minutes** for GitHub Pages to update
5. **Refresh** your website to see changes

---

## Troubleshooting

### Chatbot won't load
- Check that GitHub Pages is enabled (Settings → Pages)
- Verify the URL is correct: `yourusername.github.io/library-chatbot/`
- Wait a few minutes after first setup

### Chatbot not responding
- Open browser console (F12) and check for errors
- Verify the `knowledgeBase` code is correct (no missing commas or brackets)

### Embed not showing
- Check the iframe `src` URL is correct
- Make sure your website allows iframes
- Try the popup button option instead

### Changes not appearing
- Clear your browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes after uploading to GitHub
- Try in incognito/private browsing mode

---

## Adding More Features

### Add Quick Reply Buttons
After the welcome message, add clickable buttons for common questions.

### Add a Feedback System
Let users rate responses as helpful or not helpful.

### Track Analytics
Add Google Analytics to see what questions users ask most.

### Multi-Language Support
Add translations for common responses.

---

## File Structure

Your GitHub repository should look like this:

```
library-chatbot/
├── index.html      (main chatbot page)
├── embed.html      (for iframe embedding)
└── README.md       (this file - optional)
```

---

## Support

If you need help:

1. Check the troubleshooting section above
2. Review the ES6 JavaScript guide (see previous chat)
3. Test in different browsers (Chrome, Firefox, Edge)
4. Contact your IT department for embedding support

---

## Quick Reference

**Your Chatbot URL**: `https://yourusername.github.io/library-chatbot/`

**Embed URL**: `https://yourusername.github.io/library-chatbot/embed.html`

**Update Files**: Go to GitHub repository → Click file → Edit (pencil icon)

**View Live Site**: Click the link in Settings → Pages

---

## License

This chatbot is free to use and modify for your library. No attribution required.

---

**Need to customize further?** Edit the HTML files in Notepad++ and re-upload to GitHub. Changes appear within 1-2 minutes!