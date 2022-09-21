# STEP-1 BUILD
# Defining node image and giving alias as node-helper
# It's better to define version otherwise me might face issue in future build

FROM nginx
FROM  node:14 as node

#Accepting build-arg to create environment specific build
#it is useful when we have multiple environment (e.g: dev, tst, staging, prod)
#default value is development
ARG build_env=production

#Creating virtual directory inside docker image
WORKDIR /app

COPY . .

#installing deps for project
# RUN cd app
RUN npm install -g @angular/cli@8

RUN npm install

RUN npm run build --outputPath=./dist/ --configuration $configuration
RUN ls
RUN pwd
#STEP-2 RUN
#Defining nginx img
FROM nginx:1.20 as ngx

#copying nginx config from local to image
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#copying compiled code from dist to nginx folder for serving
COPY ./dist/ /usr/share/nginx/html/

#exposing internal port
EXPOSE 80

# ARG configuration=production
# RUN npm run build -- --outputPath=./dist/out --configuration $configuration

