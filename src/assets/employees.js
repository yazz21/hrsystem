// employees.js
var faker = require('faker')
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var first_name = faker.name.firstName()
    var last_name = faker.name.lastName()
    var gender = faker.name.gender()
    var department = faker.name.jobType()
    var salary = faker.datatype.number({ min: 1000000 })
    var branch = faker.address.cityName()
    var position = faker.name.jobTitle()
    var company = faker.company.bs()
    var phonenumber = faker.phone.number()
    var email = faker.internet.email()

    employees.push({
      "id": id,
      "first_name": first_name,
      "last_name": last_name,
      "gender": gender,
      "department": department,
      "salary": salary,
      "branch": branch,
      "position": position,
      "company": company,
      "phonenumber": phonenumber,
      "email": email
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees
