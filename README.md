It works on my machine 
Any project can have different requirements/dependencies of different it is possible to miss out some thing and have different version of dependencies can break code. Because every project have some dependencies and a environment set-up.

Virtual Box vs Docker -> Virtual box have a os on host machine while it is not necessarily needed to have a os in case of docker

docker demon (cli that actually helps us create run docker containers)
hub.docker.com
- docker run -it ubuntu(image_name)
- docker exec -it <container-name> /bin/bash

-> custom docker image publish on hub.docker.com and use it locally using docker on any machine
->docker container ls (list all the running containers on docker)
->docker container ls  -a(list all the containers on docker)
-> docker image or docker image ls (to list all the images on local machine)

->docker start container_name (to start a container)
->docker stop container_name (to stop a container)
->docker run -it ubuntu(image_name)  (spin up a new container)
->docker exec container_name (command)  (to run the command on docker and get the result in terminal)
->docker exec -it container_name bash  (to run the command on docker and connect my terminal to docker terminal and do not disconnect)

-> -it (interactive)-> to connect local/cloud machine terminal to docker cli

#port mapping
-> docker run -it -p {port_on_machine_which_we_are_running_docker}:{port_on_docker_machine} container_name eg -> docker run -it -p 1025:1025 container_name

#environment variables (-e is use to pass environment variable key(name_of the key which will be accessed in docker image/container and value is the value which we want to pass))
-> docker run -it -p 1025:1025 -e key=value -e key=value container_name

#build a custom docker image
(First create a project and create a Dockerfile in it inside the Dockerfile write the command for installation of the packages required and command for copying the files needed to build the images)
-> docker build -t docker_image_name path_of_the_docker_file

-> Caching Layers, Caching

->Publishing to Hub
Create a repository on docker hub
Create a custom image locally with the same name push it docker hub

-> docker push image_name (image and repository name should be same)

#docker compose (in real world applications we will need to run multiple containers having different configurations, port mappings and in order to run a application we will need to run all these containers individually one by one but running every container manually can be tedious and not appropriate way so there is a tool that solves that issue name  (Docker Compose ) 
-> So with the help of docker compose we can set-up multiple containers, create multiple containers and destroy multiple containers
-> So inside docker compose file we can configure which containers we want to run  

-> docker compose up (pull and runs all the configurations which are inside docker compose)
-> docker compose down(to remove/delete the container)
-> docker compose up -d (deattached mode to run docker containers in background)
