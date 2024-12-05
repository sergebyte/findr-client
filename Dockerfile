FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install all dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Expose the port for the application
EXPOSE 8080

# Start the development server
CMD [ "npm", "start" ]
