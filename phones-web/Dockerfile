FROM nginx:1.11.3-alpine

# Copy built app to wwwroot
COPY dist /usr/share/nginx/html

# Configure for angular fallback routes
COPY nginx.conf /etc/nginx/nginx.conf

