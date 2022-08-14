const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  createCard() {
    return `
    <div class="card mb-5" style="width: 18rem;">
      <img src="../images/Engineer.png" class="card-img-top" alt="Engineer Tony Stark">
        <div class="card-header text-center text-bg-warning">
          <h3 class="card-title">${this.name}</h3>
          <h5 class="card-title">${this.role}</h5>
        </div>

        <div class="card-body text-bg-light">
          <ul class="list-group list-group-flush text-bg-light">
            <li class="list-group-item text-bg-light">ID: ${this.id}</li>
            <li class="list-group-item text-bg-light">Email: ${this.email}</li>
            <li class="list-group-item text-bg-light">GitHub: ${this.github}</li>
          </ul>
        </div>
    </div>
    `
  }
}

module.exports = Engineer;
