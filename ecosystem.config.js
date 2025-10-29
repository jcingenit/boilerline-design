module.exports = {
  apps: [
    {
      name: 'boilerline',
      script: 'npx',
      args: 'serve -s build -l 3000',
      cwd: './',
      exec_mode: 'fork',
      instances: 1,
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};


