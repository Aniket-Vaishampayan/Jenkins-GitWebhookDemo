# Use an official Node.js runtime as a parent image
FROM node:20 as build-stage




# Set the working directory to /app
WORKDIR /app

RUN npm cache clean --force

COPY . .

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Install Angular CLI globally
RUN npm install -g @angular/cli

#creating angular build
RUN ng build 

# Build the app for production
#RUN npm run build --prod

# Use NGINX as the base image for serving the Angular app
FROM nginx:alpine

# Copy the built Angular app from the build stage to the NGINX server directory
COPY --from=build-stage /app/dist/demo-employee /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]