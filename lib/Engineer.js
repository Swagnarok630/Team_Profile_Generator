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
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="card-title">${this.role}</h6>
          <p class="card-text">ID: ${this.id}</p>
          <p class="card-text">Email: ${this.email}</p>
          <p class="card-text">GitHub: ${this.github}</p>
        </div>
      </div>
    `
  }
}

module.exports = Engineer;
