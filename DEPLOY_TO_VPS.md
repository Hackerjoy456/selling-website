# Deploying to VPS

This guide explains how to deploy your React/Vite application to a Virtual Private Server (VPS).

## Prerequisites

1.  **VPS Access**: You need the IP address, username (usually `root` or `ubuntu`), and password/SSH key for your server.
2.  **Domain Name**: (Optional) If you want to use a custom domain.

## Step 1: Push Code to GitHub

First, ensure your latest code is on GitHub.
In your local terminal (VS Code), run:

```bash
# If you want to overwrite the remote repository with your local version:
git push -f origin main
```

## Step 2: Connect to your VPS

Open a terminal and SSH into your server:

```bash
ssh username@your_vps_ip
# Example: ssh root@192.168.1.100
```

## Step 3: Install Dependencies (First Run Only)

Update your server and install Node.js, NPM, and Git.

**For Ubuntu/Debian:**

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Git
sudo apt install git -y

# Install Node.js (Version 18 or 20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v
```

## Step 4: Clone the Repository

Navigate to where you want to host the site (e.g., `/var/www`):

```bash
cd /var/www
# Clone your repository
git clone https://github.com/Hackerjoy456/selling-website.git
cd selling-website
```

## Step 5: Install and Build

```bash
# Install project dependencies
npm install

# Build the project
npm run build
```

This will create a `dist` folder containing your static website.

## Step 6: Serve the Website

### Option A: Using Nginx (Recommended for Production)

1.  Install Nginx:
    ```bash
    sudo apt install nginx -y
    ```

2.  Create a configuration file:
    ```bash
    sudo nano /etc/nginx/sites-available/selling-website
    ```

3.  Paste the following (replace `your_domain_or_ip` with your actual IP or domain):
    ```nginx
    server {
        listen 80;
        server_name your_domain_or_ip;

        root /var/www/selling-website/dist;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    ```

4.  Enable the site and restart Nginx:
    ```bash
    sudo ln -s /etc/nginx/sites-available/selling-website /etc/nginx/sites-enabled/
    sudo rm /etc/nginx/sites-enabled/default  # Optional: remove default site
    sudo nginx -t
    sudo systemctl restart nginx
    ```

### Option B: Using 'serve' (Quick Test)

If you just want to run it quickly without Nginx:

```bash
npm install -g serve
serve -s dist -l 80
```

## Updating New Changes

When you make changes locally:

1.  Push to GitHub: `git push origin main`
2.  SSH into VPS: `ssh user@ip`
3.  Pull and Rebuild:
    ```bash
    cd /var/www/selling-website
    git pull origin main
    npm install
    npm run build
    ```
