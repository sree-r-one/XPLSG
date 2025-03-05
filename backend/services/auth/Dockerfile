# Use Node image as base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (improves caching)
COPY package.json package-lock.json ./

# Install production dependencies (omit dev dependencies)
RUN npm install --omit=dev

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Start the application in production mode
CMD ["node", "server.js"]
