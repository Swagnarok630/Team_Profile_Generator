const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
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
          <p class="card-text">Office Number: ${this.officeNumber}</p>
        </div>
      </div>
    `
  }
}

module.exports = Manager;
