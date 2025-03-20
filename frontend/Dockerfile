# Stage 1: Build frontend assets
FROM node:20-alpine AS builder

# Define the working directory
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies (clean install ensures exact dependency versioning)
RUN npm ci

# Copy remaining source files
COPY . .

# Build the frontend (Vite default build output is 'dist')
RUN npm run build

# Stage 2: Lightweight production server
FROM node:20-alpine

# Create a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Define working directory
WORKDIR /usr/src/app

# Install static file server globally
RUN npm install -g serve

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV PORT=8080
EXPOSE 8080

# Change ownership of files to the non-root user
RUN chown -R appuser:appgroup /usr/src/app

# Run as the non-root user
USER appuser

# Start server (serving the 'dist' directory explicitly)
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
