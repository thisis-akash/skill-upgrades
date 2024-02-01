# To run the application  
This application has separate docker/containerization configuration
based on different purpose.  
`For development purpose,`   
the configuration is stored as Dockerfile.dev  
and `for the production version,`   
the configuration is stored in the conventional Dockerfile  
For ease in development purpose, docker compose configuration is also present which takes care of running live unit tests

## Development Environment  
### Using Docker Compose  
`docker-compose up --build`  
### Using Docker CLI  
`docker build -f Dockerfile.dev .`  
`docker run -p 3000:3000 imageid`
### For UTCs with live reload when running the app using Docker CLI  
Run the above command, find the container id by running `docker ps` in a second terminal.
Then run the below command by substituting the container id.  
`docker exec -it containerid npm run test`

## Production Environment  
> The production docker configuration is multi-step docker build
> where the first stage is a build phase that builds a production version
> of the application.
> The second phase copies that over to serve over NGINX, a production grade server.  

`docker build .`  
`docker run -p 8080:80 imageid` 