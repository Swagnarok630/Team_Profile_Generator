const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  createCard() {
    return `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="card-title">${this.role}</h6>
          <p class="card-text">ID: ${this.id}</p>
          <p class="card-text">Email: ${this.email}</p>
          <p class="card-text">School: ${this.school}</p>
        </div>
      </div>
    `
  }
}

module.exports = Intern;
