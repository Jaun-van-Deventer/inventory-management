# backend/Dockerfile

# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend code to the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]
