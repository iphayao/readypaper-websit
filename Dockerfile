## BUILD ENVIRONMENT ##
# Use official base image of Nodejs
FROM node:16-alpine as build

# Set working directory
RUN mkdir /app
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --ignore-platform --network-timeout 100000

COPY . .

# Start build app
RUN yarn build


## PRODUCTION ENVIRONMENT ##

# User official base image Nginx
FROM nginx:stable-alpine

# Copy built app to Nginx html
COPY --from=build /app/out /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Make port 80 available to the world outside container
EXPOSE 80

# Run web server
CMD [ "nginx", "-g", "daemon off;" ]
