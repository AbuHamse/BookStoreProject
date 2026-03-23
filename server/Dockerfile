# Use a specific, lightweight version of Node
FROM node:24-alpine3.23

# Set the working directory (absolute path preferred)
WORKDIR /app

# Copy dependency files first to leverage Docker caching
# Note: The dot (.) represents the current WORKDIR (/app)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Document the port the app runs on
EXPOSE 4000

# The command to start your app
CMD ["node", "server.js"]