import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component loaded");

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(34, "Abdullah", "Türkmen", "İstanbul")
let user2 = new User(13, "Baran", "Kökçekli", "Ankara")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())

//console.log(userService.getById(13))

userService.getCustomerById(1)
userService.listCustomers()


//let customer = {id:1, firstName: "Abdullah"}

//customer.lastName = "Türkmen"

//console.log(customer.lastName);

let customerToAdd = new Customer(1, "Abdullah", "Türkmen", "İstanbul");
customerToAdd.type = "customer";

userService.load();
userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted())