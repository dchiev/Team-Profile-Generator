// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name,job,id,email,github) {
        this.name = name;
        this.job= job;
        this.id = id;
        this.email - email
        this.github = github;
    }
} 