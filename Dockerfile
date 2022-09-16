# STEP-1 BUILD
# Defining node image and giving alias as node-helper
# It's better to define version otherwise me might face issue in future build

FROM nginx
FROM  node:14-alpine3.15 as node

#Accepting build-arg to create environment specific build
#it is useful when we have multiple environment (e.g: dev, tst, staging, prod)
#default value is development
# ARG build_env=development

#Creating virtual directory inside docker image
WORKDIR /app

COPY . .

# RUN npm cache clean --force

#installing deps for project
# RUN cd app
RUN npm install -g @angular/cli@8

RUN pwd
RUN npm install

#creating angular build
RUN pwd

RUN ng build --configuration=production

#STEP-2 RUN
#Defining nginx img
FROM nginx:1.20 as ngx

#copying compiled code from dist to nginx folder for serving
COPY --from=node /dist/ /usr/share/nginx/html/

#copying nginx config from local to image
COPY /nginx.conf /etc/nginx/conf.d/default.conf

#exposing internal port
EXPOSE 80
EXPOSE 8888
