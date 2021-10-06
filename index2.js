const fs = require("fs")
const Schema = require("./emp_pb");

const masum = new Schema.Employee();
masum.setId(1001);
masum.setName("Masum");
masum.setSalary(5000);


const hussain = new Schema.Employee();
hussain.setId(1002);
hussain.setName("Hussain");
hussain.setSalary(5000);


const ahmad = new Schema.Employee();
ahmad.setId(1003);
ahmad.setName("Ahmad");
ahmad.setSalary(5000);


const empls = new Schema.Employees();
empls.addEmployees(masum)
empls.addEmployees(hussain)
empls.addEmployees(ahmad)

const bytes = empls.serializeBinary();

console.log("Binary: ", bytes);
fs.writeFileSync("empproto", bytes)


const deserialized = Schema.Employees.deserializeBinary(bytes);
console.log(deserialized.toString());