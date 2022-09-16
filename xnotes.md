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


# fly io postgress cred
 Username:    postgres
  Password:    c218c7f5b4686e54b3b1c9668a645a698fa9ecac245c8c06
  Hostname:    hr-system-db.internal
  Proxy Port:  5432
  PG Port: 5433

# build the image
docker build -t webserver -f DockerfileT .

# run the container
  docker run -it --rm -d -p 8044:80 --name web webserver
