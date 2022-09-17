get from employees.ls => faker => write to mockTwo.json

return this.http.get(this.url).subscribe(res = {
this.http.post(this.urlemployee, res)
})

onclick(id){
this.http.get(`url/employee?company=${id}`)
}

fix the company/emoployee rout
fix the company/emoployee/ rout
news routes

fix table sort and ..

# Dockerfile need .dockerignore

# fly io postgress cred
 Usernamestgres
  Password:    c218c7f5b4686e54b3b1c9668a645a698fa9ecac245c8c06
  Hostname:    hr-system-db.internal
  Proxy Port:  5432
  PG Port: 5433

# build the image
docker build -t webserver -f DockerfileT .

# run the container
  docker run -it --rm -d -p 8044:80 --name web webserver


ERRO[0606] Can't add file /media/yazz/projectvolume/Angular/hrsystem/dist/main-es2015.5eae25a502a69a883bd7.js to tar: io: read/write on closed pipe 
ERRO[0606] Can't close tar writer: io: read/write on closed pipe 
Error failed to fetch an image or build from source: error building: unexpected EOF

  RUN chown -R /user/local/webapp/


create database hrsystem;
create table 
    id
    first_name 
    last_name
    gender
    department
    salary
    branch
    position
    company
    phonenumber
    email

create table department(
  id
  name
  description
)
create table company (
  id
  name
  logo
)
create table news (
  id
  title
  body
  company int;
  add foriekng key comapny from table id;
)
