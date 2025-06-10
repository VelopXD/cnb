# CNB Team - Minecraft Gaming Website

A modern, responsive website for the CNB Team Minecraft server, featuring UHC and Sword modes. This website is designed to be hosted on GitHub Pages and provides an engaging user experience for the Minecraft gaming community.

## 🌟 Features

- **Modern UI/UX Design**
  - Sleek dark theme with gaming aesthetics
  - Animated elements and smooth transitions
  - Fully responsive layout for all devices

- **Interactive Elements**
  - Server status widget
  - Click-to-copy server IP
  - Dynamic player count display
  - Media gallery with touch support

- **Game Mode Showcases**
  - UHC Mode details and features
  - Sword Mode mechanics and leaderboard
  - Tournament information

- **Community Integration**
  - Discord server widget
  - Social media links
  - YouTube/Twitch embeds

## 🚀 Hosting on GitHub Pages

### Step 1: Prepare Your Repository

1. Create a GitHub account if you don't have one at [GitHub](https://github.com)

2. Create a new repository:
   - Go to GitHub.com and click the '+' icon
   - Choose 'New repository'
   - Name it `cnb-website` (or your preferred name)
   - Make it Public
   - Don't initialize with README (we already have one)

### Step 2: Upload Your Website

1. Install Git on your computer if you haven't already

2. Open terminal/command prompt in your website folder

3. Initialize Git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial website commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/cnb-website.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub

2. Click 'Settings' tab

3. Navigate to 'Pages' in the left sidebar

4. Under 'Source':
   - Select 'Deploy from a branch'
   - Choose 'main' branch
   - Select '/ (root)' folder
   - Click 'Save'

5. Wait a few minutes for deployment

6. Your site will be live at: `https://yourusername.github.io/cnb-website`

### Step 4: Custom Domain (Optional)

1. In repository Settings > Pages:
   - Under 'Custom domain'
   - Enter your domain (e.g., `www.cnbteam.com`)
   - Click 'Save'

2. Add DNS records at your domain provider:
   - Type: CNAME
   - Host: www
   - Value: yourusername.github.io

3. Wait for DNS propagation (up to 24 hours)

## 🔄 Updating Your Website

1. Make changes to your local files

2. Push updates to GitHub:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```

3. GitHub Pages will automatically rebuild and deploy

## 🛠️ Customization

### Updating Content

1. **Server Information**
   - Edit server IP in `index.html`
   - Update Discord link in footer

2. **Founder Information**
   - Modify founder cards in `index.html`
   - Update profile images in `assets/founders/`

3. **Game Modes**
   - Edit mode descriptions in `index.html`
   - Update gameplay videos/screenshots

4. **Theme Colors**
   - Modify CSS variables in `styles/main.css`:
   ```css
   :root {
       --primary-color: #9d4edd;
       --secondary-color: #6c3a9e;
       --accent-color: #ffffff;
       /* ... */
   }
   ```

## 📝 Need Help?

If you encounter any issues:
1. Check GitHub Pages build logs in repository Settings
2. Ensure all file paths are relative to the root
3. Verify all assets are properly uploaded
4. Test locally before pushing changes

## 🔒 Security Best Practices

1. Never commit sensitive information
2. Keep API keys in environment variables
3. Use HTTPS for external resources
4. Regularly update dependencies