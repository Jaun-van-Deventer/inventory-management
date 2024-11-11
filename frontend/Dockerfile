# frontend/Dockerfile

# Use Node.js as the base image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY . .

# Build the frontend
RUN npm run build

# Use a lightweight server for the frontend
FROM nginx:alpine

# Copy build output to the Nginx server's default location
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
