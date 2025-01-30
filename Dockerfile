# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Copy the SQLite database file to the container
COPY database.db /app/database.db

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose the port your app will run on
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]
