
  # Boiler Build

  This is a code bundle for Boiler Build. The original project is available at https://www.figma.com/design/OIYgHRTFk0KcJw0ef0Tghm/Boiler-Build.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ---

  ## Deploying to a Linux Server with Node + PM2

  This project builds to a static site with Vite. You can deploy by building locally and serving the generated `build/` directory on your Linux server using Node and PM2. Optionally, you can place Nginx in front for domain and HTTPS.

  ### Overview
  - Build locally with Vite; upload the `build/` directory to the server.
  - Serve static files with PM2 (no custom Node server required).
  - Optionally configure Nginx for port 80/443 and TLS.

  ### 1) Prerequisites on your server
  - Linux server (examples use Ubuntu/Debian)
  - Node.js 20 LTS and PM2 installed

  ```bash
  # Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  sudo npm i -g pm2
  node -v && pm2 -v
  
  # App directory
  sudo mkdir -p /var/www/boilerline-design
  sudo chown $USER:$USER /var/www/boilerline-design
  ```

  ### 2) Build locally (on your development machine)
  ```bash
  npm ci
  npm run build
  # output is in ./build
  ```

  ### 3) Upload the build to the server
  From your machine (PowerShell or any terminal with OpenSSH):
  ```bash
  scp -r ./build/ user@your-server-ip:/var/www/boilerline-design/
  ```
  Result on the server: `/var/www/boilerline-design/build/...`

  ### 4) Serve with Node (PM2, SPA-aware)
  Option A: PM2’s built-in static server (simplest)
  ```bash
  # on the server
  cd /var/www/boilerline-design
  pm2 serve build 3000 --spa --name boilerline
  pm2 save
  pm2 startup  # follow the printed command to enable boot-start
  ```
  - Visit `http://SERVER_IP:3000`
  - `--spa` ensures client-side routing works (serves `index.html` for unknown routes)

  Option B: `npx serve` (alternative)
  ```bash
  cd /var/www/boilerline-design
  pm2 start "npx serve -s build -l 3000" --name boilerline
  pm2 save
  pm2 startup
  ```

  ### 5) Optional: expose on port 80/443 with Nginx and TLS
  Install Nginx and open firewall:
  ```bash
  sudo apt-get update
  sudo apt-get install -y nginx
  sudo ufw allow 'Nginx Full' || true
  ```

  Create a site config to reverse proxy to PM2 on port 3000:
  ```bash
  sudo bash -c 'cat >/etc/nginx/sites-available/boilerline <<EOF
  server {
      listen 80;
      server_name your-domain.com www.your-domain.com;

      location / {
          proxy_pass http://127.0.0.1:3000;
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
      }
  }
  EOF'
  sudo ln -s /etc/nginx/sites-available/boilerline /etc/nginx/sites-enabled/boilerline
  sudo nginx -t && sudo systemctl reload nginx
  ```

  Add free HTTPS with Certbot:
  ```bash
  sudo apt-get install -y certbot python3-certbot-nginx
  sudo certbot --nginx -d your-domain.com -d www.your-domain.com
  ```

  ### 6) Deploying updates
  - Rebuild locally, re-upload `build/`, then (if needed) reload the PM2 app.
  ```bash
  npm run build
  scp -r ./build/ user@your-server-ip:/var/www/boilerline-design/
  
  # on the server (usually not required for pure static hosting, but safe)
  pm2 reload boilerline
  ```

  ### 7) Troubleshooting tips
  - Client-side routing 404s: ensure `--spa` is used when serving.
  - Port already in use: change `3000` to another free port.
  - Permissions: ensure `/var/www/boilerline-design` is owned by the running user.
  - Boot on restart: confirm `pm2 save` and `pm2 startup` ran successfully.

  ### Optional: Build on the server (git pull workflow)
  ```bash
  # one-time setup
  cd /var/www
  git clone https://github.com/your/repo.git boilerline-design
  cd boilerline-design
  npm ci
  npm run build
  pm2 serve build 3000 --spa --name boilerline
  pm2 save && pm2 startup

  # subsequent deploys on the server
  cd /var/www/boilerline-design
  git pull
  npm ci
  npm run build

  pm2 start ecosystem.config.js --env production
  pm2 save
  pm2 startup   # follow the printed command

  npm run build
  pm2 reload boilerline
  ```
  
