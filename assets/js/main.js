
const company = {
  name: 'Iron Soft S.L',
  description: 'Mobile and Web applications',
  createdAt: new Date('2020-01-01'),
  contact: {
    country: 'Spain',
    city: 'Madrid',
    address: 'C/Falsa 123',
    zipcode: 28002,
    email: 'info@ironsoft.com',
  },
  employees: [
    {
      name: 'Victoria',
      lastName: 'Doe',
      position: 'CTO',
      skills: [
        'Java',
        'Spring',
        'Node',
        'Mongo'
      ],
      fullName: function () {
        return `${this.name} ${this.lastName}`;
      }
    },
    {
      name: 'Pedro',
      lastName: 'García',
      position: 'Developer',
      skills: [
        'JavaScript',
        'Node',
        'Mongo',
        'Bash'
      ],
      fullName: function () {
        return `${this.name} ${this.lastName}`;
      }
    },
    {
      name: 'María',
      lastName: 'Pérez',
      position: 'Developer',
      skills: [
        'JavaScript',
        'HTML+CSS'
      ],
      fullName: function () {
        return `${this.name} ${this.lastName}`;
      }
    },
    {
      name: 'John',
      lastName: 'Doe',
      position: 'Marketing',
      skills: [
        'Photoshop',
        'Malchimp',
        'SEO/SEM'
      ],
      fullName: function () {
        return `${this.name} ${this.lastName}`;
      }
    }
  ],
  addEmployee: function (employee) {
    // Employee functions must be added as attribute at this point
    // hiding the implementation.
    employee.fullName = function () {
      return `${this.name} ${this.lastName}`;
    }

    this.employees.push(employee);
  },
  getContactInfo: function () {
    return `${this.contact.address}, ${this.contact.zipcode}. ${this.contact.city}, ` +
      `${this.contact.country}. Since ${this.createdAt.getFullYear()}`;
  },
  getEmployeesByPosition(position) {
    const positionEmployees = [];
    for (let employee of this.employees) {
      if (employee.position === position) {
        positionEmployees.push(employee);
      }
    }
    return positionEmployees;
  }
}


console.log('Name: ', company.name);
console.log('Description: ', company.description);
console.log('Contact information: ', company.getContactInfo());

const employee = {
  name: 'Pepón',
  lastName: 'Álvarez',
  position: 'CEO',
  skills: [
    'Office',
    'Business'
  ],
}
company.addEmployee(employee);
console.log('Employees: ');
for (let employee of company.employees) {
  console.log(`\t- [${employee.position}] ${employee.fullName()}`);
}

console.log('Developers: ', company.getEmployeesByPosition('Developer'));
