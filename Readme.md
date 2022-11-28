# Deployement & unit testing 
## Deployement steps using Docker

### First method: using command line

1. Creating Two files of Dockerfile, by using the command `type nul > Dockerfile`
   1. Backend Dockerfile
   2. Frontend Dokerfile
2. Filling the files with image instruction
3. Creating network to link between multiple docker host `docker network create livraison-marhaba-app-backend`
4. Pulling mongo image and running container based on the image `docker container run -d --name marhaba-db -v marhaba-db:/data/db --network livraison-marhaba-app-backend mongo`
5. Create backend image `docker build -t livraison-marhaba-backend`
6. Running the container `docker container run -d --name livraison-marhaba-container -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-app-backend -p 3000:3000 livraison-marhaba-backend`
7. for frontend we create network as first time `docker network create livraison-marhaba-app-frontend`
8. create Frontend image `docker build -t livraison-marhaba-frontend .`
9.  running container `docker container -d --name livraison-marhaba-container-front -v livraison-marhaba-app-frontend -p 3000:3000 livraison-marhaba-frontend`

### Second method : Using DockerCompose

1. Creating Two files of Dockerfile, by using the command `type nul > Dockerfile`
   1. Backend Dockerfile
   2. Frontend Dokerfile
2. Filling the files with image instruction
3. Creating docker-compose.yaml by `touch docker-compose.yaml` to link the both Dockerfile created before
4.  Running docker compose `docker-compose up`

## Unit testing

* Backend unit Testing used Library: Jest
1. Create folder in backend api named Test `mkdir test`
2. Create file inside folder named user test `touch user.test.js`
3. Adding Jest, supertest Library `npm i jest` and `npm i supertest`
4. Changing in package.json in object script property test **jest** to run it easily
5. starting testing by login functionnalities testing
