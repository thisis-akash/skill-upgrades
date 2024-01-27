# Specify a base image
# A base image with node and npm installed
FROM node:14-alpine

# Declare/create working dir inside container
WORKDIR /usr/app

# Install some depenendencies
# Separating out copying of package.json so that we can prevent
# reinstallation of node_modules due to cache busting and rebuilding
# if project files are changed
COPY ./package.json ./
RUN npm install

# Copy project files into container working dir
# If project files are changed and we rebuild the image
# Steps from here on out will not use cached images and will be re-run
COPY ./ ./

# Default command
CMD ["npm", "start"]