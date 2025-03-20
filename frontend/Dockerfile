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

# Stage 2: Use a lightweight web server
FROM node:20-alpine

WORKDIR /usr/src/app

# Install a simple HTTP server
RUN npm install -g serve

# Copy built frontend files from the builder stage
COPY --from=builder /app/dist .

# Ensure the container runs on Azure's assigned port
ENV PORT ${PORT:-8080}
EXPOSE 8080

# Fix: Dynamically substitute PORT in the serve command
CMD ["sh", "-c", "serve -s . -l $PORT"]
