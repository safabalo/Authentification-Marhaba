# Deployement steps using Docker

## First method: using command line

1. Creating Two files of Dockerfile, by using the command `type nul > Dockerfile`
   1. Backend Dockerfile
   2. Frontend Dokerfile
2. Filling the files with image instruction
3. Creating network to link between multiple docker host `docker network create app-net`
4. Pulling mongo image and running container based on the image `docker container run -d --name marhaba-db -v marhaba-db:/data/db --network app-net mongo`
5. Create backend image 
6. create Frontend image
7. Running the container `docker container run -d --name marhaba -v ${pwd}:/app -v /app/node_modules --network app-net -p 3000:3000 backend .`

## Second method : Using DockerCompose

1. Creating Two files of Dockerfile, by using the command `type nul > Dockerfile`
   1. Backend Dockerfile
   2. Frontend Dokerfile
2. Filling the files with image instruction
3. Creating docker-compose.yaml by `touch docker-compose.yaml` to link the both Dockerfile created before
4.  Running docker compose `docker-compose up`