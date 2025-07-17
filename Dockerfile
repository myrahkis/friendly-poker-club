# Use official Node.js LTS image as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Nuxt application
RUN npm run build

# Expose the port defined in HOST environment variable
EXPOSE 3000

# Set environment variables
ENV API_BASE=https://friendlypoker.ru
ENV HOST=0.0.0.0
ENV YM_COUNTER_ID=103353436

# Start the application
CMD ["npm", "start"]
