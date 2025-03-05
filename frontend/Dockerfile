# Stage 1: Build the frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json ./

# Install dependencies properly
RUN npm ci

# Copy the entire frontend code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Fix: Copy NGINX configuration to /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files to NGINX static folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
