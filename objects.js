let car1 = {
  name: 'bmw',
  price: 20000,
  year: 2025, 
}
console.log(car1.year);

var a = {
  myProperty: {
    b: 'hi'
  }
};

console.log(a.myProperty.b);

var c = {
  myProperty: [
    { d: 'this' },
    { e: 'that' },
    { d: 'those' },
    { f: 'these' },
  ]
}
console.log(c.myProperty);


let contacts = {
  customers: [
        { id: 101, fistName: 'Bob', lastNmae: 'Tabar', phoneNumber: ['(123) 456-7890', '(123) 567-8901'] },

        { id: 102, fistName: 'Richard', lastNmae: 'Boughton', phoneNumber: ['(123) 555-7894', '(123) 555-8903'] },
  ],
  employers: [
        { fistName: 'Steve', lastNmae: 'Jaworski', phoneNumber: ['(312) 456-7890', '(312) 567-8901'] },

        { fistName: 'Conrad', lastNmae: 'Tabar', phoneNumber: ['(312) 456-7890',] },

        { fistName: 'Grant', lastNmae: 'Tabar', phoneNumber: ['(312) 456-7890',] },

  ]
};
console.log(contacts.customers);

let car = {
  make: 'BMW',
  make: 'Toyota',
  model: '7451i',
  year: 2010,
  getprice: function() {
    return 5000;
  },
  printDescription: function() {
    console.log(this.make + ' ' + this.model);
  }
}

car.printDescription();
console.log(car.year);

var anotherCar = {};
anotherCar.name = 'myCar'
console.log(anotherCar.name);
