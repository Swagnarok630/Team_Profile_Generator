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
    <div class="card mb-5" style="width: 18rem;">
      <img src="../images/Manager.png" class="card-img-top" alt="Manager Nick Fury">
        <div class="card-header text-center text-bg-primary">
          <h3 class="card-title">${this.name}</h3>
          <h5 class="card-title">${this.role}</h5>
        </div>

        <div class="card-body text-bg-light">  
          <ul class="list-group list-group-flush text-bg-light">
            <li class="list-group-item text-bg-light">ID: ${this.id}</li>
            <li class="list-group-item text-bg-light">Email: ${this.email}</li>
            <li class="list-group-item text-bg-light">Office Number: ${this.officeNumber}</li>
          </ul>
        </div>
    </div>
    `
  }
}

module.exports = Manager;
