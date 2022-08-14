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
    <div class="card mb-5" style="width: 18rem;">
      <img src="../images/Intern.png" class="card-img-top" alt="Intern Peter Parker">
        <div class="card-header text-center text-bg-danger">
          <h3 class="card-title">${this.name}</h3>
          <h5 class="card-title">${this.role}</h5>
        </div>

        <div class="card-body text-bg-light">
          <ul class="list-group list-group-flush text-bg-light">
            <li class="list-group-item text-bg-light">ID: ${this.id}</li>
            <li class="list-group-item text-bg-light">Email: ${this.email}</li>
            <li class="list-group-item text-bg-light">School: ${this.school}</li>
          </ul>
        </div>
    </div>
    `
  }
}

module.exports = Intern;
