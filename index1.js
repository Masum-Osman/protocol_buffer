const fs = require("fs")

const emp = []

emp.push({
    "name" : "Masum",
    "salary" : 1000,
    "id" : 1001
})

const hussain = {
    "name" : "Hussain",
    "salary" : 5000,
    "id" : 1002
}

emp.push(hussain)

emp.push(
    {
        "name" : "Ahmed",
        "salary" : 3000,
        "id" : 1003
    }
)

console.log(emp);

fs.writeFileSync("empjson", JSON.stringify(emp))